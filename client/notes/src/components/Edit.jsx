import { useNavigate, useParams } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
import Header from "./Header"
import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

function Edit({id}) {
    const params = useParams()
    const navigator = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [info, setInfo] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const date = new Date()
        if(title === '' || content === ''){
            return setInfo('Both fields must be filled in')
        }
        else{
            try {
                await axios.put('http://localhost:3000/protected/update',
                    {id: params.id, title, content, date: date.toLocaleTimeString() },
                    {headers: {
                        'Authorization': localStorage.getItem('accessToken')
                    }}
                ).then(() => navigator('/main'))
            } catch (e) {
                console.log(e)
            }
        }
        
    } 
    
    return (
			<div className='create'>
				<Header />
				<form onSubmit={handleSubmit} className='createForm'>
					<h1
						style={{
							fontFamily: '"Montserrat", sans-serif',
							fontSize: '24px',
							textAlign: 'center',
							padding: '15px',
							margin: '10px',
						}}
					>
						Edit form
					</h1>
					<MyInput
						style={{ width: '65%' }}
						type='text'
						placeholder='Title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<MyInput
						style={{ width: '65%' }}
						type='text'
						placeholder='Content'
						value={content}
						onChange={e => setContent(e.target.value)}
					/>
					<MyButton type='submit' style={{ margin: '15px 150px' }}>
						Edit
					</MyButton>
					<MyButton
						onClick={() => navigator('/main')}
						style={{ margin: '0px 150px', backgroundColor: 'red' }}
					>
						Back
					</MyButton>
					<h1
						style={{
							fontFamily: '"Montserrat", sans-serif',
							fontSize: '16px',
							textAlign: 'center',
							color: 'red',
							margin: '3px',
						}}
					>
						{info}
					</h1>
				</form>
			</div>
		)
} 

export default Edit
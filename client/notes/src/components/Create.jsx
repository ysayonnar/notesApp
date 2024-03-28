import axios from "axios"
import Header from "./Header"
import { useState } from "react"
import MyInput from "../UI/MyInput/MyInput"
import MyButton from "../UI/MyButton/MyButton"
import { useNavigate } from "react-router-dom"

function Create(){
    const navigator = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [info, setInfo] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const date = new Date()
        if(title === '' || content === ''){
            return setInfo('Both fields must be filled in')
        }else{
            try {
                const response = await axios.post('http://localhost:3000/protected/create',
                    { title, content, date: date.toLocaleTimeString() },
                    {headers: {
                        'Authorization': localStorage.getItem('accessToken')
                    }}
                )
            } catch (e) {
                console.log(e)
            }
            navigator('/main')
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
						Create form
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
						Create
					</MyButton>
					<MyButton onClick={() => navigator('/main')} style={{ margin: '0px 150px', backgroundColor: 'red'}}>
						Back
					</MyButton>
					<h1
						style={{
							fontFamily: '"Montserrat", sans-serif',
							fontSize: '16px',
							textAlign: 'center',
							color: 'red',
							margin: '3px'
						}}
					>
						{info}
					</h1>
				</form>
			</div>
		)
}

export default Create
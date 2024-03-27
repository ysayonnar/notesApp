import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Header from "./Header"
import MyButton from "../UI/MyButton/MyButton"
import MyInput from '../UI/MyInput/MyInput'
import axios from 'axios'

function AuthForm(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState('')
    const [info, setInfo] = useState('')
    const navigate = useNavigate()

    const checkValidation = () => {
        if(username.length < 4 || password.length < 4){
            return false
        }
        else{ 
            return true
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(checkValidation()){
            setInfo('')
            const response = await axios.post('http://localhost:3000/auth/login', {username, password})
            if(response.data.msg === 'successful auth.'){
                localStorage.setItem('accessToken', response.data['jwt-token'])
                navigate('/')//редирект на страницу с заметками
            }else{
                setInfo(response.data.msg)
                setUsername('')
                setPassword('')
            }
        }else{
            setUsername('')
            setPassword('')
            setInfo('The username or password is too short.')
        }
    }
    
    return (
			<div className='auth'>
				<Header />
				<form className='authForm' onSubmit={handleSubmit}>
					<h1
						style={{
							fontFamily: '"Montserrat", sans-serif',
							fontSize: '24px',
							textAlign: 'center',
							padding: '15px',
							margin: '10px',
						}}
					>
						Authorization
					</h1>
					<MyInput
						type='text'
						placeholder='Name'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<MyInput
						type='text'
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<MyButton type='submit' style={{ margin: '20px 150px' }}>
						Sign in
					</MyButton>
					<h1
						style={{
							fontFamily: '"Montserrat", sans-serif',
							fontSize: '16px',
							textAlign: 'center',
                            color: 'red'
						}}
					>
						{info}
					</h1>
				</form>
			</div>
		)
}

export default AuthForm
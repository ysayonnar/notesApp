import { useState } from "react"
import Header from "./Header"
import MyButton from "../UI/MyButton/MyButton"
import MyInput from '../UI/MyInput/MyInput'
import axios from 'axios'

function RegistrationForm(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [informator, setInformator] = useState('')
    const [success, setSuccess] = useState('black')

    const validateReg = () =>{
        if(username.length < 3 || password.length < 3){
            setSuccess('red')
            setInformator('The username or password is too short.')
            return false
        }
        else{
            return true
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            if(validateReg()){
                const response = await axios.post('http://localhost:3000/auth/registration', {username, password})
                const msg = response.data.msg
                if(msg === 'User was successfully registered.'){
                    setInformator(msg)
                    setSuccess('green')
                }
                else{
                    setInformator(msg)
                    setSuccess('red')
                }
                setUsername('')
                setPassword('')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className="registration">
            <Header/>
            <form onSubmit={handleSubmit} className="regForm">
                <h1 style={{fontFamily: '"Montserrat", sans-serif', fontSize: '24px', textAlign: 'center', padding: '15px', margin: '10px'}}>Registration</h1>
                <MyInput type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <MyInput type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <MyButton type="submit" style={{margin: '20px 150px'}}>Sign up</MyButton>
                <h1 style={{fontFamily: '"Montserrat", sans-serif', fontSize: '16px', textAlign: 'center', color: success}}>{informator}</h1>
            </form>
        </div>
    )
}

export default RegistrationForm
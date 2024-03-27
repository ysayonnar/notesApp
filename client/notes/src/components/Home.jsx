import MyButton from '../UI/MyButton/MyButton'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Home(){
    const navigate = useNavigate()

    function redirectRegistration(){
        navigate('/reg')
    }

    function redirectAuthorization(){
        navigate('/auth')
    }

	// function getjwt(){
	// 	console.log(localStorage.getItem('accessToken'))
	// }

    return (
			<div className='home'>
				<Header />
				<p className='desc'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					minima unde molestiae officia in cum saepe perferendis quisquam, vitae
					commodi expedita quibusdam repellat consectetur ex consequuntur
					explicabo totam quaerat ratione sint modi pariatur dolorem. Eveniet,
					placeat commodi! Corporis tenetur eius cumque quae rerum repudiandae
					veniam architecto eveniet autem iste totam iusto asperiores ab omnis,
					sit dolorum consectetur aliquid eos, itaque nulla odit soluta. Iure
					sed enim velit sunt! Totam, consequuntur. Lorem ipsum dolor sit amet.
				</p>
				<div className='buttons'>
					<MyButton onClick={redirectRegistration}>Регистрация</MyButton>
					<MyButton onClick={redirectAuthorization}>Авторизация</MyButton>
					{/* <MyButton onClick={getjwt}>get jwt</MyButton> */}
				</div>
			</div>
		)
}

export default Home
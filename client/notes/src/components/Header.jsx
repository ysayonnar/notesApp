import { useNavigate } from 'react-router-dom'

function Header(){
	const navigate = useNavigate()

	const handleClick = () =>{
		navigate('/')
	}

    return (
			<header style={{
				fontFamily: '"Montserrat", sans-serif',
				fontOpticalSizing: 'auto',
				fontWeight: '400',
				fontStyle: 'normal'
			}}>
				<h1 className='title' onClick={handleClick}>Notes</h1>
				<a href='https://github.com/ysayonnar' target='_blank'>
					<img
						style={{
							width: '42px',
							height: '42px',
						}}
						src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
						alt='GitHub'
					/>
				</a>
			</header>
		)
}

export default Header
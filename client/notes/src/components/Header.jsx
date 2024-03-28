import { useNavigate } from 'react-router-dom'
import tg from '../static/telegram.png'
import github from '../static/github-mark.png'

function Header(){
	const navigate = useNavigate()

	const handleClick = () =>{
		navigate('/')
	}

    return (
			<header
				style={{
					fontFamily: '"Montserrat", sans-serif',
					fontOpticalSizing: 'auto',
					fontWeight: '400',
					fontStyle: 'normal',
				}}
			>
				<h1 className='title' onClick={handleClick}>
					Notes
				</h1>
				<div className='contacts'>
					<a href='https://github.com/ysayonnar' target='_blank'>
						<img
							style={{
								width: '38px',
								height: '38px',
							}}
							src={github}
							alt='GitHub'
						/>
					</a>
					<a href='https://t.me/ysnrite' target='_blank'>
						<img
							src={tg}
							alt='Telegram'
							style={{ width: '38px', height: '38px' }}
						/>
					</a>
				</div>
			</header>
		)
}

export default Header
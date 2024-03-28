import { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton'
import axios from 'axios'

function Note({info}){
	const [isHovered, setIsHovered] = useState(false)

	const handleDelete = async(e) => {
		e.preventDefault()
		const config = {
			data: {
				id: info.id
			},
			headers: {'Authorization': localStorage.getItem('accessToken')}
		}
		try {
			await axios.delete('http://localhost:3000/protected/delete', config)
			.then(() => window.location.reload())
			
		} catch (e) {
			console.log(prev => !prev)
		}
	}

    return (
			<div className='note'>
				<h1 style={{ margin: '4px', fontSize: '24px', fontWeight: '700' }}>
					{info.title.length > 6
						? info.title.substring(0, 6) + '...'
						: info.title}
				</h1>
				<h3
					style={{
						fontSize: '14px',
						margin: '5px 10px',
						fontWeight: '400',
						height: '70px',
					}}
				>
					{info.content.length > 80
						? info.content.substring(0, 80) + '...'
						: info.content}
				</h3>
				<div
					className='note-buttons'
					style={{ display: 'flex', justifyContent: 'space-around' }}
				>
					<MyButton
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						style={{
							width: '50px',
							height: '25px',
							fontSize: '13px',
							backgroundColor: isHovered ? 'red' : '#95a789',
						}}
						onClick={handleDelete}
					>
						Delete
					</MyButton>
					<MyButton
						style={{
							width: '50px',
							height: '25px',
							fontSize: '13px',
							backgroundColor: '#95a789',
						}}
					>
						Edit
					</MyButton>
				</div>
			</div>
		)
}

export default Note
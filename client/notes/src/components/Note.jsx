function Note({info}){
    return (
			<div className='note'>
				<h1 style={{ margin: '4px', fontSize: '24px', fontWeight: '700' }}>
					{info.title.length > 6
						? info.title.substring(0, 6) + '...'
						: info.title}
				</h1>
				<h3 style={{ fontSize: '14px', margin: '5px 10px', fontWeight: '400'}}>
					{info.content.length > 70
						? info.content.substring(0, 70) + '...'
						: info.content}
				</h3>
			</div>
		)
}

export default Note
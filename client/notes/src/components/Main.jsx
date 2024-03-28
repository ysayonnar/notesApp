import { useEffect, useState } from "react"
import Header from "./Header"
import Note from './Note'
import axios from "axios"
import MyButton from "../UI/MyButton/MyButton"
import { useNavigate } from "react-router-dom"

function Main(){
    const navigator = useNavigate()
    const [notes, setNotes] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastNote = currentPage * 15
	const indexOfFirstNote = indexOfLastNote - 15
	const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote)

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

  
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        const getNotes = async() => {
            try {
                const response = await axios.get('http://localhost:3000/protected/get', {
                    headers: {
                        'Authorization': localStorage.getItem('accessToken')
                    }
                })
                setNotes(response.data.notes)
                setUserInfo(response.data.userData)
            } catch (e) {
                console.log(e)
            }
        }
        getNotes()
    }, [])

    return (
			<div className='main'>
				<Header />
				<div className='display'>
					<div className='display-header'>
						<h1 className='greet'>Hello, {userInfo.username}</h1>
						<MyButton
							onClick={() => navigator('/create')}
							style={{
								marginTop: '20px',
								marginRight: '80px',
								backgroundColor: '#33d46e',
							}}
						>
							Create
						</MyButton>
					</div>
					<div className='notes'>
						{currentNotes.map(note => (
							<Note key={note.id} info={note} />
						))}
					</div>
					<div className='pagination'>
						<MyButton
							onClick={prevPage}
							disabled={currentPage === 1}
							style={{ margin: '0 20px' }}
						>
							Prev
						</MyButton>
						<h2
							style={{
								fontFamily: '"Montserrat", sans-serif',
								textAlign: 'center',
								marginTop: '3px',
							}}
						>
							Page {currentPage}
						</h2>
						<MyButton
							onClick={nextPage}
							disabled={currentNotes.length < 15}
							style={{ margin: '0 20px' }}
						>
							Next
						</MyButton>
					</div>
				</div>
			</div>
		)
}

export default Main
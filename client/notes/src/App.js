import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RegistrationForm from './components/RegistrationForm'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/reg' element={<RegistrationForm/>} />
				<Route exact path='/auth' element={<h1>АВТОРИЗАЦИЯ</h1>} />
			</Routes>
		</Router>
	)
}

export default App

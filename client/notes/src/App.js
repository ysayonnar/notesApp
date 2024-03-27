import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RegistrationForm from './components/RegistrationForm'
import AuthForm from './components/AuthForm'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/reg' element={<RegistrationForm/>} />
				<Route exact path='/auth' element={<AuthForm/>} />
			</Routes>
		</Router>
	)
}

export default App

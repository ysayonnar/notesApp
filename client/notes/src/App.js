import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RegistrationForm from './components/RegistrationForm'
import AuthForm from './components/AuthForm'
import Main from './components/Main'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/reg' element={<RegistrationForm />} />
				<Route exact path='/auth' element={<AuthForm />} />
				<Route exact path='/main' element={<Main />} />
				<Route exact path='/create' element={<Create />} />
				<Route exact path='/edit/:id' element={<Edit/>} />
			</Routes>
		</Router>
	)
}

export default App

import { HashRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Devices from './pages/Devices'
import LoadingScreen from './components/LoadingScreen'
import {useSelector} from 'react-redux'
import WelcomeScreen from './pages/WelcomeScreen'

function App() {
  
  const isLoading = useSelector(state => state.isLoading);


  return (
    <HashRouter>      
      {isLoading && <LoadingScreen />}
      <Routes>
       <Route path="/" element = {<Login/>}/>
       <Route path='/welcome' element= {<WelcomeScreen />}/>
       <Route path="/devices" element = {<Devices/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App

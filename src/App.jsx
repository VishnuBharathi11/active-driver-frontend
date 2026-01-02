import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import UserLogin from './pages/userlogin'
import DriverLogin from './pages/driverlogin'
import UserDashboard from './pages/UserDashboard'
import DriverDashboard from './pages/DriverDashboard'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <div>
      <Routes>
      <Route path ="/" element={<Homepage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/UserLogin" element={<UserLogin/>}/>
      <Route path="/DriverLogin" element={<DriverLogin/>}/>
      <Route path="/UserDashboard" element={<UserDashboard/>}/>
      <Route path="/DriverDashboard" element={<DriverDashboard/>}/>
    </Routes>
    </div>
    </>
    
  )
}

export default App
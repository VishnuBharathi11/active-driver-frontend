import './App.css'
import Homepage from './homepage'
import About from './about'
import Contact from './contact'
import UserLogin from './userlogin'
import DriverLogin from './driverlogin'
import UserDashboard from './userdashboard1'
import DriverDashboard from './driverdashboard1'
import { Routes,Route } from 'react-router-dom'
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
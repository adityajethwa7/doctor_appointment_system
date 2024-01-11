import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctor from '../pages/doctor/Doctor'
import DoctorDetails from '../pages/doctor/DoctorDetails'
import {Routes,Route} from 'react-router-dom'
const Routers = () => {
  return (
   <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/doctors" element={<Doctor/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/doctordetails" element={<DoctorDetails/>}/>

</Routes>
   </div>
  )
}

export default Routers
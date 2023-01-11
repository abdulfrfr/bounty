import { BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from 'react'
import Login from "./Components/Login"
import Hero from "./Components/Hero"
import About from './Components/About'
import Dashboard from "./Components/Dashboard"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Navs from './Components/NavItems'

function App() {
  const [navbar, setNavbar] = useState(Navs)
  const [Page, setPage] = useState(Navs.filter((nav, index) => index === 0 ))
  const [styl, setStyl] = useState(0)
  const [show, setShow] = useState(true)
  const [showEdit, setShowEdit] = useState(false)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero styl={styl} setStyl={setStyl} navs={navbar} setNavs={setNavbar} Page={Page} setPage={setPage}/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login show={show} setShow={setShow} styl={styl} setStyl={setStyl} navs={navbar} setNavs={setNavbar} Page={Page} setPage={setPage}/>}/>
      <Route path="/dashboard" element={<Dashboard showEdit={showEdit} setShowEdit={setShowEdit}/>}/>
      <Route path="/signup" element={<Signup show={show} setShow={setShow} styl={styl} setStyl={setStyl} navs={navbar} setNavs={setNavbar} Page={Page} setPage={setPage}/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;

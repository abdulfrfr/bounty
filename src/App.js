import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Components/Login"
import Hero from "./Components/Hero"
import About from './Components/About'
import Dashboard from "./Components/Dashboard"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Signup from "./Components/Signup"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;

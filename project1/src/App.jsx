import './App.css'
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "animate.css"

function App() {
  return(
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/AboutUs' element={<About/>}/>  
      <Route path='/ContactUs' element={<Contact/>}/>  
     </Routes>    
    </BrowserRouter>
    </>
  )
}
  
export default App

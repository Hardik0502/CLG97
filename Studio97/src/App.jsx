import './App.css'
import About from './Pages/About/About'
import Blogs from './Pages/Blogs/Blogs'
import Help from './Pages/Help/Help'
import Home from './Pages/Home/Home'
import  { Routes, Route } from 'react-router-dom'
import Navbar from '../src/Constants/Navbar/Navbar'
import Packages from './Pages/Packages/Packages'
import Backend from '../Backend/Packages/Backend Layout/Backend'
import OrderRequest from './Order_Managing/OrderRequest'


function App() {
  
  return (
    <>

    {/* <Navbar /> */}
    <Routes>

      <Route path='/' element={ <Home />} />
      <Route path='/package' element={ <Packages />} />
      <Route path='/about' element={ <About />} />
      <Route path='/blogs' element={ <Blogs />} />
      <Route path='/help' element={ <Help />} />
      <Route path='/studio97.captian.admin97' element={< Backend />}  />
      <Route path='/order' element={ < OrderRequest /> } />

    </Routes>
    

    </>
  )
}

export default App

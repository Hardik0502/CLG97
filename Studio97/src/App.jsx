import './App.css'
import About from './Pages/About/About'
import Blogs from './Pages/Blogs/Blogs'
import Help from './Pages/Help/Help'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../src/Constants/Navbar/Navbar'
import Packages from './Pages/Packages/Packages'
import OrderRequest from './Order_Managing/OrderRequest'
import ReactGA from "react-ga4";
import Backend from '../Backend/Backend Layout/Backend'
import AdminLogin from '../Backend/Admin Authentication/AdminLogin'
import AdminProtectedRoute from '../Backend/Admin Authentication/AdminProtectedRoute'



function App() {

  return (
    <>

      {/* <Navbar /> */}
      <Routes>

        {/* Frontend Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/package' element={<Packages />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/help' element={<Help />} />

        {/* Backend Routes */}
        <Route path='/order' element={< OrderRequest />} />
        {/* <Route path='/studio97.captian.admin97' element={< Backend />} /> */}

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Backend */}
        <Route
          path="/Studio97.Backend.admin97/*"
          element={
            <AdminProtectedRoute>
              <Backend />
            </AdminProtectedRoute>
          }
        />

      </Routes>


    </>
  )
}

export default App

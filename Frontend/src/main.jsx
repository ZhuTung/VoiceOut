import { createRoot } from 'react-dom/client'
import Homepage from './pages/Common/Homepage'
import Login from './pages/Common/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './pages/Common/Registration'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
  </BrowserRouter>,
)
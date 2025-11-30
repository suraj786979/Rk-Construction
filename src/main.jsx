import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './App.jsx'
import UploadSection from './motion.jsx'
import AnimatedTextUploader from './service.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    {/* <UploadSection/> */}
    {/* <AnimatedTextUploader/> */}
  </StrictMode>,
)

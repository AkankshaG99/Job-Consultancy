
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import TopBar from './components/NavbarTop'

function App() {

  return (
    <>
    {/* <TopBar/> */}
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App

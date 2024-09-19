
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import "./App.css"
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster/>
    </>
  )
}

export default App

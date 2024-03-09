import './App.css'
import NavBar from './Components/NavBar/NavBar'
import '../src/assets/logo.png'
import Category from './Components/Category/Category'
import Container from './Components/Container/Container'
import '../src/assets/service-1.png'
import Section from './Components/Section/Section'
import Trendy from './Components/Trendy/Trendy'
import Cards from './Components/Cards/Cards'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import AboutPage from './Components/Pages/AboutPage'
import PackagesPage from './Components/Pages/PackagesPage'
import ServicesPage from './Components/Pages/ServicesPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/packages' element={<PackagesPage />}/>
        <Route path='/services' element={<ServicesPage />}/>
      </Routes>
    </>
  )
}

export default App
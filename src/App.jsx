

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MovieDetails from './components/containers/MovieDetails'
import './App.css'
function App() {

  return (
    
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
      </Routes>
      <Footer/>
    </>
      
     
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Header from './Components/Header'
import AllDoc from './Components/AllDoc'
import ViewDoc from './Components/ViewDoc'


function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/doctors' element={<AllDoc/>}/>
        <Route path='/doctors/:id' element={<ViewDoc/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

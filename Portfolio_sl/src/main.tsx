import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

//import TopBar from './widgets/TopBar'
//import NavBar from './widgets/NavBar'

import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'

import Projects from './Pages/Projects'
import Photos from './Pages/Photos'
import TopBar from './widgets/TopBar'
import NavBar from './widgets/NavBar'
import BottomBar from './widgets/BottomBar'
import ProjectDetails from './Pages/ProjectDetails'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
          <Route path='/photos' element={<Photos/>}/> 
        </Routes>
        <BottomBar></BottomBar>
      </div>  
    </BrowserRouter>
  </React.StrictMode>,
)
/*
<div>
  <TopBar></TopBar>
  <NavBar></NavBar>
</div>
*/

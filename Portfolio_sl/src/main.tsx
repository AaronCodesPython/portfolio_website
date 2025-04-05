import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

//import TopBar from './widgets/TopBar'
//import NavBar from './widgets/NavBar'

import './index.css'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Photos from './Pages/Photos'
import TopBar from './widgets/TopBar'
import NavBar from './widgets/NavBar'
import BottomBar from './widgets/BottomBar'
import ProjectDetails from './Pages/ProjectDetails'




ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter>
        <div className='content'>
          <TopBar></TopBar>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path="/projects/:projectName" element={<ProjectDetails />} />
              <Route path='/photos' element={<Photos/>}/> 
            
            </Routes>
        </div>  
        <BottomBar></BottomBar>
      
    </BrowserRouter>
    
  </React.StrictMode>,
)
/*
<div>
  <TopBar></TopBar>
  <NavBar></NavBar>
</div>
 <Route path='/hobby' element={<HobbyScreen/>}/> 
*/

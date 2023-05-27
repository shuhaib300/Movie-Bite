import React, { createContext, useState } from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './Pages/Main'
import Welcome from './Pages/Welcome'
import { ComedyMovies1, LatestMovies1, PopularMovies1 } from './Assets/Api'
import Detail from './Pages/Detail'
import Login from './Pages/Login'

const newcontext= createContext();
function App() {
  const [array,setarray]=useState([])
  return (
    <div>
      <newcontext.Provider value={{array,setarray}}>
    
       
       <BrowserRouter> 
      

       <Home/>
       
      <Routes> 
    
      
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/comedymovies' element={<Main movies={ComedyMovies1}/>} />
      <Route path='/latestmovies' element={<Main movies={LatestMovies1} />} />
      <Route path='/Main' element={ <Main movies={PopularMovies1}/>} />
      <Route path='/detail/:id' element={<Detail/>}/>
      
      </Routes>

      </BrowserRouter>
      </newcontext.Provider>
   

    </div>
  )
}

export default App
export {newcontext}
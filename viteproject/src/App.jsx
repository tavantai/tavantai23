import { useState } from 'react'
import Header from './components/loggin/header'
import { Routes, Route } from 'react-router-dom';
import User from './components/user/user';
import Adduser from './components/sukien/Adduser';


function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={
        <>
           <Header></Header>
        </>} 
    />
        <Route path='user' element={
        <User />} />
        <Route path='adduser' element={
        <Adduser />} /> 
    </Routes>
      
    </>
  )
}

export default App

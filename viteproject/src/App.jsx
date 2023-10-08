import { useState } from 'react'
import Header from './components/loggin/header'
import { Routes, Route } from 'react-router-dom';
import User from './components/user/user';
import Adduser from './components/sukien/Adduser';
import Update from './components/sukien/update';


function App() {


  return (
    <>
    <Routes>
    <Route path='' element={
        <>
           <Header></Header>
        </>} 
    />
        <Route path='user' element={
        <User />} />
        <Route path='adduser' element={
        <Adduser />} /> 
        <Route path='update' element={
        <Update />} />
    </Routes>
      
    </>
  )
}

export default App

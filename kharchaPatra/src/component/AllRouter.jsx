import React from 'react'
import { Route, Routes } from 'react-router'
import ExpenseForm from './ExpenseForm'
import Signup from '../pages/Signup'
import Login from '../pages/Login'


const AllRouter = () => {
  return (
    <div>

        <Routes>
            <Route path="/" element={<ExpenseForm/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRouter
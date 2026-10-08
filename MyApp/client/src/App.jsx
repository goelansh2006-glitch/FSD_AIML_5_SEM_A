import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import UserLayout from './pages/UserLayout'
import AdminLayout from './pages/AdminLayout'
import UserContext from './components/UserContext'
import MyCart from './pages/MyCart'
import MyOrders from './pages/MyOrders'

const App = () => {
  const user={
    name:"Ansh",
    role:"Admin"
  }
  return (
    <div>
      <UserContext.Provider value={{user}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/user" element={<UserLayout />}/>
        <Route path="/admin" element={<AdminLayout />}/>
        <Route path="/mycart" element={<MyCart />}/>
        <Route path="/myorders" element={<MyOrders />}/>
      </Routes>
      </BrowserRouter>
      </UserContext.Provider>  
    </div>
  )
}

export default App
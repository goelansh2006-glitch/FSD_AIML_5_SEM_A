import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import UserLayout from './pages/UserLayout'
import AdminLayout from './pages/AdminLayout'
import UserContext from './components/UserContext'

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
      </Routes>
      </BrowserRouter>
      </UserContext.Provider>  
    </div>
  )
}

export default App
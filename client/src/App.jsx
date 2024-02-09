import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from "./components/global/Header";
import Home from './pages/Home';
import Login from './pages/Login'
import UserProfile from './pages/UserProfile';

function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)

  const login = ()=>{
    setLoggedIn(true)
    navigate('/')
  }
  return (
    <>
      {loggedIn && <div className="flex items-center flex-col bg-bg1 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>}
      
      {!loggedIn && <div className="flex items-center flex-col bg-bg1 min-h-screen">
        <Routes>
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </div>}
    </>
  )
}

export default App

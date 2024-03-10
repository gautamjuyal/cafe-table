import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import Header from "./components/global/Header";
import Home from './pages/Home';
import Login from './pages/Login'
import UserProfile from './pages/UserProfile';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.auth)
  
  // useEffect(()=>{
  //   const jwt = Cookies.get('jwt');
  //   if(!jwt){
  //     return navigate('/login')
  //   }
  //   dispatch(setUser());

  // }, [navigate, dispatch])
  return (
    <>
      <div className="flex items-center flex-col bg-bg1 min-h-screen">
        { Route.path!='/login' && <Header />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App

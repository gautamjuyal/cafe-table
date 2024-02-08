import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from "./components/global/Header";
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <>
      <div className="flex items-center flex-col bg-bg1 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App

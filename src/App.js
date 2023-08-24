import React, { createContext, useEffect, useState } from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Fallback from './components/Fallback';

export const ContextApi = createContext();

function App() {

  const [user, setUser] = useState()

  // useEffect(() => {
  //   function checkUserData() {
  //     const item = localStorage.getItem('uid')

  //     console.log('function check');

  //     if (item) {
  //       setUser(item)
  //     }
  //   }

  //   window.addEventListener('storage', checkUserData)

  //   return () => {
  //     window.removeEventListener('storage', checkUserData)
  //   }
  // }, [])

  return (
    <>
      <ContextApi.Provider value={{}}>
        <BrowserRouter>
          <Routes>

            {/* {user ?
              <> */}
            <Route path="/" element={<Fallback />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/home' element={<Home />} />
            {/* </>
              :
              <>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            </>
            } */}

          </Routes>

        </BrowserRouter>

        <ToastContainer />
      </ContextApi.Provider>

    </>
  );
}

export default App;

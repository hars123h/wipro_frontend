import React, { createContext, useCallback, useEffect, useState } from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Fallback from './components/Fallback';
import Invest from './components/Invest';
import Account from './components/Account';
import axios from 'axios';
import BASE_URL from './api_url';
import customHistory from './myHistory.js'

export const ContextApi = createContext();

function App() {

  const [user, setUser] = useState(localStorage.getItem('uid'))
  const [loading, setLoading] = useState(false);
  const [toasterShow, setToasterShow] = useState(false);
  const [toasterText, setToasterText] = useState('');
  const [userDetails, setUserDetails] = useState();

  const toaster = useCallback((text) => {
    setToasterText(text);
    setToasterShow(true);
    setTimeout(() => {
      setToasterShow(false);
      //navigate('/mine');
    }, 3000);

  }, [])


  const getUserDetails = async () => {
    console.log('run');
    await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
      if (data) {
        setUserDetails(data);
        // setOriginalwpwd(data.wpwd);
        // setOriginalpwd(data.pwd);
        localStorage.setItem('user_invite', data.user_invite);
      } else {
        //console.log('Data not found');
        // toaster('Please login')
      }
    }).catch(error => console.log('Some error occured', error));
  }

  return (
    <>
      <ContextApi.Provider value={
        {
          user, setUser,
          userDetails, setUserDetails,
          loading, setLoading,
          toasterShow, setToasterShow,
          toasterText, setToasterText,
          toaster, getUserDetails
        }
      }>
        <BrowserRouter>
          {toasterShow &&
            <div className='top-0 left-0 right-0 bottom-0 p-5 z-[9999] fixed flex items-center'>
              <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
              <div className="flex items-start bg-[rgba(201,174,20,0.9)] max-w-[250px] p-5 -top-5 relative w-full mx-auto shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[7px] ">
                <div className="flex-1 p-[5px]">
                  <p className='text-base text-white'>{toasterText}</p>
                </div>
              </div>
            </div>
          }

          {loading &&
            <div className='top-0 left-0 right-0 bottom-0 p-5 z-[9999] fixed flex items-center'>
              <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
              <div className="bg-transparent backdrop-filter-[initial] backdrop-blur-[initial] max-w-[250px] p-5 -top-5 relative mx-auto ">
                <div className="w-[60px] mx-auto relative flex flex-wrap justify-center items-center cp-spinner cp-balls"></div>
              </div>
            </div>
          }

          <Routes>

            {/* {user ?
              <> */}
            <Route path="/" element={<Fallback />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/invest' element={<Invest />} />
            <Route path='/account' element={<Account />} />
            {/* <Route path='/invite' element={<Account />} />
                <Route path='/article' element={<Account />} />
                <Route path='/orders' element={<Account />} /> */}
            {/* </>
              :
              <>
                <Route path="/" element={<Fallback />} />
                <Route path='/login' element={<Login />} />
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

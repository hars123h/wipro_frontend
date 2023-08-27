import React, { createContext, useEffect, useState } from 'react'
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

export const ContextApi = createContext();

function App() {

  const [user, setUser] = useState(localStorage.getItem('uid'))

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('Loading');
  const [toasterShow, setToasterShow] = useState(false);
  const [toasterText, setToasterText] = useState('');

  // useEffect(() => {

  //   console.log('cala');

  //   function checkUserData() {
  //     const item = localStorage.getItem('uid')

  //     console.log('function check');

  //     if (item) {
  //       setUser(item)
  //       console.log(item);
  //     }
  //   }

  //   window.addEventListener('storage', checkUserData)

  //   return () => {
  //     window.removeEventListener('storage', checkUserData)
  //   }
  // }, [window])

  const [userDetails, setUserDetails] = useState();

  const toaster = (text) => {
    setToasterText(text);
    setToasterShow(true);
    setTimeout(() => {
      setToasterShow(false);
      //navigate('/mine');
    }, 5000);
  }

  useEffect(() => {

    console.log('allsd');

    const getUserDetails = async () => {
      await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
        if (data) {
          setUserDetails(data);
          // setOriginalwpwd(data.wpwd);
          // setOriginalpwd(data.pwd);
          localStorage.setItem('user_invite', data.user_invite);
        } else {
          //console.log('Data not found');
        }
      }).catch(error => console.log('Some error occured', error));
    }

    getUserDetails();
  }, [])

  return (
    <>
      <ContextApi.Provider value={{
        userDetails, setUserDetails,
        loading, setLoading,
        text, setText,
        toasterShow, setToasterShow,
        toasterText, setToasterText,
        toaster
      }}>
        <BrowserRouter>
          {toasterShow &&
            <div className='top-0 left-0 right-0 bottom-0 p-5 z-[999] fixed flex items-center'>
              <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
              <div className="flex items-start bg-[rgba(201,174,20,0.9)] max-w-[250px] p-5 -top-5 relative w-full mx-auto shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[7px] ">
                <div className="flex-1 p-[5px]">
                  <p className='text-base text-white'>{toasterText}</p>
                </div>
              </div>
            </div>
          }

          {loading &&
            <div className='top-0 left-0 right-0 bottom-0 p-5 z-[999] fixed flex items-center'>
              <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
              <div className="flex items-start bg-[rgba(75,169,88,0.9)] max-w-[250px] p-5 -top-5 relative w-full mx-auto shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[7px] ">
                <div className="flex-1 p-[5px]">
                  <p className='text-base text-white'>{text}</p>
                </div>
              </div>
            </div>
          }

          <Routes>

            {user ?
              <>
                <Route path="/" element={<Fallback />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='/invest' element={<Invest />} />
                <Route path='/account' element={<Account setUser={setUser} />} />
                {/* <Route path='/invite' element={<Account />} />
                <Route path='/article' element={<Account />} />
                <Route path='/orders' element={<Account />} /> */}
              </>
              :
              <>
                <Route path="/" element={<Fallback />} />
                <Route path='/login' element={<Login setUser={setUser} />} />
                <Route path='/signup' element={<Register />} />
              </>
            }

          </Routes>

        </BrowserRouter>

        <ToastContainer />
      </ContextApi.Provider>

    </>
  );
}

export default App;

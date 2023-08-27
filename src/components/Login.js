import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import BASE_URL from '../api_url';
import applogo from '../images/appLogo.svg'
import Tradmark from './Tradmark';

const Login = ({ setUser }) => {

    const navigate = useNavigate();

    const [mobno, setmobno] = useState('');
    const [pwd, setpwd] = useState('');
    const [bloackedUsers, setBlockedUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('Loading');
    const [toasterShow, setToasterShow] = useState(false);
    const [toasterText, setToasterText] = useState('');

    const toaster = (text) => {
        setToasterText(text);
        setToasterShow(true);
        setTimeout(() => {
            setToasterShow(false);
        }, 5000);
    }

    const getBlockedUsers = async () => {
        const dataRes = await axios.get(`${BASE_URL}/get_blocked_users`).then(res => res.data);
        var temp = [];
        dataRes.forEach((doc) => {
            //console.log(doc.data());
            temp.push(doc.user_id);
            setBlockedUsers(temp);
        });
    }

    const handleSignIn = async () => {
        if (bloackedUsers.includes(String(mobno))) {
            toaster('You are blocked by the administrator!');
            return;
        }
        setLoading(true);
        setText('Loading')

        await axios.post(`${BASE_URL}/login`, { mobno, pwd })
            .then(({ data }) => {
                if (data.user_details === null) {
                    throw "Could not login/something went wrong";
                }
                localStorage.setItem('uid', data.user_details._id);
                setUser(data.user_details._id)
                setText('Login Successful!');
                setTimeout(() => {
                    navigate('/home');
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.log(error);
                setText('Something went wrong!');
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }

    return (
        <>

            {toasterShow &&
                <div className='top-0 left-0 right-0 bottom-0 p-5 z-[999] fixed flex items-center'>
                    <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
                    <div className="flex items-start bg-[rgba(201,174,20,0.9)] max-w-[250px] p-5 -top-5 relative w-full mx-auto shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[7px] ">
                        <div className="flex-1 p-[5px]">
                            <p className='text-base leading-none text-white'>{toasterText}</p>
                        </div>
                    </div>
                </div>
            }

            {loading &&
                <div className='top-0 left-0 right-0 bottom-0 p-5 z-[999] fixed flex items-center'>
                    <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
                    <div className="flex items-start bg-[rgba(75,169,88,0.9)] max-w-[250px] p-5 -top-5 relative w-full mx-auto shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[7px] ">
                        <div className="flex-1 p-[5px]">
                            <p className='text-base text-white leading-none'>{text}</p>
                        </div>
                    </div>
                </div>
            }

            <div className="signupMain bgimg01 after:bg-white">

                <div className="max-w-[800px] mx-auto">

                    <div className="flex relative items-center min-h-[90vh] flex-wrap mx-auto">

                        <div className="w-full">

                            <div className="mx-[10px] px-[10px]">
                                <h4 className='text-[32px] text-[#1f3d70] font-bold '>Hello!</h4>
                                <p className='text-xl leading-none'>Welcome to Wipro.</p>
                            </div>

                            <div className="bg-white mt-5 mb-[50px] mx-[10px] pt-10 px-5 pb-5 relative rounded-lg">

                                <div className="">

                                    <div className="mb-5 relative">

                                        <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                            <div className="flex items-center flex-wrap h-full text-center z-10">
                                                <p className='text-sm text-[#818393] leading-none mr-1'>+91</p>
                                            </div>
                                            <div className="flex items-center relative flex-1">
                                                <input
                                                    onChange={e => setmobno(e.target.value)}
                                                    type="number"
                                                    name="mob"
                                                    id="mob"
                                                    className=' fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent flex-1 '
                                                    maxLength={11}
                                                    size={11}
                                                    placeholder=''
                                                />
                                                <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                                <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>TEL</label>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5 relative">

                                        <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                            <input
                                                onChange={e => setpwd(e.target.value)}
                                                type="password"
                                                name="pass"
                                                id="pass"
                                                className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                                placeholder=''

                                            />
                                            <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                            <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Login password</label>

                                        </div>
                                    </div>

                                    <div className="my-10">
                                        <Link to={`/forgotpassword`} className='text-sm leading-none text-[rgba(52,86,255,0.9)]'>Forgot your password?</Link>
                                    </div>


                                    <div className="flex flex-wrap items-center my-10 w-full justify-end ">

                                        <Link to={`/signup`} className='text-[#1f3d70] bg-white border-[1px] border-[#1f3d70] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative '>SIGN UP</Link>

                                        <button className='ml-[10px] flex-1 text-white bg-[#00aa75] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative ' onClick={handleSignIn}>
                                            LOG IN
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex max-w-lg m-[10px] p-[10px] items-start flex-wrap ">

                                <div className="w-20 p-1 bg-white rounded-2xl ">
                                    <img src={applogo} alt="appLogo" />
                                </div>

                                <Link to={`/download`} className="flex-1 ml-[10px]">
                                    <h3 className='p-0 m-0 text-2xl text-[#3468a3] font-bold'>Wipro</h3>
                                    <p className=' p-0 m-0 pb-[10px] text-base leading-none text-[#818393]'>
                                        Rest assured financial management, quality service, low risk investment, 100% return
                                    </p>
                                </Link>

                            </div>

                        </div>


                    </div>


                    <Tradmark />


                </div>
            </div>

        </>
    )
}

export default Login
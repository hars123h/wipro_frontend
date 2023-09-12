import React, { useContext } from 'react'
import taskBG from '../images/04.png'
import { Link } from 'react-router-dom'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { TbTicket } from 'react-icons/tb'
import { BiSolidGift } from 'react-icons/bi'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'

const Task = () => {

    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);

    const handelSignin = async () => {
        await axios.post(`${BASE_URL}/signinReward`, { _id: localStorage.getItem('uid') }).then(responce => {
            toaster("Reward recived")
        }).catch(error => {
            toaster("Something went wrong")
        })
    }

    return (
        <>

            <div className="mx-auto mb-28 bgimg overflow-hidden">
                <div className="w-full mx-auto max-w-[800px]" >

                    <div>

                        <header className="h-[50px] leading-[50px] block">
                            <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed bg-[rgb(1,77,173)] z-[9999] flex flex-wrap items-center  ">

                                <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                    <LiaAngleLeftSolid size={22} />
                                </Link>

                                <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Task Hall</h2>

                            </div>
                        </header>

                        <div className='max-w-full min-h-[90px] mx-auto bg-[#ff6766] invite ' >

                            <div className="relative z-[1]">
                                <img src={taskBG} alt="" className='w-full' />
                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </div>

                    <div className="relative -top-[50px] mx-auto z-[1] ">
                        <div className="m-[10px]">

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <TbTicket size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Daily Attendance</p>
                                    <span className="text-[#818393] text-sm font-light">Sign in every day and get 7 rupees</span>
                                </div>

                                <div onClick={handelSignin} className="rounded-[500px] px-[10px] py-[5px] text-white bg-[rgba(75,169,88,0.9)] text-xs ">
                                    Sign
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invitation Activation</p>
                                    <span className="text-[#818393] text-sm font-light">Every time you invite a friend to register and activate, you will get a reward of 100 rupees</span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/0
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 5</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +5, extra bonus 100
                                    </span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/5
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 10</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +10, extra bonus 200
                                    </span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/10
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 50</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +50, extra bonus 1,500
                                    </span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/50
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 100</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +100, extra bonus 5000
                                    </span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/100
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 500</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +500, extra bonus 20,000
                                    </span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/500
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="my-[10px] p-5 flex flex-wrap items-start rounded-[7px] bg-white">

                                <div className="w-10 h-10 overflow-hidden bg-[#00aa75] relative flex flex-wrap justify-center items-center rounded-[50%]">
                                    <BiSolidGift size={26} className='text-white' />
                                </div>

                                <div className="flex-1 px-[10px] leading-none">
                                    <p className='text-lg text-[#1e2531]'>Invite to activate 5000</p>
                                    <span className="text-[#818393] text-sm font-light">
                                        Earn money by sharing your invitation links to recommend friends to sign up for Kraft
                                        App.
                                        <br />
                                        Success +5000, extra bonus 1,000,000,
                                    </span>
                                </div>

                                <div className="rounded-[500px] px-[10px] py-[5px] text-white bg-[#eee] text-xs ">
                                    Receive
                                </div>

                                <div className="w-full py-[10px] ">
                                    <div className="w-full relative flex flex-wrap justify-between items-center">
                                        <div className="bg-[#eee] rounded-[500px] w-full h-[5px] ">
                                            <div className="bg-[#4c8dcb] rounded-[500px] h-[5px] w-0 ">
                                                <p className='-bottom-[6px] text-right text-sm font-bold text-[#00aa75] relative whitespace-nowrap'>
                                                    0/5000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Task
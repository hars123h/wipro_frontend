import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import { RiVipLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import information from '../images/Information.svg'
import bankcard from '../images/BankCard.svg'
import LoginPassword from '../images/LoginPassword.svg'
import PayPassword from '../images/PayPassword.svg'
import Logoutimg from '../images/LogOut.svg'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'

const Account = ({ setUser }) => {

    const navigate = useNavigate();

    const {userDetails, setUserDetails} = useContext(ContextApi);


    const [name, setname] = useState('HI')
    const [mobno, setMobno] = useState(9555890771)
    const [id, setid] = useState(228028)
    const [Balance, setBalance] = useState(25.00)

    const handelSignOut = () => {
        localStorage.clear();
        setUser()
        navigate('/login');
    }

    return (
        <>

            <div className="mx-auto mb-28 bgimg">
                <div className="w-full mx-auto max-w-[800px]" >

                    <div className="relative mx-auto z-[1]">
                        <div className="">

                            <div className="p-[10px] pb-[5px] rounded-br-[15px] rounded-bl-[15px]">

                                <div className="py-5 px-[10px] flex flex-wrap items-center">

                                    <div className="flex-1">
                                        <p className='text-[#4b4d5e] font-bold text-xl'>{userDetails?.name}</p>
                                        <span className='text-[#818393] text-sm'>{userDetails?.mobno} (ID: {id})</span>
                                    </div>

                                    <Link to={`/vip`} className='flex items-end '>
                                        <RiVipLine size={40} className='text-[#b3bdc4]' />
                                    </Link>

                                </div>

                                <div className="p-5 bg-[#1f3d70] backdrop-blur-[5px] shadow-[rgba(0,0,0,0.03)_0px_0px_10px_5px] rounded-[15px]">

                                    <div className="mb-5 justify-between items-center flex flex-wrap">

                                        <div className="">
                                            <h3 className='text-[28px] font-bold text-white leading-none' >
                                                <em className='mr-1 p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                                {userDetails?.balance?.toFixed(2)}
                                            </h3>
                                            <span className='text-sm text-white opacity-80 leading-none'>Balance</span>
                                        </div>

                                    </div>

                                    <div className="w-full justify-end items-stretch flex flex-wrap">

                                        <div className="px-5 text-[#0aa496] bg-white font-bold h-[35px] leading-9 text-sm text-center rounded-[500px]  ">
                                            Deposit
                                        </div>

                                        <div className="px-5 ml-[10px] bg-[#0aa496] text-white font-bold h-[35px] leading-9 text-sm text-center rounded-[500px] ">
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {userDetails?.withdrawal_sum?.toFixed(2)} Withdraw
                                        </div>


                                    </div>

                                </div>

                            </div>

                            <div className="flex px-[5px] pb-[10px] flex-wrap">

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            0.00
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total deposits</span>
                                    </div>
                                </div>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            0.00
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total withdrawal</span>
                                    </div>
                                </div>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            {/* <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em> */}
                                            0
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>My order</span>
                                    </div>
                                </div>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            0.00
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total earnings</span>
                                    </div>
                                </div>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            25.00
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total rewards</span>
                                    </div>
                                </div>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            0.00
                                        </p>
                                        <span className='text-sm text-[#818393] '>Total commission</span>
                                    </div>
                                </div>

                            </div>

                            <div className="px-[10px] ">
                                <div className="mb-[10px]">

                                    <div className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={information} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>PersonalData</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={bankcard} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>BankCard</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={LoginPassword} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>ChangeLoginPassword</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={PayPassword} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>ChangeTradePassword</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={Logoutimg} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1" onClick={handelSignOut}>
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[rgba(255,87,40,0.9)] text-base whitespace-normal break-all'>LogOut</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <Tradmark /> */}

                </div>
            </div>

            {/* footer  */}
            <Navbar />
        </>
    )
}

export default Account
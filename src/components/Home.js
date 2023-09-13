import React, { useContext, useEffect, useState } from 'react'
import Popup from './Popup'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import inviteBg from '../images/invitebg.png'
import { RiVipLine } from 'react-icons/ri'
import splitNotchL from '../images/notch_L.svg'
import splitNotchR from '../images/notch_R.svg'
import { BiCoin } from 'react-icons/bi'
import vip from '../images/vip.svg'
import message from '../images/message.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import task from '../images/05.svg'
import invite from '../images/06.svg'
import img201 from '../images/201.png'
import img301 from '../images/301.png'
import Card from './Card'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Tradmark from './Tradmark'
import { ContextApi } from '../App'



const Home = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);


    const [wpwd, setWpwd] = useState(localStorage.getItem('wpwd'))

    // console.log(userDetails);

    useEffect(() => {
        if (!wpwd) {
            toaster('Set Trade Password')
            setTimeout(() => {
                navigate('/widthdrawlpassword')
            }, 3000);
        }
    }, [])

    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }

    }, [])

    return (
        <>
            {/* popup */}
            <Popup />

            <div className="mx-auto mb-28 bgimg overflow-hidden">
                <div className="w-full mx-auto max-w-[800px]" >

                    <Link to={`/invite`}>
                        <div className='max-w-full min-h-[90px] mx-auto bg-[#ff6766] invite ' >

                            <div className="relative z-[1]">
                                <img src={inviteBg} alt="" className='w-full' />
                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </Link>

                    <div className="relative -top-[60px] mx-auto z-[1]">

                        <div className="m-[10px]">

                            <div className="pt-5 px-5 pb-[10px] bg-white shadow-[0px_-20px_30px_20px_rgba(0,40,14,0.1)] rounded-[7px_7px_0_0] ">

                                <Link to={`/vip`} className='flex items-end top-[10px] right-5 absolute'>
                                    {/* <RiVipLine size={40} className='text-[#b3bdc4]' /> */}
                                    <img src={vipimg} alt="" className='w-6' />
                                </Link>

                                <ul className='flex flex-wrap items-end'>

                                    <li className='w-full mb-5'>
                                        <p className='text-[26px] font-bold text-[#4b4d5e] leading-none' >
                                            <em className='mr-1 p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                            {userDetails?.balance.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Balance</span>
                                    </li>
                                    <li className='flex-1'>
                                        <p className='text-lg font-bold text-[#4b4d5e] leading-none' >
                                            <span className='mr-1 px-[2px] text-base leading-none border-0 font-light align-top'>₹</span>
                                            {userDetails?.earning?.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total Earnings</span>
                                    </li>
                                    <li className='flex-1'>
                                        <p className='text-lg font-bold text-[#4b4d5e] leading-none' >
                                            {userDetails?.plans_purchased?.length}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Order</span>
                                    </li>
                                </ul>

                            </div>

                            <div className="flex flex-wrap items-stretch">

                                <div className="h-5">
                                    <img src={splitNotchL} alt="" className='h-full' />
                                </div>

                                <div className="flex flex-wrap flex-1 items-center bg-white before:contents-[' '] before:block before:w-full before:h-[10px] before:border-0 before:border-b-[5px] before:border-dotted before:border-[#eee] "></div>

                                <div className="h-5">
                                    <img src={splitNotchR} alt="" className='h-full' />
                                </div>

                            </div>

                            <div className="bg-white flex flex-wrap items-center justify-end w-full px-5 pb-5 pt-[10px] rounded-bl-[7px] rounded-br-[7px]">
                                <Link to={`/invest`} className=' flex-1 text-white bg-[#00aa75] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base  border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative flex justify-center items-center font-bold w-full '>
                                    <BiCoin size={30} className='font-light' /> Start managing money
                                </Link>
                            </div>

                        </div>

                        <div className="m-[10px]">
                            <div className="min-h-[150px] py-[10px] bg-white rounded-[7px]">
                                <div className='flex flex-wrap items-start'>


                                    <Link to={`/vip`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={vip} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>VIP</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/message`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={message} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Messages</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={whatsapp} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Service Online</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={telegram} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Office Center</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={`/task`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={task} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Task</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/invite`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={invite} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Share</p>
                                            </div>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        </div>

                        <div className="my-[10px] mx-[5px]">

                            <div className="flex">

                                <div className="flex-1 ">

                                    <Card
                                        img={img201}
                                        title={'gift'}
                                        content={'A small gift for all VIP usersCycle: one day Income: 300 quick pick up Stop time: 21:30'}
                                        timestamp={'2023-08-24 20:22:04'}
                                    />

                                    <Card
                                        img={img201}
                                        title={'Link change'}
                                        content={'dear user Our promotion link will be changed frequently, it is recommended that you use the APP to log in If you need the latest link, please click to copy the latest link in the sharing interface'}
                                        timestamp={'2023-08-22 13:07:04'}
                                    />

                                    <Card
                                        img={img301}
                                        title={'A small gift for all VIP users'}
                                        content={'Cycle: one day Income: 300 quick pick up Stop time: 14:00'}
                                        timestamp={'2023-08-20 13:18:04'}
                                    />
                                </div>

                                <div className="flex-1 ">

                                    <Card
                                        img={img301}
                                        title={'Welfare release'}
                                        content={'Today&#39s system has been updated, it will be more stable and secure, so 2 super event products will be sent to users again'}
                                        timestamp={'2023-08-22 20:08:42'}
                                    />

                                    <Card
                                        img={img201}
                                        title={'Quickly join'}
                                        content={'Quickly join Kraft and become a VIP🤑🤑🤑 We will send a lot of gifts to our trusted and loyal users in the days to come.'}
                                        timestamp={'2023-08-24 20:22:04'}
                                    />

                                    <Card
                                        img={img301}
                                        title={'Call for prizes'}
                                        content={'announcement We need more withdrawal screenshots for display Let more users see that there will be no problem with withdrawing money in Kraft Please send the screenshot of your withdrawal to the bank card today to our customer service, if your screenshot is true and qualified, then we will reward you 50Rs The activity ends at 18:00'}
                                        timestamp={'2023-08-24 20:22:04'}
                                    />
                                </div>

                            </div>

                            <Link to={`/article`} className="m-5 flex flex-wrap justify-center items-center w-full">

                                <div className="font-bold text-[rgba(52,86,255,0.9)] text-base flex items-center">
                                    MORE <HiOutlineChevronDoubleRight size={18} />
                                </div>

                            </Link>

                        </div>

                    </div>

                    <Tradmark />

                </div>
            </div>


            {/* footer */}

            <Navbar />

        </>
    )
}

export default Home
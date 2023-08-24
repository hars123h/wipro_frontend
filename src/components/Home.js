import React, { useState } from 'react'
import Popup from './Popup'
import Telegram from './Telegram'
import Navbar from './Navbar'
import logo from '../images/logo.svg'
import bg from '../images/01.png'

const Home = () => {

    const [invest, setInvest] = useState(100);
    const [account, setAccount] = useState();
    const [share, setShare] = useState();

    return (
        <>
            <div className="relative w-[910px] mx-auto h-screen ">
                {/* <Popup />
                <Telegram /> */}

                <div className="fixed bottom-0">
                    <Navbar />
                </div>

                <div className="">

                    <div className="logo p-5 ">
                        <img className='w-52 h-12' src={logo} alt="logo   " />
                    </div>

                    <div className="px-5 text-[#4b4d5e] text-2xl font-medium quotes">
                        <h2>
                            Join Reliance and become a VIP user to get rich quickly. By sharing your link and inviting users to be active,
                            you can get 35% of the total investment amount, and withdraw to the bank card every day.
                        </h2>
                    </div>

                    <div className="picture absolute w-full max-h-48 left-0 right-0 top-0 overflow-hidden -z-10">
                        <img src={bg} alt="bg" className='w-full min-h-[150px] opacity-[0.3]' />
                    </div>

                    {/* invest - {invest}
                    account - {account}
                    share - {share} */}

                    <div className="grid grid-cols-12">
                        <div className="col-span-6 p-3 h-20">
                            <div className="bg-blue-800 text-white rounded-md min-h-full">
                            Invest 
                            {invest}
                            </div>
                        </div>
                        <div className="col-span-6 p-3 h-20">
                            <div className="bg-blue-800 text-white rounded-md h-full">
                            Invest 
                            {invest}
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Home
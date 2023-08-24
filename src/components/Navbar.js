import React from 'react'
import {AiFillHome} from 'react-icons/ai'


const Navbar = () => {
    return (
        <div className='h-[78px] navbar z-50 flex justify-between items-center w-[910px] rounded-t-3xl  px-10 '>

            <div className="flex text-white justify-center items-center space-x-2"><AiFillHome size={20} /> <span>Home</span> </div>
            <div className="flex text-white justify-center items-center space-x-2"><AiFillHome size={20} /> <span>Invest</span> </div>
            <div className="flex text-white justify-center items-center space-x-2"><AiFillHome size={20} /> <span>My Account</span> </div>

        </div>
    )
}

export default Navbar
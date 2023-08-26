import React, { useEffect, useState } from 'react'
import { RiVipLine } from 'react-icons/ri'
import { BiRightArrowAlt } from 'react-icons/bi'

const ProductCard = ({ active, pre_sale, long_plan_state, product_type, product_image, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle, handleClick }) => {

    const [vipColor, setVipColor] = useState('text-[#b3bdc4]')


    useEffect(() => {
        if (product_type === 'vip') {
            setVipColor('text-[#ffa74f]')
        }

    }, [])


    return (
        <>

            <div className="w-full p-[5px]">
                <div className="shadow-[0_-3px_30px_1px_rgba(80,35,0,0.1)] p-[10px] bg-white backdrop-blur-sm relative rounded-[7px] ">

                    <div className="mb-[10px] max-h-[120px] overflow-hidden bg-center bg-no-repeat bg-[length:90%_90%] cardBg bg-[#f8f8f8] rounded-[3px]">
                        <img src={product_image} alt="" className='w-full' />
                    </div>

                    <div className="mb-[10px]">

                        <h3 className='text-[22px] text-[#4b4d5e] leading-none font-bold'>
                            {plan_cycle}
                            <span className='text-sm text-[#818393] leading-none'>Days</span>
                        </h3>

                        <p className='text-[#818393] leading-5'>Income Days</p>

                    </div>

                    <div className="mb-[10px]">
                        <div className="">

                            <div className="flex flex-wrap items-center py-[5px]">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Required Level</p>
                                    </div>

                                    <div className="">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>
                                            <RiVipLine size={26} className={`${vipColor} font-light `} />
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Invest Price</p>
                                    </div>

                                    <div className="">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>{plan_amount}.00</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Day Income</p>
                                    </div>

                                    <div className="">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>{plan_daily_earning}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Total Revenue</p>
                                    </div>

                                    <div className="">
                                        <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>{plan_cycle * plan_daily_earning}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {active !== false ?
                        <div className="text-[rgba(75,169,88,0.9)] py-[5px] justify-end flex">
                            <p className='font-bold text-lg flex items-center'>
                                Invest now
                                <BiRightArrowAlt size={20} />
                            </p>
                        </div>
                        :
                        <div className="text-[rgba(204,204,204,0.9)] py-[5px] justify-end flex">
                            <p className='font-bold text-lg flex items-center'>
                                Stop selling
                            </p>
                        </div>
                    }

                </div>
            </div>

        </>
    )
}

export default ProductCard
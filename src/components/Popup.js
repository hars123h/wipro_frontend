import React, { useState } from 'react'

const Popup = () => {

    const [popOpen, setPopOpen] = useState('block')


    return (
        <>
            <div className={`${popOpen} absolute z-10 w-full h-[288px] bg-white border border-black`}>
                <div className={` h-10 flex justify-between bottom-0 `}>
                    <button onClick={() => setPopOpen('hidden')}>keep using</button>
                    <button>download app</button>
                </div>
            </div>
        </>
    )
}

export default Popup
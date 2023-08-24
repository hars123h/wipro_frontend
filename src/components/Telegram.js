import React, { useState } from 'react'

const Telegram = () => {
    const [popOpen, setPopOpen] = useState('block')
    return (
        <div className={`${popOpen} absolute`}>
            <div onClick={() => setPopOpen('hidden')} className={`w-5 h-5 flex justify-center items-center`}>X</div>
            <div className={`h-10 w-10 `}>
                Telegram
            </div>
        </div>
    )
}

export default Telegram
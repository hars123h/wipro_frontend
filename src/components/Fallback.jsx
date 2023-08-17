import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Fallback = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/signup');
    },[]);


  return (
    <div>Fallback</div>
  )
}

export default Fallback
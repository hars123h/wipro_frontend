import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <input type="number" name="mob" id="mob" />
            <input type="password" name="pass" id="pass" />
            <Link >
                <span>Forgot your password?</span>
            </Link>
            <button>LOG IN</button>
            <Link to={'/signup'}>
                <button>SIGN UP</button>
            </Link>
        </>
    )
}

export default Login
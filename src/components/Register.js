import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../api_url';
import { toast } from 'react-toastify'
import { ContextApi } from '../App';

const Register = () => {

    const navigate = useNavigate();
    // const { setUser } = useContext(ContextApi);

    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');
    const [mobno, setMobno] = useState('')
    const [pwd, setPwd] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [invt, setInvt] = useState('egxixb');
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('Loading');
    const [toasterShow, setToasterShow] = useState(false);
    const [toasterText, setToasterText] = useState('');

    const toaster = (text) => {
        setToasterText(text);
        setToasterShow(true);
        setTimeout(() => {
            setToasterShow(false);
            //navigate('/mine');
        }, 5000);
    }

    const validatePassword = password => /[a-zA-Z]/.test(password) && /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    const handleRegister = async () => {

        if (mobno.length !== 10) {
            toast('Invalid Mobile Number');
            return;
        }

        if (pwd.length < 6) {
            toast('Password must contain at least 6 characters!');
            return;
        }

        if (validatePassword(pwd) === false) {
            toast('Password must contain letters and numbers or special symbols');
            return;
        }

        if (name.length === 0) {
            toast('Nick Name Should not be empty')
        }

        if (otp !== otpfield) {
            toast('Wrong OTP entered!');
            return;
        }

        setLoading(true);

        await axios.post(`${BASE_URL}/register`, { mobno, pwd, name, email, invt })
            .then(({ data }) => {
                if (data.message === 'Mobile Number already registered!') {
                    setText('Mobile Number already registered!');
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                } else if (data.message === 'invalid invite code') {
                    setText('invalid invite code!');
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                } else {
                    setText('registration success');
                    localStorage.setItem('uid', data.user_id);
                    setMobno('');
                    setPwd('');
                    // setInvt('');
                    setEmail('')
                    setName('')
                    setOTPfield('')
                    setOtp('')
                    setTimeout(() => {
                        navigate('/login');
                        setLoading(false);
                    }, 2000);
                }
            })
            .catch((error) => {
                toast('Something went wrong');
                console.error(error);
            });
    }

    const handleMessage = () => {
        if (mobno.length !== 10) {
            toast('Invalid Mobile No, please enter a valid number');
            return;
        }
        fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=27b58V4YOqBDMgWvNjapz1k9IHlrJfynC6w0hceRAZGoLimK3PuJC7OoiV4N2B6DjfwWKzb0lhgEetPH&variables_values=${otpfield}&route=otp&numbers=${mobno}`)
            .then((response) => {
                console.log(response);
                toast('OTP sent successfully');
            })
            .catch(error => toast('Something went wrong'));
    }

    console.log(otpfield);

    return (
        <>
            <input onChange={e => { setMobno(e.target.value); setOTPfield(String(Math.floor(100000 + Math.random() * 900000))) }}
                type="number"
                name="mobno"
                id="mobno"

            />

            <input onChange={e => setPwd(e.target.value)}
                type="password"
                name="pwd"
                id="pwd"

            />

            <input onChange={e => setName(e.target.value)}
                type="text"
                name="name"
                id="name"

            />

            <input onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"

            />

            <input onChange={e => setOtp(e.target.value)}
                type="number"
                name="otp"
                id="otp"

            />

            <div onClick={handleMessage} className="">
                Send
            </div>

            <button onClick={handleRegister}>
                submit
            </button>
        </>
    )
}

export default Register
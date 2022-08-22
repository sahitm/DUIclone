import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import loginbg from "../../assets/login_bg.svg";
import qrcode from "../../assets/qr_code.png";

function Login() {
  return (
    <div className='login h-screen w-screen bg-discord-blue'>
        <div className='h-10v absolute z-10'>
        <img src={discordLogo} alt="discord" />
        </div>
        <img className='h-100v w-screen absolute' src={loginbg} alt="login-img" />
        <div className="form flex z-20 absolute md:h-60v md:w-60v h-30v   md:translate-x-64 translate-x-20 md:translate-y-28 translate-y-28 bg-[#36393f]">
            <div className="details md:h-60v w-30v text-gray-900 flex flex-col justify-evenly px-2 font-semibold text-[8px] md:text-[20px]">
                <div className="head">
                <h1 className='text-center text-xl text-white'>Welcome Back</h1>
                <p className='text-center'>We're so exited to see you again!</p>
                </div>
                <label htmlFor="email">EMAIL OR PHONE NUMBER</label>
                <input className='bg-gray-600 rounded' type="text" name="email" id="email" />
                <label htmlFor="password">PASSWORD</label>
                <input className='bg-gray-600 rounded' type="text" name="password" id="password" />
                <p className='text-cyan-500'>Forgot your pasword?</p>
                <button className="text-white hover:bg-blue-800 bg-discord-blue rounded-md text-xs md:text-base font-bold">
                    LOGIN
                </button>
                <p>need account ? <span className='text-cyan-500'>register</span> </p>
            </div>
            <div className="qrcode md:h-60v w-30v flex flex-col items-center justify-evenly ">
                <img className='w-24 md:w-48' src={qrcode} alt="QR code" />
                <h1 className='text-[1rem] md:text-[32px] font-bold text-white'>Log In With QR Code</h1>
                <p className='text-[10px] md:text-[20px] text-gray-900 font-semibold md:mx-4'>scan this with the discord mobile app to login instantly</p>
            </div>
        </div>
    </div>
  )
}

export default Login
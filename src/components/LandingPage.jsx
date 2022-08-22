import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";
import DownloadIcon from '@mui/icons-material/Download';

function LandingPage() {
  return (
    <div>
        <div className='header flex h-10v md:px-10 bg-discord-blue w-screen items-center'>
        <img src={discordLogo} className='w-20 mr-6 md:mr-14'  alt="discord" />
        <nav className=" w-60v text-xs flex align-middle justify-evenly mr-2 text-white font-semibold">
            {[
                ['Download'],
                ['Nitro'],
                ['Safety'],
                ['Support'],
                ['Blog'],
                ['Carrers']
            ].map(([title]) => (
                <a className='mr-1'>{title}</a>
            ))}
            </nav>
        <button className="bg-white hover:bg-slate-100 text-discord-blue rounded-md px-2 pb-1 text-xs">
            Login
        </button>
        </div>
        <div className="hero h-90v bg-discord-blue w-screen text-center bg-hero-1 bg-left-bottom bg-no-repeat md:bg-[length:300px_150px] ">
            <h1 className='text-4xl font-extrabold text-white pt-20'>IMAGINE A PLACE...</h1>
            <p className='w-60v m-auto text-xs font-light text-white mt-4'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className='w-80v m-auto mt-4  '>
                <button className="bg-white hover:text-discord-blue text-[#23272a] rounded-md px-2 text-xs font-bold sm:mr-2">
                    <DownloadIcon fontSize="small"/> 
                    Download For Windows
                </button>
                <button className="text-white hover:bg-stone-800 bg-[#23272a] rounded-md px-2 pb-1 text-xs font-bold sm:ml-2">
                    Open Discord In Your Browser
                </button>
            </div>

        </div> 
          
    </div>
  )
}

export default LandingPage
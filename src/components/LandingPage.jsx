import React from 'react'
import discordLogo from "../../assets/discord_main_logo.svg";

function LandingPage() {
  return (
    <div>
    <div className='flex h-10v md:px-10 bg-discord-blue w-screen items-center'>
      <img src={discordLogo} className='w-20 mr-2 md:mr-14'  alt="discord" />
      <nav className="w-60v text-xs align-middle justify-between md:mr-32 text-white font-semibold">
        {[
            ['Download'],
            ['Nitro'],
            ['Safety'],
            ['Support'],
            ['Blog'],
            ['Carrers']
        ].map(([title]) => (
            <a className='mr-2'>{title}</a>
        ))}
        </nav>
      <button className="bg-white hover:bg-slate-100 text-discord-blue rounded-md px-2 text-xs font-bold">
        Login
      </button>
    </div>
    </div>
  )
}

export default LandingPage
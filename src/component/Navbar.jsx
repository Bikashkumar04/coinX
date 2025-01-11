import React from 'react'
import KoinXLog from '../assets/KoinXLogo.png'


function Navbar() {
  return (
    <div className='container bg-red-300 '>
        <nav className='bg-customwhite'>
            <div className="log">
                <img src={KoinXLog} alt="KoinX " />
            </div>
            <ul>
                <li><a href="http://">Crypto Tax</a></li>
                <li><a href=""></a> Free Tools</li>
                <li><a href="">Resource Center</a></li>
                <li><a href="">Get Started</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
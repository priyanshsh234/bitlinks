import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-14 bg-purple-700 flex justify-betwwen px-3 items-center text-white'>
        <div className='logo font-bold text-lg '>
            ShortLinks
            </div>
        <ul className='flex justify-center gap-4 items-center ml-225 p-6'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact us</li></Link>
            
           
        </ul>
        <li className='flex gap-3 ml-5'>
                <Link href="/generate"><button className='bg-purple-500 rounded-lg  shadow-lg  p-3 py-1 font-bold '>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHUb</button></Link>
            </li>
    </nav>
  )
}

export default Navbar
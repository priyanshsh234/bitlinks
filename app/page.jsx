import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <main className='bg-purple-100'>
    <section className='grid grid-cols-2 h-[50vh]'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-4xl font-bold font-extrabold text-purple-800 mb-0 mt-10 drop-shadow-lg mt-20'>
        The Best URL shortner in the Market
      </p>
      <p className='max-w-xl text-2xl text-purple-900 text-center font-medium mx-25'>
        We are the most straightforward URL shortner
      </p>
      <li className='flex gap-3 ml-5 mx-10'>
                <Link href="/generate"><button className='bg-purple-500 rounded-lg  shadow-lg  p-3 py-1 font-bold text-white '>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHUb</button></Link>
            </li>
      </div>
      <div className='flex jutify-start relative'>
        <Image alt="An Image of a vector" src={"https://cdn.prod.website-files.com/5bff8886c3964a992e90d465/5c00621b7aefa4f9ee0f4303_wide-shot.svg"}  fill={true}/>

      </div>

    </section>
    </main>
  )
}

export default page
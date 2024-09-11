// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from '/images/hero.png'

export default function Header() {
  let btn = 'p-4 px-6 border-purple-700 border-2 text-lg font-bold text-purple-700 uppercase rounded-md hover:bg-purple-700 hover:text-purple-50 hover:cursor-pointer hover:shadow-purple-900 shadow-md my-8 animate-bounce hover:animate-none';
  return (
    <div className='pt-10 flex flex-row-reverse justify-around items-center mx-auto' >
        <div className='w-2/5 m-auto'>
        <div className="w-fit m-auto">
          <h3 className='text-3xl font-bold capitalize'>hi! i am</h3>
            <h1 className="text-7xl font-black leading-relaxed bg-clip-text	text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">Shawon Mondol Shibu</h1>
            <h3 className='text-3xl font-bold capitalize leading-relaxed'>a web designer &  fullstack <br /> developer</h3>
            <button className={btn} >contact</button>
        </div>
        </div>
        <div className='w-2/5'>
            <img src={img} alt="image" className='h-screen m-auto ' />
        </div>
    </div>
  )
}

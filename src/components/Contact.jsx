/* eslint-disable no-unused-vars */
import React from 'react'

export default function Contact() {
    let inp = 'p-2 text-lg mb-6 rounded-md bg-transparent border-2 border-solid capitalize';
    return (
    <div id='contact' className='py-20 bg-gray-950'>
        <div className="w-fit m-auto ">
        <h1 className="capitalize py-2 px-2 text-5xl font-black bg-clip-text	text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          contact me
        </h1>
        <div className="flex m-auto w-3/4 justify-around relative">
          <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
          <hr className="border-solid border-2 border-slate-50 w-full m-auto " />
          <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
          <hr className="border-solid border-2 border-violet-500 w-2/3 m-auto absolute -bottom-1" />
        </div>
      </div>

        <form action="#" className='grid w-1/4 m-auto mt-20 '>
            <input  type="text" placeholder='enter your name' className={inp} />
            <input type="email" name="" placeholder='enter your email address' className={inp} />
            <textarea name="" rows={10} className={inp} placeholder='write here your comment'></textarea>
            <button className='p-4 px-6 border-purple-700 border-2 text-lg font-bold text-purple-700 capitalize rounded-md hover:bg-purple-700 hover:text-purple-50 hover:cursor-pointer hover:shadow-purple-900 shadow-md my-8'>massage</button>
        </form>
    </div>
  )
}

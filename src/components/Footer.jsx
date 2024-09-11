// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
export default function Footer() {
  const [socialIcon, setSocialIcon] = useState([]);
  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setSocialIcon(data.socialIcons))
  },[])

  return (
    <div className='py-4 bg-gray-950 '>
      <div className="w-1/2 flex justify-around items-center m-auto text-center">
        <h2 className="capitalize text-center text-stone-50">this website is created ©️ by shawon mondol shibu</h2>
        {
          socialIcon.map((icon, index)=><a key={index} href={icon.contact} >
          <img src={icon.src} alt={icon.title} />
        </a>)
        }
        
      </div>
    </div>
  )
}

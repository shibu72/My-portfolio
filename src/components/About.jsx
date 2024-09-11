// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "/images/hero.png";

export default function About() {
  let btn = 'p-4 px-6 bg-purple-800 text-white uppercase rounded-md hover:bg-purple-700 hover:cursor-pointer hover:shadow-md shadow-purple-500 my-8';
  return (
    <div id="about" className="bg-gray-950 pt-20">
      <div className="w-fit m-auto">
        <h1 className="capitalize py-2 px-2 text-5xl font-black bg-clip-text	text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          about me
        </h1>
        <div className="flex m-auto w-3/4 justify-around relative">
          <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
          <hr className="border-solid border-2 border-slate-50 w-full m-auto " />
          <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
          <hr className="border-solid border-2 border-violet-500 w-2/3 m-auto absolute -bottom-1" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="w-1/5">
          <img
            src={img}
            alt="image"
            className="w-full drop-shadow-md shadow-black border-violet-500 border-l-4 border-b-4 pl-2 pb-2"
          />
        </div>
        <aside className="w-2/5 capitalize ml-40">
          <article className="">
            <h3 className="text-3xl mb-10">
              hello i am shawon mondol shibu,
              <br /> i am a freelance frontend or mern stack developer from
              netrakona, mymenshing, Bangladesh
            </h3>
            <p className="text-lg leading-normal mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              magni repudiandae pariatur magnam at molestiae, ipsa totam amet
              beatae. Facilis minus vitae, ut quo ipsum amet recusandae
              veritatis! Quo, omnis.
            </p>
          </article>

          <div className="flex justify-enter">
            <ul>
              <li className="py-2">name</li>
              <li className="py-2">email</li>
              <li className="py-2">phone</li>
              <li className="py-2">date of birth</li>
              <li className="py-2">nationality</li>
              <li className="py-2">address</li>
            </ul>
            <ul className="ml-40">
              <li className="py-2">shawonmondol72@gmail.com</li>
              <li className="py-2">shawon mondol shibu</li>
              <li className="py-2">+8801812012377</li>
              <li className="py-2">06 feb 2004</li>
              <li className="py-2">bangladeshi</li>
              <li className="py-2">2400 road, Netrakona, mymenshing, bangladesh</li>
            </ul>

          </div>

          <button className={btn}>here me</button>
          <button className={btn} style={{marginLeft: '8.5rem'}}>download cv</button>
        </aside>
      </div>
    </div>
  );
}

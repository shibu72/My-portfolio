// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
export default function Gellery() {
  let imgCss =
    "w-[20%] object-cover p-2 rounded-xl transition-all duration-200 ease-in-out hover:scale-125 shadow-gray-800 shadow-md opacity-70 hover:w-1/5 hover:opacity-100 hover:border border-gray-800 hover:cursor-pointer";
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPictures(data.gellery));
  }, []);
  return (
    <>
      <div id="gellery" className="pt-20 bg-gray-900 font-black">
        <div className="w-fit m-auto">
          <h1 className="capitalize py-2 px-2 text-5xl bg-clip-text	text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            my Gellery
          </h1>
          <div className="flex m-auto w-3/4 justify-around relative">
            <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
            <hr className="border-solid border-2 border-slate-50 w-full m-auto " />
            <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
            <hr className="border-solid border-2 border-violet-700 w-2/3 m-auto absolute -bottom-1" />
          </div>
        </div>

        <div className="flex gap-10 flex-wrap w-4/5 m-auto mt-20 p-4 justify-center">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture.src}
              alt={picture.titel}
              className={imgCss}
            />
          ))}
        </div>
      </div>
    </>
  );
}

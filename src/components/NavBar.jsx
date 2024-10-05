// eslint-disable-next-line no-unused-vars
import React from "react";

export default function NavBar() {
  let navBtn = "p-4 uppercase rounded transition-all duration-300 ease-in-out hover:text-purple-700 cursor-pointer hover:rotate-3";
  return (
    <>
      <nav className="fixed z-50 backdrop-blur-md top-0 left-0 w-full bg-[#020202cc] flex text-purple-50 font-bold p-1">
        <a href="#" className={navBtn}>home</a>
        <a href="#about" className={navBtn}>about</a>
        {/*<a href="#gellery" className={navBtn}>gellery</a>*/}
        <a href="#skill" className={navBtn}>skills</a>
        <a href="#project" className={navBtn}>projects</a>
        <a href="#contact" className={navBtn}>contact</a>
      </nav>
    </>
  );
}

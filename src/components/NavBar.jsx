// eslint-disable-next-line no-unused-vars
import React from "react";
const navBar = [
  { title: "home", url: "#" },
  { title: "about", url: "#about" },
  { title: "skills", url: "#skill" },
  { title: "projects", url: "#project" },
  { title: "contact", url: "#contact" },
];
export default function NavBar() {
  let navBtn =
    "p-4 uppercase rounded transition-all duration-300 ease-in-out hover:text-purple-700 cursor-pointer hover:rotate-3";
  return (
    <>
      <nav className="fixed z-50 backdrop-blur-md top-0 left-0 w-full bg-[#020202cc] flex text-purple-50 font-bold p-1">
        {navBar.map((item, i) => (
          <a key={i} href={item.url} className={navBtn}>
            {item.title}
          </a>
        ))}

        {/*<a href="#gellery" className={navBtn}>gellery</a>*/}
      </nav>
    </>
  );
}

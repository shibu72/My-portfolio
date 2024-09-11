/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);
  return (
    <div id="project" className="bg-gray-900 grid py-40 capitalize">
      <div className="w-fit m-auto">
        <h1 className="capitalize py-2 px-2 text-5xl font-black bg-clip-text	text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Project's
        </h1>
        <div className="flex m-auto w-3/4 justify-around relative">
          <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
          <hr className="border-solid border-2 border-slate-50 w-full m-auto " />
          <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
          <hr className="border-solid border-2 border-violet-500 w-2/3 m-auto absolute -bottom-1" />
        </div>
      </div>
      <div className="w-[90%] flex flex-wrap m-auto pt-20 gap-5 items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid gap-3 w-[20%] p-4 shadow-lg shadow-black rounded-lg m-auto justify-center text-center  "
          >
            <img
              src={project.thumb}
              className="rounded-lg object-cover"
              alt={project.title}
            />
            <h2 className="text-4xl font-bold">{project.title}</h2>
            <div className="flex justify-between">
              <a
                href={project.src}
                className="w-fit m-auto p-4 py-2 shadow-lg rounded-lg shadow-black hover:underline hover:text-purple-600 hover:shadow-md"
                target="_blank"
              >
                go live
              </a>
              <a
                href={project.git}
                className="w-fit m-auto p-4 py-2 shadow-lg rounded-lg shadow-black hover:underline hover:text-purple-600 hover:shadow-md"
                target="_blank"
              >
                view source code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

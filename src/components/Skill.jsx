import { useEffect, useState } from "react";
export default function Skill() {
  let card =
    "w-1/6 h-96 p-4 pt-20 capitalize grid justify-items-center text-center shadow-black shadow-lg rounded-xl transition-all duration-200 ease-in-out hover:scale-125";
  let skill =
    "w-40 text-center p-4 m-10 grid items-center shadow-black shadow-lg transition-all duration-200 ease-in-out hover:scale-150 rounded-lg";

  const [iconData, setIconData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setIconData(data.icons));
  }, []);

  console.log(iconData);

  return (
    <>
      <div id="skill" className="bg-gray-950 py-20">
        <div className="w-fit m-auto">
          <h1 className="capitalize py-2 px-2 text-5xl font-black bg-clip-text	text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            skills
          </h1>
          <div className="flex m-auto w-3/4 justify-around relative">
            <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
            <hr className="border-solid border-2 border-slate-50 w-full m-auto " />
            <span className="h-3 w-3 border-solid border-2 border-violet-500 rounded-full"></span>
            <hr className="border-solid border-2 border-violet-500 w-2/3 m-auto absolute -bottom-1" />
          </div>
        </div>

        <div className="py-20 flex justify-evenly">
          <div className={card}>
            <span className="material-symbols-rounded text-8xl text-purple-500">
              engineering
            </span>
            <h2 className="font-bold text-2xl text-purple-500">
              cross-industry experience
            </h2>
            <p>
              before web development, i was a graphics designer, gold tester and
              a welder. my background gives me versatility and flexibility.
            </p>
          </div>
          <div className={card}>
            <span className="material-symbols-rounded text-8xl text-purple-500">
              developer_mode_tv
            </span>
            <h2 className="font-bold text-2xl text-purple-500">
              full stack development
            </h2>
            <p>
              for me, it&apos;s important to know all sides of the web development
              process. i&apos;ll learn whatever technology will help me build apps
              that improve lives
            </p>
          </div>
          <div className={card}>
            <span className="material-symbols-rounded text-8xl text-purple-500">
              brush
            </span>
            <h2 className="font-bold text-2xl text-purple-500">
              design focused
            </h2>
            <p>
              i like making websites look pretty. i know that a good design is
              just as important as good development. i work with photoshop,
              illustrator, gimp and inkscape
            </p>
          </div>
        </div>

        <div className="w-4/5 m-auto p-10 flex flex-wrap justify-around items-center">
          {iconData.map((icon, index) => (
            <div key={index} className={skill}>
              <img src={icon.src} className="w-full" alt={icon.title} />
              <h2 className="text-2xl font-bold capitalize ">{icon.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

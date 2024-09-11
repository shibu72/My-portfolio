
export default function Title() {
  return (
    <>
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
    </>
  )
}

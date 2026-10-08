import {useState} from "react";

function App() {

  const [color,setColor] = useState("#4a5565");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>

      <div className="fixed flex flex-wrap justify-evenly bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-red-300 px-3 py-2 rounded-full">
          <button className="outline-none px-4  py-1 bg-red-600 rounded-full" onClick={()=>{
            setColor("#ec003f")
          }}>Red</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-green-300 px-3 py-2 rounded-full">
          <button className="outline-none px-4  py-1 bg-green-600 rounded-full" onClick={()=>{
            setColor("#00a63e")
          }}>Green</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-blue-300 px-3 py-2 rounded-full">
          <button className="outline-none px-4  py-1 bg-blue-600 rounded-full" onClick={()=>{
            setColor("#155dfc")
          }}>Blue</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-300 px-3 py-2 rounded-full">
          <button className="outline-none px-4  py-1 bg-yellow-400 rounded-full" onClick={()=>{
            setColor("#f0b100")
          }}>Yellow</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-orange-300 px-3 py-2 rounded-full">
          <button className="outline-none px-4  py-1 bg-orange-400 rounded-full" onClick={()=>{
            setColor("#f54900")
          }}>Orange</button>
        </div>
      </div>
    </>
  )
}

export default App
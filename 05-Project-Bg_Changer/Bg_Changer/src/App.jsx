import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("Gray")
  return (
    <>
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      <div>
          <h1 id="name">
            Hamza Nasir!
            <br></br>
            React Project!
          </h1>
        </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-black rounded-lg p-2">
          <button
          onClick={() => setColor("#996515")}
           id="goldbrown" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>GoldBrown</i></b></button>
          <button 
          onClick={() => setColor("#582F0E")}
          id="sealbrown" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>SealBrown</i></b></button>
          <button
          onClick={() => setColor("#CC3333")}
          id="persianred" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>PersianRed</i></b></button>
          <button 
          onClick={() => setColor("#3A5A40")}
          id="huntgreen" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>HuntGreen</i></b></button>
          <button
          onClick={() => setColor("#252627")}
          id="eerieblack" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>EerieBlack</i></b></button>
          <button 
          onClick={() => setColor("#C2EABD")}
          id="teagreen" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>TeaGreen</i></b></button>
          <button
          onClick={() => setColor("#8896AB")}
          id="coolgray" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>CoolGray</i></b></button>
          <button 
          onClick={() => setColor("#DDD8C4")}
          id="bone" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>Bone</i></b></button>
          <button
          onClick={() => setColor("#E8DB7D")}
          id="flax" className="outline-none px-4 rounded-xl text-white shadow-xl"
          // style={{backgroundColor: "White" }}
          ><b><i>Flax</i></b></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

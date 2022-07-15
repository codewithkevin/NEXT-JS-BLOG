import React from 'react'
// index.js
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BiWebcam } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className="bg-black text-white h-[15%] w-14 mt-10 rounded-lg">
          <div className="text-center justify-space p-3 py-2  mt-20 cursor-pointer">
             <div className="text-[30px] mb-3 icons">
                <FaMobileAlt />
             </div>
             <div className="text-[30px] mb-3 icons">
                <BiWebcam />
             </div>
             <div className="text-[30px] mb-3 icons">
                <FaLaptopCode />
             </div>
          </div>
    </div>
  )
}

export default Navbar
import React from 'react'
// index.js

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-white text-black h-[20%] w-14">
        <FontAwesomeIcon
        icon={faAnchor}
        className="text-xs text-red-800"
      />
    </div>
  )
}

export default Navbar
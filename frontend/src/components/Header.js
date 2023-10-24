import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        <nav  className="h-full px-4 max-w-container mx-auto relative">
            <Link to ="/">
            

            </Link>
        </nav>

    </div>
  )
}

export default Header
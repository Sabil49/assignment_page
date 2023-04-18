import React from 'react';
import Searchbar from './Searchbar';
import Righticons from "./Righticons";

function Header() {

    return (
        <header className="bg-indigo-500 fixed top-0 py-2.5 w-full z-10">
            <div className="w-full px-1 py-2  sm:px-4  m-auto flex justify-between items-center relative">
                <div className="w-3/12 hidden sm:w-1/12 sm:block flex items-center font-bold text-xl text-white justify-center">
                    
                </div>
                <div className="w-4/12 sm:w-2/12 flex items-center font-bold text-xl text-white">
                    Primary Header
                </div>
                <div className="w-6/12 hidden sm:w-5/12 sm:block flex items-center justify-center">                   
                    <Searchbar />
                </div>
                <div className="w-1/1 sm:w-3/12 flex items-center font-bold text-xl text-white justify-end">
                    <Righticons />
                </div>
             </div>
        </header>
      );
}

export default Header;

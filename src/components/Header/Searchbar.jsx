import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useState } from 'react';

function Searchbar() {

    const [search, setSearch] = useState("");

    return (
        <form className="rounded-md	w-1/2 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white overflow-hidden">
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="text-sm flex-1 outline-none border-none placeholder-gray-500" type="text" placeholder="Search.." />
            <button type="submit" className="text-primary-blue"><SearchIcon /></button>    
        </form>
      );
};

export default Searchbar;
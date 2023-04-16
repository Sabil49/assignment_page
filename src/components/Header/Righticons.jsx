import React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "react-router-dom";
import profileicon from "../../assets/images/profileicon.png";

function Righticons() {    

    return (
        <>
            <Link to="/" className="flex items-center text-white font-medium gap-2 relative ml-10">
                <span>
                    <EmailOutlinedIcon />
                </span>
                <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">76</div>
            </Link>
            <Link to="/" className="flex items-center text-white font-medium gap-2 relative ml-10">
                <span>
                    <NotificationsNoneIcon />
                </span>
                <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">4</div>
            </Link>
            <Link to="/" className="flex items-center text-white font-medium gap-2 relative ml-10">
                <span>
                    <MessageIcon />
                </span>
                <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">15</div>
            </Link>
            <Link to="/" className="flex items-center text-white font-medium gap-2 relative ml-10">
                <img draggable="false" className="h-full w-full object-contain" src={profileicon} alt="Profile" />

            </Link>
        </>
      );
};

export default Righticons;
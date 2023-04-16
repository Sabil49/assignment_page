import React from 'react';
import Calender from './Calender';
import charts from "../../assets/images/charts.png";
import hotels from "../../assets/images/hotels.png";
import set from "../../assets/images/set.png";
import $ from 'jquery';

function Layout() {

   // $(".MuiPickersCalendarHeader-root").prepend("<div className='recent'>Recent Booking Shedule</div>");
 
    

    return (
        <div className="w-full block px-1 py-2  sm:px-4 m-auto sm:flex justify-between relative layout">
            <div className="hidden sm:w-1/12 sm:block">
            </div>
            <div className="w-full block sm:w-5/12">
                <div className="w-full"> <Calender /></div>               
                <div className="w-full below"> <img draggable="false" className="object-contain" src={hotels} alt="Hotels" /></div>
            </div>
            <div className="w-full mt-4 mb-20 block sm:w-5/12 sm:mt-0 sm:mb-0">
                <img src={charts} draggable="false" className="object-contain" alt="Chart" />
            </div>
            <div className="set">
                <img src={set} draggable="false" className="object-contain" alt="Setting" />
            </div>    
        </div>

      );
}

export default Layout;
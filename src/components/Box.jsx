import React from 'react';
import { useState, useEffect } from 'react';

function Box() {

    const [num, setNum] = useState({});
    const setting = ({
        width: "100px",
        height: "100px",
        border: "1px solid black",
    });

    const clickhandle = (name, value, index) => {
     
        setNum(values => ({ ...values, [name]: !value }));
        if (num[name] == true) {
            alert("Data false");
        }
        else {
            alert("Index number => "+index);
        }
        };
    
    return (
        <div>
            {   [...Array(1000)].map((Number, index) => {
            console.log(index + "sabil");
            let numbr = index + 1
            let name = "a" + numbr;
            return <div style={setting} onClick={() => clickhandle(name, num[name] || false, index)}>{numbr}</div>
            })
            }
        </div>
        );
}

export default Box;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);






    const navigate = useNavigate();

    const location = useLocation();







    function handleNav(type) {
        if (type === 'home') {
            navigate('/');
        }
        else if (type === 'play') {
            navigate('/play');
        }
        else if (type === 'about') {
            setOpenMenu(!openMenu);
            navigate('/about');
        }
        else if (type === 'contact') {
            setOpenMenu(!openMenu);
            navigate('/contact');
        }

    }




    return (
        <div className="w-full h-24 flex absolute top-0 items-center justify-evenly mt-4 z-[9999]">
            <div className="h-[60px] w-[60px] rounded-[50%] bg-[#ffffff] bsh flex items-center justify-center">
                {
                    location.pathname === '/' ? <div className="bitmoji"></div> : <i className="fa-solid fa-arrow-left cursor-pointer" style={{ color: "#d4d6d8" }} onClick={() => navigate(-1)} > </i>
                }
            </div>
            <div className="h-[60px] w-[186px] bg-[#f6f6f6] bsh rounded-[30px] flex items-center justify-evenly cursor-pointer ">
                <div
                    className={`h-12 w-20 rounded-[20px] text-center text-sm flex items-center justify-center sm:text-base  
                       ${location.pathname !== '/play' && location.pathname !== '/about' && location.pathname !== '/contact' ? "currentTab font-bold" : "noTab"}`}
                    onClick={() => handleNav('home')}
                >
                <p> Work</p>
                </div>
                <div className={`h-12 w-20 rounded-[20px] text-center text-sm flex items-center justify-center sm:text-base  ${location.pathname === '/play' ? "currentTab" : ""} `} onClick={() => handleNav('play')}>
                    <p className={`${location.pathname === '/play' ? "gtext font-bold" : ""}`}>Play</p> </div>
            </div>
            <div className="h-[60px] w-[60px] rounded-[50%] bg-[#ffffff] bsh flex items-center justify-center cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                <FontAwesomeIcon icon={openMenu ? faTimes : faBars} style={{ color: "#d4d6d8" }} className=" translate-x-0" />
            </div>
            <div className={`flex flex-row w-[300px] bg-white  bsh absolute top-20 z-50 transition-all duration-300 rounded-md  ${openMenu ? "opacity-100 mt-6" : "opacity-0 mt-0"}`}>
                <div className="w-[300px] h-24 flex flex-col items-center justify-center  cursor-pointer">

                    <div className="flex items-center w-20 gap-3" onClick={() => handleNav('about')}>
                        <i className="fa-solid fa-user"></i>
                        <p className="text-sm">About</p>
                    </div>
                    <div className="flex items-center w-20 gap-2" onClick={() => handleNav('contact')}>
                        <i className="fa-solid fa-address-card"></i>
                        <p className="text-sm">Contact</p>
                    </div>


                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="w-screen h-24 flex items-center justify-evenly mt-4 relative">
            <div className="h-[60px] w-[60px] rounded-[50%] bg-[#ffffff] bsh flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#d4d6d8" }} />
            </div>
            <div className="h-[60px] w-[186px] bg-[#ffffff] bsh rounded-[30px] flex items-center justify-evenly">
                <div className="h-12 w-12 rounded-lg text-center flex items-center active:bg-slate-100">Work</div>
                <div className="h-12 w-12 rounded-lg text-center flex items-center active:bg-slate-100">Play</div>
            </div>
            <div className="h-[60px] w-[60px] rounded-[50%] bg-[#ffffff] bsh flex items-center justify-center" onClick={() => setOpenMenu(!openMenu)}>
                <FontAwesomeIcon icon={openMenu ? faTimes : faBars} style={{ color: "#d4d6d8" }} className=" translate-x-0"/>
            </div>
            <div className={`flex flex-row w-36 bsh absolute top-20 right-32 transition-all duration-300 ${openMenu ? "opacity-100 mt-6" : "opacity-0 mt-0"}`}>
                <div className="w-32 flex items-center justify-around">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#d4d6d8" }} />
                    <p>About</p>
                </div>
            </div>
        </div>
    );
}

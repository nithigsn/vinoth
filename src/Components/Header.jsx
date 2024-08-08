import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const { home, setHome } = useContext(userContext);

    const [tab, setTab] = useState(() => {
        const savedTab = localStorage.getItem('tab');
        return savedTab !== null ? JSON.parse(savedTab) : "home"
    })

    const navigate = useNavigate();

    function handleNavigateHome() {
        navigate('/');
        setHome(true);
    }

    function handleTab() {

        setTab("work");
        navigate('/extra');
    }




    return (
        <div className="w-full h-24 flex items-center justify-evenly mt-4 relative">
            <div className="h-[60px] w-[60px] rounded-[50%] bg-[#ffffff] bsh flex items-center justify-center">
                {
                    home ? <div className="bitmoji"></div> : <i className="fa-solid fa-arrow-left cursor-pointer" style={{ color: "#d4d6d8" }} onClick={handleNavigateHome} > </i>
                }
            </div>
            <div className="h-[60px] w-[186px] bg-[#ffffff] bsh rounded-[30px] flex items-center justify-evenly">
                <div className={`h-12 w-20 rounded-[20px] text-center text-sm flex items-center justify-center sm:text-base  ${tab === home ? "currentTab" : "noTab"}`} onClick={()=>navigate('/')}>Work</div>
                <div className={`h-12 w-20 rounded-[20px] text-center text-sm flex items-center justify-center sm:text-base  ${tab}`} onCanPlay={handleTab}>Play</div>
            </div>
            <div className="h-[60px] w-[60px] rounded-[50%] bg-[#ffffff] bsh flex items-center justify-center" onClick={() => setOpenMenu(!openMenu)}>
                <FontAwesomeIcon icon={openMenu ? faTimes : faBars} style={{ color: "#d4d6d8" }} className=" translate-x-0" />
            </div>
            <div className={`flex flex-row w-[300px] bg-white  bsh absolute top-20 z-10 transition-all duration-300 ${openMenu ? "opacity-100 mt-6" : "opacity-0 mt-0"}`}>
                <div className="w-[300px] h-24 flex flex-col items-center justify-center ">
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

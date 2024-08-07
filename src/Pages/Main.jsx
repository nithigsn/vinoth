
import { useContext, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";


export default function Main() {

    const {home,setHome}=useContext(userContext);


    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])


    const navigate = useNavigate();


    function handlenavigateHindu() {
        navigate('/hindu');
        setHome(!home);

    }


    return (

        <div className="flex flex-col h-full w-full  items-center justify-around ">

            <div className="flex flex-col w-[90vw] h-full justify-around items-center ">

                <div className=" flex flex-col items-center justify-center w-[90vw] h-[400px] ">
                    <h1 className="text-5xl text-center">Hi,I'm Vinoth.</h1>

                    <div className="flex items-center ">
                        <p className="text-sm"> <i className="fa-solid fa-location-dot" style={{ color: "#d4d6d8" }} ></i> Paris,France</p>
                    </div>

                    <p className="text-center text-xs w-[300px]">I'm a Photographer and a Videographer.Over the years worked with many clients. <br />
                    Captured many precious moments. Scroll down and Checkout !</p>

                </div>




                {/* -------------------------------------------------Box 1------------------------------------- */}

                <div className="box w-[90vw] h-[400px] flex  cursor-pointer rounded-s" data-aos="fade-right">

                    <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] ">
                        <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-lg  font-bold">Indian Weddings</h1>
                                <p className="text-sm">Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly">


                                <button className="text-sm font-medium " onClick={handlenavigateHindu}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="innerbox w-[45vw] flex flex-col h-[400px] gap-2 ">

                        <div className="w-[45vw] h-[200px] hi-1 rounded-sm"></div>
                        <div className="flex w-[45vw] h-[200px] gap-2">
                            <div className="w-[22.5vw]  hi-2 rounded-sm"></div>
                            <div className="hi-3 w-[22.5vw] rounded-sm"></div>
                        </div>
                    </div>

                </div>


                {/* -------------------------------------------------Box 2------------------------------------- */}

                <div className="box  w-[90vw] h-[400px] mt-[50px] flex cursor-pointer rounded-s" data-aos="fade-right">

                    <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] ">
                        <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-lg  font-bold">Indian Weddings</h1>
                                <p className="text-sm">Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly">


                                <button className="text-sm font-medium " onClick={handlenavigateHindu}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="innerbox w-[45vw] flex flex-col h-[400px] gap-2 ">

                        <div className="w-[45vw] h-[200px] hi-1 rounded-sm"></div>
                        <div className="flex w-[45vw] h-[200px] gap-2">
                            <div className="w-[22.5vw]  hi-2 rounded-sm"></div>
                            <div className="hi-3 w-[22.5vw] rounded-sm"></div>
                        </div>
                    </div>

                </div>

                {/* -------------------------------------------------Box 3------------------------------------- */}


              
                <div className="box  w-[90vw] h-[400px] mt-[50px] flex  cursor-pointer rounded-s" data-aos="fade-right">

                    <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] ">
                        <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-lg  font-bold">Indian Weddings</h1>
                                <p className="text-sm">Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly">


                                <button className="text-sm font-medium " onClick={handlenavigateHindu}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="innerbox w-[45vw] flex flex-col h-[400px] gap-2 ">

                        <div className="w-[45vw] h-[200px] hi-1 rounded-sm"></div>
                        <div className="flex w-[45vw] h-[200px] gap-2">
                            <div className="w-[22.5vw]  hi-2 rounded-sm"></div>
                            <div className="hi-3 w-[22.5vw] rounded-sm"></div>
                        </div>
                    </div>

                </div>

                {/* -------------------------------------------------Box 4------------------------------------- */}
                
                <div className="box  w-[90vw] h-[400px] mt-[50px] flex  cursor-pointer rounded-s" data-aos="fade-right">

                    <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] ">
                        <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-lg  font-bold">Indian Weddings</h1>
                                <p className="text-sm">Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly">


                                <button className="text-sm font-medium " onClick={handlenavigateHindu}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="innerbox w-[45vw] flex flex-col h-[400px] gap-2 ">

                        <div className="w-[45vw] h-[200px] hi-1 rounded-sm"></div>
                        <div className="flex w-[45vw] h-[200px] gap-2">
                            <div className="w-[22.5vw]  hi-2 rounded-sm"></div>
                            <div className="hi-3 w-[22.5vw] rounded-sm"></div>
                        </div>
                    </div>

                </div>


            </div>




        </div>
    );
}

import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";
import PreLoading from "./PreLoading";



export default function Main() {


    const [isLoading, setIsLoading] = useState(() => {

        const loading = sessionStorage.getItem('isLoading');
        // Return true if there's no saved value or the saved value is true
        return loading === null || JSON.parse(loading) === true;
    });

    useEffect(() => {
        const savedLoading = sessionStorage.getItem('isLoading');

        // If savedLoading is true (first time or while loading), start the timeout
        if (savedLoading === null || JSON.parse(savedLoading) === true) {
            setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('isLoading', JSON.stringify(false));
            }, 6000);
        } else {
            console.log("Loading has already completed previously.");
        }
    }, []);




    useEffect(() => {

        AOS.init({ duration: 2000 });

    }, [])


    const navigate = useNavigate();


    function handlenavigateHindu() {
        navigate('/hindu');


    }


    return (

        <>

            {isLoading && <PreLoading />}


            <div className="flex flex-col h-full w-full  items-center  sm:items-center  ">

             





                <div className="flex flex-col w-[90vw] h-full justify-around items-center ">

                    <div className=" flex flex-col items-center justify-center w-[90vw] h-screen ">
                        <h1 className="text-5xl text-center sm:text-6xl">Hi,I'm Vinoth.</h1>

                        <div className="flex items-center ">
                            <p className="text-sm"> <i className="fa-solid fa-location-dot" style={{ color: "#d4d6d8" }} ></i> Paris,France.</p>
                        </div>

                        <p className="text-center text-xs w-[300px] lg:text-base lg:w-[700px]">I'm a Photographer and a Videographer.Over the years worked with many clients. <br />
                            Captured many precious moments. Scroll down and Checkout !</p>

                    </div>




                    {/* -------------------------------------------------Box 1------------------------------------- */}

                    <div className="box w-[90vw] h-[400px] flex justify-center cursor-pointer rounded-s sm:w-[70vw]" data-aos="fade-right">

                        <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] sm:w-[35vw]">

                            <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly sm: ">
                                <div>
                                    <h1 className="text-lg  font-bold sm:text-2xl lg:text-3xl">Indian Weddings</h1>
                                    <p className="text-sm">Over the years worked with many Indian clients
                                        for Indian style weddings.
                                    </p>
                                </div>

                                <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly sm:h-[40px] sm:w-[120px] ">


                                    <button className="text-sm font-medium " onClick={handlenavigateHindu}>Click Here </button>
                                    <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                                </div>

                            </div>

                        </div>

                        <div className=" w-[45vw] flex flex-col h-[400px] gap-1 sm:w-[35vw]">

                            <div className="w-[45vw] h-[200px] rounded-sm sm:w-[35vw] hi-1">

                            </div>
                            <div className="flex w-[45vw] h-[200px] gap-1 sm:w-[35vw]">
                                <div className="w-[22.5vw] hi-2   rounded-sm">

                                </div>
                                <div className="hi-3 w-[22.5vw] rounded-sm"></div>
                            </div>
                        </div>

                    </div>


                    {/* -------------------------------------------------Box 2------------------------------------- */}
{/* 
                    <div className="box w-[90vw] h-[400px] flex justify-center cursor-pointer rounded-s mt-10 sm:w-[70vw]" data-aos="fade-right">

                        <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] sm:w-[35vw]">

                            <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly sm: ">
                                <div>
                                    <h1 className="text-lg  font-bold sm:text-2xl lg:text-3xl">Foreign Weddings</h1>
                                    <p className="text-sm">Over the years worked with lot of Indian clients
                                        for indian style weddings.
                                    </p>
                                </div>

                                <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly sm:h-[40px] sm:w-[120px] ">


                                    <button className="text-sm font-medium " onClick={()=>navigate('/events')}>Click Here </button>
                                    <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                                </div>

                            </div>

                        </div>

                        <div className=" w-[45vw] flex flex-col h-[400px] gap-1 sm:w-[35vw]">

                            <div className="w-[45vw] h-[200px] hi-1 rounded-sm sm:w-[35vw]"></div>
                            <div className="flex w-[45vw] h-[200px] gap-1 sm:w-[35vw]">
                                <div className="w-[22.5vw]  hi-2 rounded-sm"></div>
                                <div className="hi-3 w-[22.5vw] rounded-sm"></div>
                            </div>
                        </div>

                    </div> */}


                    {/* -------------------------------------------------Box 3------------------------------------- */}

                    <div className="box w-[90vw] h-[400px] flex justify-center cursor-pointer rounded-s mt-10 sm:w-[70vw]" data-aos="fade-right">

                        <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] sm:w-[35vw]">

                            <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly">
                                <div className="w-full">
                                    <h1 className="text-lg  font-bold sm:text-2xl lg:text-3xl">Events</h1>
                                    <p className="text-sm text-clip">Birthday,Babyshoot, <br />Maternity Shoot,Modelshoot you name it.
                                        We do every kind of shoots !.                                    </p>
                                </div>

                                <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly sm:h-[40px] sm:w-[120px] ">


                                    <button className="text-sm font-medium " onClick={()=>navigate('/events')}>Click Here </button>
                                    <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                                </div>

                            </div>

                        </div>

                        <div className=" w-[45vw] flex flex-col h-[400px] gap-1 sm:w-[35vw]">

                            <div className="w-[45vw] h-[200px] rounded-sm sm:w-[35vw] bd-1">
                               

                            </div>
                            <div className="flex w-[45vw] h-[200px] gap-1 sm:w-[35vw]">
                                <div className="w-[22.5vw]   rounded-sm bd-2">
                                   
                                </div>
                                <div className=" w-[22.5vw] rounded-sm bd-3">
                                  

                                </div>
                            </div>
                        </div>

                    </div>


                    {/* -------------------------------------------------Box 4------------------------------------- */}

                    <div className="box w-[90vw] h-[400px] flex justify-center cursor-pointer rounded-s mt-10 sm:w-[70vw]" data-aos="fade-right">

                        <div className="flex flex-col justify-center items-center w-[45vw] h-[400px] sm:w-[35vw]">

                            <div className="flex flex-col h-[400px] w-[30vw] items-start justify-evenly sm: ">
                                <div>
                                    <h1 className="text-lg  font-bold sm:text-2xl lg:text-3xl">Concerts</h1>
                                    <p className="text-sm">Available for the concerts based on France.
                                        Worked with <b>Asal Kolaar,Aniruth</b> etc.
                                    </p>
                                </div>

                                <div className="btn h-[50px] w-[100px] bg-white rounded-md flex items-center justify-evenly sm:h-[40px] sm:w-[120px] ">


                                    <button className="text-sm font-medium " onClick={()=>navigate('/concerts')}>Click Here </button>
                                    <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                                </div>

                            </div>

                        </div>

                        <div className=" w-[45vw] flex flex-col h-[400px] gap-1 sm:w-[35vw]">

                            <div className="w-[45vw] h-[200px] eve-1 rounded-sm sm:w-[35vw]"></div>
                            <div className="flex w-[45vw] h-[200px] gap-1 sm:w-[35vw]">
                                <div className="w-[22.5vw]  eve-2 rounded-sm"></div>
                                <div className="eve-3 w-[22.5vw] rounded-sm"></div>
                            </div>
                        </div>

                    </div>



                </div>




            </div>



        </>

    );
}
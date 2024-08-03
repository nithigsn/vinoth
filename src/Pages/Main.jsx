
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";


export default function Main() {


    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])


    const navigate = useNavigate();


    return (

        <div className="flex flex-col h-full w-full  items-center justify-center ">

            <div className="flex flex-col w-[60vw] h-full  ">

                <div className="flex flex-col items-center justify-center w-[60vw] h-[400px] ">
                    <h1 className="text-6xl text-center">Hi,I'm Vinoth.</h1>

                    <div className="flex items-center ">
                        <p> <i className="fa-solid fa-location-dot" style={{ color: "#d4d6d8" }} ></i> Paris,France</p>
                    </div>

                    <p>I Take Photos and Videos could be wedding birthday events personal shoots</p>

                </div>




                {/* -------------------------------------------------Box 1------------------------------------- */}

                <div className="box w-[60vw] h-[400px] flex cursor-pointer   rounded-s" data-aos="fade-right">

                    <div className="flex flex-col justify-center items-center w-[30vw] h-[400px] ">
                        <div className="flex flex-col h-[400px] w-[25vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-4xl ">Indian Weddings</h1>
                                <p>Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[200px] bg-white rounded-md flex items-center  justify-evenly">


                                <button className=" " onClick={() => navigate('/hindu')}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col h-[400px] gap-2 ">

                        <div className="w-[30vw] h-[200px] hi-1 rounded-sm">
                        </div>
                        <div className="flex w-[30vw] h-[200px] gap-2">
                            <div className="w-[15vw]  hi-2 rounded-sm"></div>
                            <div className="hi-3 w-[15vw] rounded-sm"></div>
                        </div>
                    </div>

                </div>


                {/* -------------------------------------------------Box 2------------------------------------- */}
                <div className="box w-[60vw] h-[400px] flex mt-16 rounded-sm cursor-pointer " data-aos="fade-right">


                    <div className="flex flex-col justify-center items-center w-[30vw] h-[400px] ">

                        <div className="flex flex-col h-[400px] w-[25vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-4xl ">Indian Weddings</h1>
                                <p>Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[200px] bg-white rounded-md flex items-center  justify-evenly">


                                <button className=" " onClick={() => navigate('/hindu')}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="flex  h-[400px] gap-2 ">
                        <div className="w-[15vw] h-[400px] hi-2 rounded-sm">
                        </div>
                        <div className="flex flex-col w-[15vw] h-[400px] gap-2 ">
                            <div className="h-[200px] w-[15vw] hi-1"></div>
                            <div className="h-[200px] w-[15vw] hi-3"></div>
                        </div>



                    </div>

                </div>


                {/* -------------------------------------------------Box 3------------------------------------- */}


                <div className="box w-[60vw] h-[400px] flex mt-16 rounded-sm cursor-pointer " data-aos="fade-right">

                    <div className="flex flex-col justify-center items-center w-[30vw] h-[400px] ">

                        <div className="flex flex-col h-[400px] w-[25vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-4xl ">Indian Weddings</h1>
                                <p>Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[200px] bg-white rounded-md flex items-center  justify-evenly">


                                <button className=" " onClick={() => navigate('/hindu')}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="flex  h-[400px] gap-2 ">
                        <div className="w-[15vw] h-[400px] hi-2 rounded-sm">
                        </div>
                        <div className="flex flex-col w-[15vw] h-[400px] gap-2 ">
                            <div className="h-[200px] w-[15vw] hi-1"></div>
                            <div className="h-[200px] w-[15vw] hi-3"></div>
                        </div>

                    </div>

                </div>



                {/* -------------------------------------------------Box 4------------------------------------- */}
                <div className="box w-[60vw] h-[400px] flex mt-16 rounded-sm cursor-pointer " data-aos="fade-right"
                >

                    <div className="flex flex-col justify-center items-center w-[30vw] h-[400px] ">

                        <div className="flex flex-col h-[400px] w-[25vw] items-start justify-evenly">
                            <div>
                                <h1 className="text-4xl ">Indian Weddings</h1>
                                <p>Over the years worked with lot of Indian clients
                                    for indian style weddings.
                                </p>
                            </div>

                            <div className="btn h-[50px] w-[200px] bg-white rounded-md flex items-center  justify-evenly">


                                <button className=" " onClick={() => navigate('/hindu')}>Click Here </button>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#d4d6d8" }}></i>

                            </div>

                        </div>

                    </div>

                    <div className="flex  h-[400px] gap-2 ">
                        <div className="w-[15vw] h-[400px] hi-2 rounded-sm">
                        </div>
                        <div className="flex flex-col w-[15vw] h-[400px] gap-2 ">
                            <div className="h-[200px] w-[15vw] hi-1"></div>
                            <div className="h-[200px] w-[15vw] hi-3"></div>
                        </div>

                    </div>

                </div>





            </div>




        </div>
    );
}
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function ArunSanthiya() {




    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])


    return (
        <div className="w-full h-full inline-flex flex-col items-center justify-center p-11">


            <h1 className='he-wed text-6xl'>Arun Weds Santhiya</h1>

            <div className="w-[65vw] h-full flex gap-1 mt-8">

                <div className="flex flex-col w-[32.5vw] h-[60vh]  gap-1">
                    <div className="h-[20vh] w-[32.5vw]  flex gap-1">

                        <div className="h-[20vh] w-[22vw] bg-land-1 small" data-aos="fade-right"  >

                        </div>

                        <div className="h-[20vh] w-[10.5vw] bg-sq3 small"></div>
                    </div>

                    <div className="w-[32.5vw] h-[40vh] bg-land-2 big ">

                    </div>
                </div>


                <div className="flex flex-col w-[32.5vw] h-[60vh] gap-1" >
                    <div className="flex h-[40vh] w-full  gap-1">
                        <div className="w-[10.83vw] h-[40vh] bg-ver big" data-aos='fade-zoom-in' ></div>
                        <div className="w-[10.83vw] h-[40vh] bg-ver2 big"></div>
                        <div className="w-[10.83vw] h-[40vh] flex flex-col gap-1">
                            <div className="h-[20vh] bg-sq"></div>
                            <div className="h-[20vh] bg-sq1"></div>
                        </div>
                    </div>
                    <div className="w-[32.5vw] h-[20vh] flex gap-1">
                        <div className="w-[15.83vw] h-[20vh] bg-sq2 bg-red-50"></div>
                        <div className="w-full bg-land"></div>
                    </div>

                </div>


            </div>



        </div>
    );
}
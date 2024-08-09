import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function FistherVanissa() {


    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])

    return (

        <div className="w-full h-full">

            <div className="w-screen h-[300px] sm:h-[500px] lg:w-full lg:h-[900px] fi-bg flex justify-center">

                <h1 className="text-lg p-10 lg:p-[200px]" data-aos='fade-zoom-in'>Fisther & Vanissa</h1>


            </div>



        </div>
    );
}
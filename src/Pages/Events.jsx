import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Events() {

    const navigate=useNavigate();



    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])
    
    return (

        <div className="w-full h-full flex flex-col items-center justify-center ">

            <div className="indian w-[80vw] h-full flex flex-col gap-x-1 mt-8 items-center justify-center lg:flex-row lg:gap-x-3">

                <div className='indian-inner h-[500px] w-[80vw]  text-white flex flex-col items-center justify-end celine sm:h-[650px] sm:w-[60vw] lg:h-[700px] ' data-aos='fade-right'>
                    <div className='flex flex-col h-[200px] justify-center items-center w-full bg-glass'>
                        <h3 className='text-xl font-semibold sm:text-2xl'>Celine</h3>
                        <p className='text-xs w-[200px] text-black font-medium lg:text-[15px] text-center sm:w-[400px]'> It was a surprise birthday party with a lot of unexpected people flew from different countries to surprise her.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-xs rounded cursor-pointer text-black ' onClick={()=>navigate('/events/celine')} >Captured Moments</button>
                    </div>
                </div>

               

            </div>

           

        </div>

    );
}
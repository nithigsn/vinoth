import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function IndianWeddings() {

    const navigate=useNavigate();



    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])
    
    return (

        <div className="w-full h-full flex flex-col items-center justify-center ">

            <div className="indian w-[80vw] h-full flex flex-col gap-x-1 mt-8 items-center justify-center lg:flex-row lg:gap-x-3">

                <div className='indian-inner h-[500px] w-[80vw]  text-white flex flex-col items-center justify-end bg-ver sm:h-[650px] sm:w-[60vw]   exl:h-[720px]' data-aos='fade-right'>
                    <div className='flex flex-col h-[200px] justify-center items-center '>
                        <h3 className='text-xl font-semibold sm:text-2xl'>Arun & Santhiya</h3>
                        <p className='text-xs w-[200px] text-center sm:w-[400px]'> Wedding was a gorgeous & glamorous celebration. Our hearts danced to the beat of a live saxophone that brought music to our ears.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-xs rounded cursor-pointer ' onClick={()=>navigate('/hindu/arunsanthiya')} >Captured Moments</button>

                    </div>
                </div>
                <div className='indian-inner h-[500px] w-[80vw] mt-16 text-white flex flex-col items-center justify-end bg-ver2 sm:h-[650px] sm:w-[60vw] lg:mt-0 exl:h-[720px]' data-aos="fade-zoom-in">
                    <div className='flex flex-col h-[200px] justify-center items-center '>
                        <h3 className='text-xl font-semibold sm:text-2xl'>Aashif & Sangeetha</h3>
                        <p className='text-xs w-[200px] text-center sm:w-[400px]'> Wedding was a gorgeous & glamorous celebration. Our hearts danced to the beat of a live saxophone that brought music to our ears.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-xs rounded cursor-pointer  ' onClick={()=>navigate('/hindu/aashifsangeetha')}>Captured Moments</button>
                    </div>
                </div>
                <div className='indian-inner h-[550px] w-[80vw] mt-16 text-white flex flex-col items-center justify-end bg-sq1 sm:h-[650px] sm:w-[60vw] lg:mt-0 exl:h-[720px]' data-aos='fade-left'>
                    <div className='flex flex-col h-[200px] justify-center items-center '>
                        <h3 className='text-xl font-semibold sm:text-2xl'>Fisther & Vanissa</h3>
                        <p className='text-xs w-[200px] text-center sm:w-[400px]'> Wedding was a gorgeous & glamorous celebration. Our hearts danced to the beat of a live saxophone that brought music to our ears.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-xs rounded cursor-pointer' onClick={()=>navigate('/hindu/fisthervanissa')}>Captured Moments</button>
                    </div>
                </div>

            </div>

           

        </div>

    );
}
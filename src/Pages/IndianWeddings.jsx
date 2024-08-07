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

        <div className="w-full h-full inline-flex flex-col items-center justify-center p-11">

            <div className="indian w-[65vw] h-[60vh] flex gap-x-1 mt-8 justify-center">

                <div className='indian-inner h-400px w-[20vw] text-white flex flex-col items-center justify-end bg-ver' data-aos='fade-right'>
                    <div className='flex flex-col h-[200px] justify-center items-center '>
                        <h3 className='text-xl'>Arun & Santhiya</h3>
                        <p className='text-[12px] w-[80%] text-center'> Wedding was a gorgeous & glamorous celebration. Our hearts danced to the beat of a live saxophone that brought music to our ears.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-sm rounded cursor-pointer ' onClick={()=>navigate('/hindu/arunsanthiya')} >Captured Moments</button>

                    </div>
                </div>
                <div className='indian-inner h-400px w-[20vw] text-white flex flex-col items-center justify-end bg-ver2' data-aos="fade-zoom-in">
                    <div className='flex flex-col h-[200px] justify-center items-center '>
                        <h3 className='text-xl'>Arun & Santhiya</h3>
                        <p className='text-[12px] w-[80%] text-center'> Wedding was a gorgeous & glamorous celebration. Our hearts danced to the beat of a live saxophone that brought music to our ears.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-sm rounded cursor-pointer  '>Captured Moments</button>
                    </div>
                </div>
                <div className='indian-inner h-400px w-[20vw] text-white flex flex-col items-center justify-end bg-sq1' data-aos='fade-left'>
                    <div className='flex flex-col h-[200px] justify-center items-center '>
                        <h3 className='text-xl'>Arun & Santhiya</h3>
                        <p className='text-[12px] w-[80%] text-center'> Wedding was a gorgeous & glamorous celebration. Our hearts danced to the beat of a live saxophone that brought music to our ears.</p>
                        <button className=' mt-6 h-8 w-3/4 border text-sm rounded cursor-pointer   '>Captured Moments</button>
                    </div>
                </div>

            </div>

           

        </div>

    );
}
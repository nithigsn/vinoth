import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Concerts() {

    const navigate=useNavigate();



    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])
    
    return (

        <div className="w-full h-full flex flex-col items-center justify-center ">

            <div className="indian w-[80vw] h-full flex flex-col gap-x-1 mt-8 items-center justify-center lg:flex-row lg:gap-x-3">

                <div className='indian-inner h-[500px] w-[80vw]  text-white flex flex-col items-center justify-end oneet sm:h-[650px] sm:w-[60vw] lg:h-[700px] rounded-md ' data-aos='fade-right'>
                    <div className='flex flex-col h-[200px] justify-center items-center w-full '>
                        <h3 className='text-xl font-semibold sm:text-2xl'>180 Events</h3>
                        <p className='text-xs  font-medium lg:text-[15px] text-center '>180 Events featuring talented singers, delivering captivating performances across various venues. Their unique styles created memorable experiences for all audiences.</p>
                        <button className=' mt-6 h-8 w-3/4 border-[1px] border-white   text-xs rounded cursor-pointer  ' onClick={()=>navigate('/concerts/180events')} >Captured Moments</button>
                    </div>
                </div>

               

            </div>

           

        </div>

    );
}
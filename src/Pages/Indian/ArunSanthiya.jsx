import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function ArunSanthiya() {




    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])


    return (
        <div className="w-full h-full flex flex-col items-center justify-center ">


            <h1 className='he-wed text-6xl'>Arun Weds Santhiya</h1>


            <h3>Pre Wedding Shoots</h3>

            <div className="w-[90vw] h-full flex flex-col mt-8">


                <div className="flex  flex-col  gap-y-1">

                    <div className='flex gap-x-1'>

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859292/VIN_7670_sjvgg0.jpg" alt="" className='w-[45vw] h-[300px]' />

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859289/VIN_7619_idna8z.jpg" alt="" className='w-[45vw] h-[300px]' />

                    </div>




                    <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859294/VIN_7782_ajuke1.jpg" alt="" className='w-full h-[250px]' />


                    <div className="flex gap-x-1">

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859295/VIN_7792_pbgc9d.jpg" alt="" className='w-[29.4vw] h-[200px]' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859293/VIN_7744_rj6kef.jpg" alt="" className='w-[29.4vw] h-[200px]' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859291/VIN_7664_xtdp6r.jpg" alt="" className='w-[29.4vw] h-[200px]' />


                    </div>

                    <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859294/VIN_7769_szw1r6.jpg" alt="" className='w-full h-[250px]' />


                    <div className='flex gap-x-1'>

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859289/VIN_7654_aiotss.jpg" alt="" className='w-[45vw] h-[300px]' />

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859293/VIN_7709_c8d61i.jpg" alt="" className='w-[45vw] h-[300px]' />


                    </div>




                </div>



                <h2 className='text-center mt-10'>Wedding Shoot</h2>


                <div className='w-[90vw] h-full flex flex-col mt-8'>

                    <div className='flex flex-col gap-y-1'>

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859290/9W8A7079_twmyje.jpg" alt="" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859290/9W8A7085_thgoyq.jpg" alt="" />

                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1724859288/9W8A6903_zff19k.jpg" alt="" srcset="" />


                    </div>

                </div>


















            </div>



        </div>
    );
}
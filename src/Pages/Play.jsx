import React from 'react'

function Play() {
    return (
        <div className='w-full h-full flex justify-center'>

            <div className="flex flex-col w-[90vw] items-center lg:w-[60vw] h-full ">


                <div className='flex items-center justify-center w-full lg:h-[50vh] '>




                    <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725604992/IMG_9489_dkz9vf.jpg" alt="" srcset="" className='h-[150px] w-[80px]    lg:h-[200px] lg:w-[130px]                rounded-bl-[25px] rounded-tl-[25px]  -z-10' />
                    <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725604992/IMG_9489_dkz9vf.jpg" alt="" srcset="" className='h-full    w-[130px]   lg:h-[370px] lg:w-[230px]                rounded-[25px] z-10' />
                    <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725604992/IMG_9489_dkz9vf.jpg" alt="" srcset="" className='h-[120px] w-[70px]    lg:h-[240px] lg:w-[150px]                rounded-br-[25px] rounded-tr-[25px] -z-10' />






                </div>


                <div className=" flex flex-col gap-y-2 items-center justify-center w-[60vw] h-[400px] ">
                    <h1 className="text-3xl text-center sm:text-6xl gtext">Hi,I'm Vinoth.</h1>

                    <div className="flex items-center ">
                        <p className="text-sm"> <i className="fa-solid fa-location-dot" style={{ color: "#d4d6d8" }} ></i> Paris,France</p>
                    </div>

                    <p className="text-center text-xs w-[300px] lg:text-base lg:w-[700px]">I’m always curious about new technologies and have been spending time lately taking photos on different cameras.Other than that I'm also providing free tutorials on my Instagram,TikTok and Youtube. <br />
                        Scroll down and Checkout !</p>

                </div>

                <div className='flex flex-col gap-y-8'>
                    <iframe className=' w-full lg:h-[320px] lg:w-[900px]' src="https://www.youtube.com/embed/6TKhOG0oAgY?si=Fq7K09rBEA_3KyK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe className=' w-full lg:h-[320px] lg:w-[900px]' src="https://www.youtube.com/embed/6WxwIn3Tu1o?si=XRvEsck1ayFYarqN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                </div>









            </div>



        </div>
    )
}

export default Play

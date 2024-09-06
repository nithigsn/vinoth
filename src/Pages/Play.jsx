import React from 'react'

function Play() {
    return (
        <div className='w-full h-full flex justify-center'>

            <div className="flex flex-col w-[60vw] h-full gap-y-5">


                <div className='flex items-center justify-center w-full h-[60vh] mt-10'>



                    <div className='h-[300px] w-[260px] bg-black rounded-[25px] -z-10  '></div>

                    <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725604992/IMG_9489_dkz9vf.jpg" alt="" srcset="" className='h-full w-[305px] bg-green-300 rounded-[25px] z-10' />

                    <div className='h-[350px] w-[300px] bg-yellow-300 rounded-[25px] -z-10'></div>






                </div>


                <div className=" flex flex-col gap-y-2 items-center justify-center w-[60vw] h-[400px] ">
                    <h1 className="text-5xl text-center sm:text-6xl gtext">Hi,I'm Vinoth.</h1>

                    <div className="flex items-center ">
                        <p className="text-sm"> <i className="fa-solid fa-location-dot" style={{ color: "#d4d6d8" }} ></i> Paris,France</p>
                    </div>

                    <p className="text-center text-xs w-[300px] lg:text-base lg:w-[700px]">I’m always curious about new technologies and have been spending time lately taking photos on different cameras.Other than that I'm also providing free tutorials on my Instagram,TikTok and Youtube. <br />
                        Scroll down and Checkout !</p>

                </div>


                <iframe width="921" height="400" src="https://www.youtube.com/embed/6TKhOG0oAgY?si=Fq7K09rBEA_3KyK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <iframe width="921" height="400" src="https://www.youtube.com/embed/6WxwIn3Tu1o?si=XRvEsck1ayFYarqN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>








            </div>



        </div>
    )
}

export default Play

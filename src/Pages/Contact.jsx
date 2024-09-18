import React from 'react'

function Contact() {
    return (
        <div className='flex h-[80vh] w-full justify-center'>

            <div className="flex flex-col  items-center w-[90vw] lg:w-[60vw]">

                <div className='text-sm lg:text-base mt-5'>
                    <p className='text-center'>Feel Free to contact me.</p>
                    <p className='text-center'>Usual Response within a day !</p>
                </div>


                <iframe className=' lg:size-[400px]' title='contact-title' src="https://lottie.host/embed/90344b2a-325b-4c41-b47c-077305423582/OAlaLRFAzE.json"></iframe>



                <div className="flex flex-col justify-center mt-4 text-sm ">



                    <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'>Click to Send a Email  <i className="fa-solid fa-envelope text-2xl cursor-pointer pl-5" style={{ color: "#c7cfdb", }}></i> </a>
                    <a href="https://www.instagram.com/vinoth_jeyasabesan" target='blank' className='flex items-center gap-1'>Checkout my Instagram <i className="fa-brands fa-instagram text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i> </a>
                    <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'>Checkout my Tiktok  <i className="fa-brands fa-tiktok text-2xl cursor-pointer pl-7" style={{ color: "#c7cfdb", }}></i> </a>
                    <a href="https://www.youtube.com/@vinothjeyasbesan" className='flex items-center gap-1'>Checkout my Youtube  <i className="fa-brands fa-youtube text-2xl cursor-pointer pl-3" style={{ color: "#c7cfdb", }}></i> </a>

                </div>




            </div>




        </div>
    )
}

export default Contact

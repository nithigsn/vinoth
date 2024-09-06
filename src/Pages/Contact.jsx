import React from 'react'

function Contact() {
    return (
        <div className='flex h-[60vh] w-full justify-center'>

            <div className="flex flex-col gap-y-5 items-center w-[90vw] lg:w-[60vw]">

                <div>
                    <p className='text-center'>Feel Free to contact me.</p>
                    <p className='text-center'>Typical Response within a day</p>
                </div>


                <iframe className='mt-6' title='contact-title' src="https://lottie.host/embed/90344b2a-325b-4c41-b47c-077305423582/OAlaLRFAzE.json"></iframe>



                <div className="flex flex-col justify-center">


                    <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'>Click to Send a Email  <i className="fa-solid fa-envelope text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i> </a>
                    <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'>Checkout my Instagram <i className="fa-brands fa-instagram text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i> </a>
                    <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'>Checkout my Tiktok  <i className="fa-brands fa-tiktok text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i> </a>
                    <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'>Checkout my Youtube  <i className="fa-brands fa-youtube text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i> </a>

                </div>




            </div>




        </div>
    )
}

export default Contact

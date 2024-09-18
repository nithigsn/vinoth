

export default function Footer() {

    return (


        <div className="flex flex-col w-full h-[200px] items-center justify-evenly bgmain mt-20 relative bottom-0 ">
            <div className="inline-flex w-[300px] justify-around">

                <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'><i className="fa-solid fa-envelope text-2xl cursor-pointer pl-5" style={{ color: "#c7cfdb", }}></i> </a>
                <a href="https://www.instagram.com/vinoth_jeyasabesan" target='blank' className='flex items-center gap-1'><i className="fa-brands fa-instagram text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i> </a>
                <a href="mailto:vinothyaso17@gmail.com?subject=Hello%20There" className='flex items-center gap-1'><i className="fa-brands fa-tiktok text-2xl cursor-pointer pl-7" style={{ color: "#c7cfdb", }}></i> </a>
                <a href="https://www.youtube.com/@vinothjeyasbesan" className='flex items-center gap-1'><i className="fa-brands fa-youtube text-2xl cursor-pointer pl-3" style={{ color: "#c7cfdb", }}></i> </a>


            </div>

            <div className="flex flex-col items-center ">
                <p className="text-sm">Copyright &copy; Vinoth Jeyasabesan. All Rights Reserved</p>
                <p className="text-sm sm:text-xs">Made with <i className="fa-solid fa-heart" style={{ "color": "#ff0000" }}></i> by Nithish Kumar</p>
            </div>

        </div>


    );
}
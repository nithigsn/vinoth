

export default function Footer() {

    return (
        <div className="flex flex-col w-full h-[200px] items-center justify-evenly bgmain mt-20">

            <div className="inline-flex w-[300px] justify-around"> 

                <i className="fa-brands fa-instagram text-2xl cursor-pointer" style={{ color: "#c7cfdb", }} ></i>
                <i className="fa-brands fa-youtube text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i>
                <i className="fa-brands fa-tiktok text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i>
                <i className="fa-solid fa-envelope text-2xl cursor-pointer" style={{ color: "#c7cfdb", }}></i>


            </div>

           <div className="flex flex-col items-center ">
           <p className="text-sm">Copyright &copy; Vinoth Jeyasabesan. All Rights Reserved</p>
           <p className="text-sm sm:text-xs">Made with <i className="fa-solid fa-heart" style={{"color": "#ff0000"}}></i> by Nithish Kumar</p>
           </div>

        </div>
    );
}
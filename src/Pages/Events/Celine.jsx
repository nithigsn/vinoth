import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function Celine() {




    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])


    return (
        <div className="w-full h-full flex flex-col items-center   ">

            <div className="flex justify-center  w-full " data-aos='zoom-in'>
                <img src="https://res.cloudinary.com/doqdlneyl/image/upload/c_crop,w_1920,h_500,g_auto/v1725950890/VIN_1217_jcwbrz.jpg" alt="" className='rounded-lg ' />
            </div>

            <div className="w-[90vw] h-full flex flex-col mt-8 items-center  lg:w-[66vw] justify-center exl:w-[53vw]">


                <div className="flex  flex-col  gap-y-1 exl:items-center ">

                    <div className="flex gap-1 flex-col lg:flex-row">
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950864/VIN_0941_x4bnz1.jpg" alt="" className='w-full h-[250px] sm:h-[370px] md:h-[450px] lg:w-[504px] lg:h-[350px]' data-aos="fade-right" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950865/VIN_0949_oeoohg.jpg" alt="" className='w-full h-[250px] sm:h-[370px] md:h-[450px] lg:h-[350px] lg:w-[504px]' data-aos="fade-left" />
                    </div>

                    <div className='flex gap-[3px] flex-wrap  justify-center   '>
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950870/VIN_1123_j9y4lo.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[343px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950881/VIN_1183_y96txv.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[343px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950868/VIN_1113_clbr7w.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[343px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950873/VIN_1136_vewk4g.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[343px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                    </div>

                    <div className="flex gap-[2px] flex-wrap lw:flex-nowrap ">
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950880/VIN_1178_llztlq.jpg" alt="" className='lw:w-[29.4vw] ;W:h-[200px] sm:h-[285px] sm:w-[271px] md:h-[330px] lg:h-[500px] lg:w-[337px] exl:w-[335px]' data-aos='zoom-in' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950878/VIN_1175_pb6m2c.jpg" alt="" className='lw:w-[29.4vw] ;W:h-[200px] sm:h-[285px] sm:w-[271px] md:h-[330px] lg:h-[500px] lg:w-[337px] exl:w-[335px]' data-aos='zoom-in' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950876/VIN_1154_i41iaj.jpg" alt="" className='lw:w-[29.4vw] ;W:h-[200px] sm:h-[285px] sm:w-[271px] md:h-[330px] lg:h-[500px] lg:w-[337px] exl:w-[335px]' data-aos='zoom-in' />
                    </div>

                    <div className='flex flex-col gap-1 lg:flex-row'>
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950879/VIN_1177_ub7yhv.jpg" alt="" className='lg:w-[504px]' data-aos='fade-right' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950877/VIN_1163_nzoy1p.jpg" alt="" className='lg:w-[504px]' data-aos='fade-left' />
                    </div>

                    <div className='flex gap-[3px] flex-wrap  justify-center'>
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950886/VIN_1205_hpmezy.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[343px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950887/VIN_1210_qodwhw.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[343px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950889/VIN_1211_fpsroa.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[340px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950889/VIN_1216_bcxehi.jpg" alt="" className='w-[166.5px] lw:w-[188.5px] lw:h-[300px] md:w-[340px] md:h-[510px] lg:w-[250px] lg:h-[400px] ' data-aos="zoom-in" />
                    </div>

                    <div className="flex gap-1 flex-wrap lw:flex-nowrap ">
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950864/VIN_0943_s3xcry.jpg" alt="" className=' lw:w-[29.4vw] lw:h-[200px] sm:h-[285px] sm:w-[271px] md:h-[330px] lg:h-[500px] lg:w-[337px] exl:w-[334px]' data-aos='zoom-in' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950870/VIN_1118_vw4qy7.jpg" alt="" className=' lw:w-[29.4vw] lw:h-[200px] sm:h-[285px] sm:w-[271px] md:h-[330px] lg:h-[500px] lg:w-[337px] exl:w-[334px]' data-aos='zoom-in' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950892/VIN_1283_xliu8r.jpg" alt="" className=' lw:w-[29.4vw] lw:h-[200px] sm:h-[285px] sm:w-[271px] md:h-[330px] lg:h-[500px] lg:w-[337px] exl:w-[334px]' data-aos='zoom-in' />
                    </div>

                    <div className='flex flex-col gap-1 lg:flex-row flex-wrap'>
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950881/VIN_1180_eqki2l.jpg" alt="" className='lg:w-[504px]' data-aos='fade-right' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950875/VIN_1144_bsb85n.jpg" alt="" className='lg:w-[504px]' data-aos='fade-left' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950886/VIN_1201_qgfdwg.jpg" alt="" className='lg:w-[504px]' data-aos='fade-right' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950891/VIN_1255_qrf75v.jpg" alt="" className='lg:w-[504px]' data-aos='fade-left' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950894/VIN_1289_uijyts.jpg" alt="" className='lg:w-[504px]' data-aos='fade-right' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950897/VIN_1341_khylmd.jpg" alt="" className='lg:w-[504px]' data-aos='fade-left' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950898/VIN_1432_j343ad.jpg" alt="" className='lg:w-[504px]' data-aos='fade-right' />
                        <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1725950894/VIN_1314_feody0.jpg" alt="" className='lg:w-[504px]' data-aos='fade-left' />
                    </div>



                </div>












            </div>
        </div>
    );
}
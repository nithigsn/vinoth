import React, { useEffect, useState } from 'react'

function PreLoading() {

    const [msg, setMsg] = useState('');


    useEffect(() => {
        setTimeout(() => {
            setMsg("Say Cheese :)");


        }, 1500);

    }, [])


    return (
        <div className='w-full h-screen absolute top-0 left-0 bg-white justify-center  flex flex-col  items-center z-[99]'>

            <div className='h-[300px]'>

                <iframe title='camera' className='size-[300px] ' src="https://lottie.host/embed/7b4e43dd-2588-4f9b-84d2-71b42e2a1cb6/5iIVig4ksF.json"></iframe>

            </div>

           <div className="flex h-[100px]">
           <h2 className='text-[50px] gtext '>{msg}</h2>
           </div>

        </div>
    )
}

export default PreLoading

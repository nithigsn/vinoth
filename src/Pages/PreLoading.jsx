import React, { useEffect, useState } from 'react'

function PreLoading() {

    const [msg, setMsg] = useState('');
    

    useEffect(() => {
        setTimeout(() => {
            setMsg("Say Cheese");
           

        }, 1500);

    }, [])


    return (
        <div className='w-full h-screen absolute bg-white  flex flex-col  items-center z9999'>

           <div className='h-[300px]'>
            
           <iframe title='camera' className='size-[300px] ' src="https://lottie.host/embed/7b4e43dd-2588-4f9b-84d2-71b42e2a1cb6/5iIVig4ksF.json"></iframe>

           </div>


            <h2 className='text-[50px] gtext '>{msg}</h2>








        </div>
    )
}

export default PreLoading

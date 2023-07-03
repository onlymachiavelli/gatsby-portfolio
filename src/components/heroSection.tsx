import * as React from 'react'
import bck from './../images/bck.jpg'
const HeroSection = () =>{
   
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover bg-center' style={{
            backgroundImage : `url('${bck}')` , 
        }}>
            <div className='w-full h-full bg-[#0000005d]  bg-opacity-50 backdrop-filter backdrop-blur-3xl'></div>
        </div>
    )

}


export default HeroSection 
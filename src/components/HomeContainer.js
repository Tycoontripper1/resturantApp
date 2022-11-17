import React from 'react'
import delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'
import  { heroData } from '../utils/Data'

export const HomeContainer = () => {
  return (
    
    <section className='grid grid-cols-1 md:grid-cols-2 w-full gap-2'id='home'>
      <div className='py-2 flex-1 flex flex-col gap-6 items-start '>
        <div className='flex items-center gap-2 justify-center bg-orange-100 rounded-full px-4 py-1'>
          <p className='text-base font-semibold text-orange-500'>Bike Delivery</p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={delivery} className="w-full h-full object-contain" alt='delivery'/>
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          The fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>your city</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate illo dolorem porro deleniti reprehenderit. Impedit aliquam totam excepturi minima molestias distinctio laborum corrupti eos fugiat ex nemo, ab aut esse nam voluptatibus quis? Labore animi cum, voluptas 
        </p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
      </div>


      <div className='py-2 flex-1 flex items-center relative '>
          <img
              src={HeroBg}
              className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
              alt="hero-bg"
            />

          <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
              {heroData.map(n=>(
                 
                  <div key={n.id} className='lg-w-190 p-4 bg-cardOverlay flex-col backdrop-blur-md rounded-3xl flex items-center justify-center'>
                  <img src={n.imageSrc} className='w-20 lg:-mt-20 lg:w-40 ' alt="1i" />
                   
                  <p className='text-base font-semibold text-textColor mt-4'>{n.name}</p>

                  <p className='  text-lighttextGray text-[12px] lg:text-base font-semibold lg:my-3'>{n.decp} </p>

                  <p className='text-sm font-semibold text-headingColor '><span className='text-xs text-red-600'>$</span> {n.price}</p>
                </div>
                )
       
              ) }
          </div>
      </div>
    </section>
  
  )
}

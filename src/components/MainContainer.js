 import React,{useState,useEffect} from 'react'
 import { UseGlobalContext } from '../context/stateProvider';
 import { RowContainer } from './RowContainer';
 import { motion } from 'framer-motion'
 import { HomeContainer } from './HomeContainer'
 import { MdChevronLeft, MdChevronRight } from "react-icons/md";
 import { MenuContainer } from './MenuContainer';
 import { CartContainer } from './CartContainer';


export const MainContainer = () => {
  const [{foodItems, cartShow}, dispatch] = UseGlobalContext()
  const [scrollValue, setScrollValue] = useState(0)

 useEffect(()=>{

 },[cartShow])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
       <HomeContainer />

        <section className='w-full my-6'>
          <div className="w-full flex items-center justify-between">
               <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                Our fresh & healthy fruits
              </p>

              <div className="hidden md:flex gap-3 items-center">
                    <motion.div onClick={()=> setScrollValue(-200)} whileTap={{scale: 0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out hover:shadow-lg flex items-center justify-center">
                        <MdChevronLeft  className='text-lg text-white' />
                    </motion.div>
                    <motion.div onClick={()=> setScrollValue(200)} whileTap={{scale: 0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out hover:shadow-lg flex items-center justify-center">
                        <MdChevronRight className='text-lg text-white' />
                    </motion.div>
              </div>
          </div>

          <RowContainer scrollValue ={scrollValue} flag={true} data= {foodItems ?.filter((n) => n.category === 'fruits' )} />
       </section>

       <MenuContainer />

       {cartShow && (<CartContainer />)}
    </div>
  )
}

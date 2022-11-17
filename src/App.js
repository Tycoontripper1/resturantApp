import React from 'react'
import { useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import { getAllFoodItems } from './utils/firebaseFunction'
import { Header } from './components/Header'
import { MainContainer } from './components/MainContainer'
import { CreateContainer } from './components/CreateContainer'
import { AnimatePresence } from 'framer-motion'
import { UseGlobalContext } from './context/stateProvider'
import { actionType } from './context/reducer'



const App = () => {

  const [{}, dispatch] = UseGlobalContext()

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    
    });
  };

  useEffect(() => {
      fetchData()
  }, [])

  return (
  <AnimatePresence mode='wait'>
    <div className=" w-screen h-auto flex flex-col bg-primary ">
      <Header />

      <main className='mt-14 md:mt-20 p-8 md:px-16 px-4 py-4 w-full'>
          <Routes>
             <Route path="/" element={<MainContainer />} />
             <Route path='/createItem' element={<CreateContainer />}  />
          </Routes>
      </main>
    </div>
  </AnimatePresence>
  )
}

export default App

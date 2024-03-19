import React from 'react'
import Menu from '../../Components/menu/Menu'
import Start from './start/Start'
import Writte from '../../Components/writte/Writte'
import Banner from '../../Components/banner/Banner'
import Our from '../../Components/our/Our'
import Got from '../../Components/got/Got'
import Footer from '../../Components/footer/Footer'

const Main = () => {
  return (
   <>
    <Menu/>
    <Banner/>
    <Start/>
    <Our/>
    <Writte/>
    <Got/>
    <Footer/>
   </>
    
  )
}

export default Main
import React from 'react'
import HeaderTop from './HeaderTop'
import ImageCard from './ImageCard'
import AccordionBox from './AccordionBox'
import SearchWithIcons from './SearchWithIcons'
import Footer from './Footer'
import TopImageSlider from './TopImageSlider';



const TopPage = () => (
  <div>
    <HeaderTop />
    <TopImageSlider />
    <AccordionBox /> 
    <SearchWithIcons />
    <Footer />
  </div>
)

export default TopPage
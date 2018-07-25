import React from 'react'
import HeaderTop from './HeaderTop'
import AccordionBox from './AccordionBox'
// import SearchWithIcons from './SearchWithIcons'
import Footer from './Footer'
import TopImageSlider from './TopImageSlider'
import SearchFullImageCard from './SearchFullImageCard';

// const TopPage = () => (
//   <div>
//     <HeaderTop />
//     <TopImageSlider />
//     <AccordionBox /> 
//     <SearchFullImageCard />
//     <Footer />
//   </div>
// )

class TopPage extends React.Component {
  render() {
    return(
      <div>
        <HeaderTop />
        <TopImageSlider />
        <AccordionBox />
        <SearchFullImageCard />
        <Footer />
      </div>
    )
  }
}

export default TopPage
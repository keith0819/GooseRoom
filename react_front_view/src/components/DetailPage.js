import React from 'react'
import ImageSlider from './ImageSlider'
import HeaderDetail from './HeaderDetail'
import Footer from './Footer'
import StickyFooter from './StickyFooter'
import DetailIconOptions from './DetailIconOptions'
import DetailTextOptions from './DetailTextOptions'
import DetailTextArea from './DetailTextArea'
import MapDetailArea from './MapDetailArea'
import "../styles/common.scss"

const DetailPage = () => (
  <div>
  <HeaderDetail />
    <ImageSlider />
    <DetailIconOptions />
    <DetailTextOptions />
    <DetailTextArea title="House Rules" />
    <DetailTextArea title="Comments" />
    <MapDetailArea />
    <Footer />
    <StickyFooter />
  </div>  
)

export default DetailPage
import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

class ImageSlider extends React.Component {
 
  render() {
    
    const images = [
      {
        original: require('../images/one.jpg'),
        thumbnail: require('../images/one.jpg')
      },
      {
        original: require('../images/one.jpg'),
        thumbnail: require('../images/one.jpg')
      },
      {
        original: require('../images/one.jpg'),
        thumbnail: require('../images/one.jpg')
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default ImageSlider
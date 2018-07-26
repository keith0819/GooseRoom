import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

class ImageSlider extends React.Component {
 
  render() {
    
    const images = [
      {
        original: require('../images/room1.jpg'),
        thumbnail: require('../images/room1.jpg')
      },
      {
        original: require('../images/room2.jpg'),
        thumbnail: require('../images/room2.jpg')
      },
      {
        original: require('../images/room3.jpg'),
        thumbnail: require('../images/room3.jpg')
      },
      {
        original: require('../images/room4.jpg'),
        thumbnail: require('../images/room4.jpg')
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default ImageSlider
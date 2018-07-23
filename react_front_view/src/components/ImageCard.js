import React from 'react'
import '../styles/common.scss'

class ImageCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: "",
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(item) {
    var city = item.city 
    this.setState({ location: city})
    console.log(this.state)
  }

  render () {
    var items = [
      {
        city: "Vancouver",
        image: require('../images/one.jpg')
      },
      {
        city: "Burnaby",
        image: require('../images/one.jpg')
      },
      {
        city: "Richmond",
        image: require('../images/one.jpg')
      }
    ]

    let list = items.map((item) => (
        <li className="image-card-wrapper" onClick={() => this.handleClick(item)} key={items.indexOf(item)}>
          <img src={item.image} className="image-card" />
          <p className="box-text">{item.city}</p>
        </li>
    )) 

    return (
      <ul className="container">
        {list} 
      </ul>    
    )
  }
}

export default ImageCard  
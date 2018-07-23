import React from 'react'
import '../styles/common.scss'

class AccordionIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: false,
      category: ""
    }

    this.handleClick = this.handleClick.bind(this)
    this.iconClick = this.iconClick.bind(this)
  }
  
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })  
  }

  iconClick(listIcon) {
    console.log(listIcon.category.slice(1))
    let icon = listIcon.category.slice(1)
    this.setState({ category: icon })
    console.log(this.state)
  }

  render () {
    let listIcons = [
      {
        image: require('../images/wifi.png'),
        category: ":Wifi"
      },
      {
        image: require('../images/dog.png'),
        category: ":Pets friendly"
      },
      {
        image: require('../images/furniture.png'),
        category: ":furnished"
      },
      {
        image: require('../images/data.png'),
        category: ":Wealth of data"
      },
      {
        image: require('../images/laundry.png'),
        category: ":laundry"
      },
      {
        image: require('../images/parking.png'),
        category: ":Parking"
      },
      {
        image: require('../images/bed.png'),
        category: ":Bed"
      }
    ]

    let list = listIcons.map((listIcon) => (
      <li onClick={() => this.iconClick(listIcon)}
       key={listIcons.indexOf(listIcon)}>
        <img src={listIcon.image} className="image-icon" />
        {listIcon.category}
      </li>
    ))

    return (
      <div className="accordion-wrapper">
        <AccordionIconChild 
        className={ this.state.condition ? "button toggled" : "button" }
        toggleClassName={ this.handleClick }
        >
          Search with Icons
        </AccordionIconChild>
        <div className="hide">
          <ul className="list-icons">
            {list}
          </ul>
        </div>
      </div>
    )
  }
}

class AccordionIconChild extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        {this.props.children}
      </div>
    )
  }
}

export default AccordionIcon


import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/common.scss'

class FullImageCardList extends React.Component {
  render () {
    return (
      <ul className="full-image-list">
        {this.props.postData.map((data) => {
            return(
                <FullImageCard data={ data } key={ data.id } />
            )
        })}
      </ul>
    )
  }
}

class FullImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "",
    }
  }

  render () {
    var items = ["All", "Homestay", "Rent"]

    let listIcons = [
      {
        image: require('../images/wifi.png')
      },
      {
        image: require('../images/dog.png')
      },
      {
        image: require('../images/furniture.png')
      },
      {
        image: require('../images/data.png')
      },
      {
        image: require('../images/laundry.png')
      },
      {
        image: require('../images/parking.png')
      },
      {
        image: require('../images/bed.png')
      }
    ]

    let iconList = listIcons.map((listIcon) => (
      <li onClick={() => this.iconClick(listIcon)}
       key={listIcons.indexOf(listIcon)}>
        <img src={listIcon.image} className="image-icon" />
      </li>
    ))

    return (
      <li className="list-item">
        <Link to={'/detail/' + this.props.data.id} exact={true}>
          <div className="image-wrapper">
            <img src={require('../images/one.jpg')} />
          </div>
          <div className="information-box">
            <div className="left">
              <p className="location">{this.props.data.cityAddress}</p>
              <p className="type">{this.props.data.offerType}</p>
              <p className="fee">${this.props.data.monthlyFee}</p>
            </div>
            <div className="right">
              <ul className="icons-list">
                {iconList}
              </ul>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default FullImageCardList
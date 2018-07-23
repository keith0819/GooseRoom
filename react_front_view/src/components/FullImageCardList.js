import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../styles/common.scss'

class FullImageCardList extends React.Component {
  render () {
    return (
      <ul className="full-image-list">
        <FullImageCard />
        <FullImageCard />
        <FullImageCard />
      </ul>
    )
  }
}

class FullImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "",
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')
    .then((response) => {
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch((data) => {
        console.log(data)
    })
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
        <Link to="/detail" exact={true}>
          <div className="image-wrapper">
            <img src={require('../images/one.jpg')} />
          </div>
          <div className="information-box">
            <div className="left">
              <p className="location">Vancouver</p>
              <p className="type">Homestay</p>
              <p className="fee">$1,300</p>
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
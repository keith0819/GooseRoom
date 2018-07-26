import React from 'react'
import '../styles/common.scss'

const DetailIconOptions = () => {
  
  let listIcons = [
    {
      image: require('../images/hydro.png'),
      option: "Hydro:",
      detail: "Hydro"
    },
    {
      image: require('../images/no-smorking.png'),
      option: "Smoking:",
      detail: "No Drug No Smoking"
    },
    {
      image: require('../images/wifi.png'),
      option: "Wifi:",
      detail: "$20 "
    },
    {
      image: require('../images/bed.png'),
      option: "Bed:",
      detail: "2"
    },
    {
      image: require('../images/dog.png'),
      option: "Pets:",
      detail: "Cats"
    },
    {
      image: require('../images/parking.png'),
      option: "Parking:",
      detail: "Street parking"
    },
    {
      image: require('../images/laundry.png'),
      option: "Laundry:",
      detail: "share each $2"
    },
    {
      image: require('../images/floor.png'),
      option: "Floor:",
      detail: "Basement"
    }
  ]

  let list = listIcons.map((listIcon) => (
    <li key={listIcons.indexOf(listIcon)}>
      <dl>
        <dt><img src={listIcon.image} /></dt>
        <dd><p>{listIcon.option}</p>{listIcon.detail}</dd>
      </dl>
    </li>
  ))
  
  
  return (
    <div>
      <ul className="detail-icon-options">
        {list}
      </ul>
    </div>
  )
}

export default DetailIconOptions
import React from 'react'
import '../styles/common.scss'
class SelectBox extends React.Component {
  render() {
    return(
      <select 
        className="select-box"
        defaultValue="14to16"
      >
        <option value="9to12">9:00-12:00</option>
        <option value="12to14">12:00-14:00</option>
        <option value="14to16">14:00-16:00</option>
        <option value="16to18">16:00-18:00</option>
      </select>
    ); 
  }
}

export default SelectBox
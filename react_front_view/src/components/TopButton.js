import React from 'react'
import '../styles/common.scss'

class TopButton extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick() {
    scrollTo(0, 0)
  }
  render() {
    return (
      <a className="arrow" onClick={this.handleClick}></a>
    )
  }

}

export default TopButton
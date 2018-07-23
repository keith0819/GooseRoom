import React from 'react'
import '../styles/common.scss'

class TextButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(category) {
    this.setState({ type: category })
    console.log(this.state)
  }

  render() {
    var categories = [ "All", "Rent", "Homestay" ]

    let button = categories.map((category) => (
      <button onClick={() => this.handleClick(category)} className="text-btn" key={categories.indexOf(category)}>
        {category}
      </button>
    ))

    return (
      <div className="button-wrapper">
        {button}
      </div>
    )
  }
}

export default TextButton
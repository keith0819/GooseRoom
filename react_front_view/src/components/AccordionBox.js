import React from 'react'
import MymapComponent from './MyMapComponent'
import '../styles/common.scss'

class AccordionBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {condition: false}

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })  
  }

  render () {
    return (
      <div className="accordion-wrapper map">
        <AccordionBoxChild 
        className={ this.state.condition ? "button toggled" : "button" }
        toggleClassName={ this.handleClick }
        >
          Search on Map
        </AccordionBoxChild>
        <div className="hide">
          <MymapComponent isMarkerShown />
        </div>
      </div>
    )
  }
}

class AccordionBoxChild extends React.Component {
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

export default AccordionBox


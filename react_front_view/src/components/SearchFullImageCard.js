import React from 'react'
import axios from 'axios';
import AccordionIcon from './AccordionIcon'
import '../styles/common.scss'
import TextButton from './TextButton'
import FullImageCardList from './FullImageCardList';
class SearchFullImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type : "",
      posts: []
    }
    this.getType = this.getType.bind(this)
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

  getType(){
    this.setState({
      type : this.refs.TextButtonComponent.getType()
    });
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <AccordionIcon />
        <div onClick={this.getType}>
          <TextButton ref='TextButtonComponent' />
        </div>
        <FullImageCardList postData={ this.state.posts } />
      </div>
    )
  }
}

export default　SearchFullImageCard
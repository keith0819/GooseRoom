import React from 'react'
import '../styles/common.scss'
import FullImageCardList from './FullImageCardList'
import SearchFullImageCard from './SearchFullImageCard'

class SearchWithIcons extends React.Component {
  render() {
    return (
      <div>
        <SearchFullImageCard />
        <FullImageCardList />
      </div>
    )
  }
}

export default SearchWithIcons
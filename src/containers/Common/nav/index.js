import React from 'react'

import NavComponent from '@/components/Common/nav'

export default class NavContainer extends React.Component {
  state = {
    textForSearch: ''
  }

  handleChange = e => {
    const state = { ...this.state }
    if (e.target.name) {
      state[e.target.name] = e.target.value
    }

    this.setState(state)
  }

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.search()
    }
  }

  search = () => {
    const textForSearch = this.state.textForSearch

    console.log(textForSearch)
  }

  render() {
    const {
      textForSearch
    } = this.state
    return (
      <NavComponent
        textForSearch={textForSearch}
        handleChange={this.handleChange}
        handleKeyPress={this.handleKeyPress}
        search={this.search}
      />
    )
  }
}
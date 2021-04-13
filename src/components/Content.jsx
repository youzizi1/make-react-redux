import React, { Component } from 'react'
import Tab from './Tab'
import { connect } from "../high";


class Content extends Component {

  render () {
    return (
      <div>
        <p style={{color: this.props.themeColor}}>内容</p>
        <Tab />
      </div>
    )
  }
}

export default connect(state => ({
  themeColor: state.theme
}))(Content)
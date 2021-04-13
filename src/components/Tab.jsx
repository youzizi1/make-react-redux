import React, { Component } from "react";
import { connect } from '../high'

class Tab extends Component {

  handleSwitchColor(color) {
    const {handleSwitchColor} = this.props
    if (typeof handleSwitchColor === 'function') {
      handleSwitchColor(color)
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleSwitchColor.bind(this, "red")}
          style={{ color: this.props.themeColor }}
        >
          Red
        </button>
        <button
          onClick={this.handleSwitchColor.bind(this, "blue")}
          style={{ color: this.props.themeColor }}
        >
          Blue
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  themeColor: state.theme
})

const mapDispatchToProps = dispatch => ({
  handleSwitchColor: color => {
    dispatch({type: 'CHANGE_COLOR', value: color})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

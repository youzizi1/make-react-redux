import React, { Component } from "react";
import { connect } from "../high";

class Header extends Component {

  render() {
    console.log(this.props)
    return <h1 style={{ color: this.props.themeColor }}>标题</h1>;
  }
}

const mapStateToProps = (state) => ({
  themeColor: state.theme,
});

export default connect(mapStateToProps, {})(Header);

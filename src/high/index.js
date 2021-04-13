import React, { Component } from "react";
import { themeContext } from "../context";

export const connect = (mapStateToProps, mapDispatchToProps) => (
  InnerComponent
) => {
  class Connect extends Component {
    static contextType = themeContext;

    constructor(props) {
      super(props);
      this.state = {
        allProps: {},
      };
    }

    componentWillMount() {
      const store = this.context;
      this._updateProps();
      store.subscribe(() => this._updateProps());
    }

    _updateProps() {
      console.log("更新...");
      const store = this.context;
      const stateProps =
        typeof mapStateToProps === "function"
          ? mapStateToProps(store.getState())
          : {};
      const dispatchProps =
        typeof mapDispatchToProps === "function"
          ? mapDispatchToProps(store.dispatch)
          : {};
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
        },
      });
    }

    render() {
      return <InnerComponent {...this.state.allProps} />;
    }
  }

  return Connect;
};

export class Provider extends Component {
  render() {
    return (
      <themeContext.Provider value={this.props.store}>
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

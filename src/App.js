import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import store from './redux'
import { Provider } from './high'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <Content />
        </Provider>
      </div>
    );
  }
}

export default App;

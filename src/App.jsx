import React from 'react';
import Routes from "@/router"
import {GlobalStyle} from "@/components/main/index/section/styled"
class App extends React.Component {
  render() {
    return (
      <div id="wrap">
        <GlobalStyle />
       <Routes/>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class RootComponent extends Component {
  render() {
    return <div>Hello, World</div>
  }
}

ReactDOM.render(<RootComponent />, document.querySelector('#app'))

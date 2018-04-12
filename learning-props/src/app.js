'use strict'

import React, {Component} from 'react'
import Square from './Square'

class App extends Component {
  render () {
    return <div className='container'>
      {['green', 'gray', 'yellow', 'orange'].map((squareColor) => (
        <Square key={squareColor} color={squareColor} />
      ))}
    </div>
  }
}

export default App

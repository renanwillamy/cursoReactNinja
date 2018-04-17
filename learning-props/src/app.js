'use strict'

import React, {Component} from 'react'
import Square from './Square'
import Button from './button'
import LikeButton from './likeButton'

class App extends Component {
  render () {
    return <div className='container'>
        <LikeButton />
    </div>
  }
}

export default App

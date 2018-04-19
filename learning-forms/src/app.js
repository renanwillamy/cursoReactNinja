'use strict'

import React, {Component} from 'react'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      text: 'My default value',
      checked: false
    }
  }

  render () {
    return <div className='container'>
      <form>
        <input type='text' value={this.state.text} onChange={(e) => {
          this.setState({
            text: e.target.value
          })
        }} />
        <label>
          <input type='checkbox' checked={this.state.checked}
            onChange={(e) => {
              this.setState(
                {
                  checked: e.target.checked
                }
              )
            }
            } />
            Checkbox
        </label>
        <br />
        <label>
          <input type='radio' name='radio' />
          Radio Button
        </label>
        <label>
          <input type='radio' name='radio' />
          Radio Button 2
        </label>
      </form>
    </div>
  }
}

export default App

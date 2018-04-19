'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        username: 'user name',
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'RepoName',
        link: '#'
      }],
      starred: [{
        name: 'StarredName',
        link: '#'
      }]
    }
  }
  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App

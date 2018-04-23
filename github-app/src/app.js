'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target
    if (keyCode === ENTER) {
      target.disabled = true
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        }).always(() => {
          target.disabled = false
        })
    }
  }
  getRepos (type) {
    const login = this.state.userInfo.login
    ajax().get(`https://api.github.com/users/${login}/${type}`)
      .then((result) => {
        this.setState(
          {[type]: result}
        )
      })
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        handleStarredClick={() => this.getRepos('starred')}
        handleReposClick={() => this.getRepos('repos')}
      />
    )
  }
}

export default App

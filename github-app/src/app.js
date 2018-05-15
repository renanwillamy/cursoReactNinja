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
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({isFetching: true})
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
          this.setState({isFetching: false})
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
        {...this.state}
        handleSearch={this.handleSearch}
        handleStarredClick={() => this.getRepos('starred')}
        handleReposClick={() => this.getRepos('repos')}
      />
    )
  }
}

export default App

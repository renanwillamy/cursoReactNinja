'use strict'

import React, {PropTypes} from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Image from '../images/github.png'

const AppContent = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  handleStarredClick,
  handleReposClick,
  isFetching }) => {
  return <div className='app'>
    <div className='header'>
      <img className='logo-image' src={Image} />
      <h1>Search on Github</h1>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
    </div>
    <section className='body-content'>
      {isFetching && <div>Carregando...</div>}
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions
        handleStarredClick={handleStarredClick}
        handleReposClick={handleReposClick} />}
      <div className='repos-box'>
        {!!repos.length &&
        <div className='box-1'>
          <Repos className='repos'
            title='Repositórios'
            repos={repos} />
        </div>}
        {!!starred.length &&
        <div className='box-2'>
          <Repos className='starred'
            title='Favoritos'
            repos={starred} />
        </div>}
      </div>
    </section>
  </div>
}

AppContent.propTypes = {
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleReposClick: PropTypes.func.isRequired,
  handleStarredClick: PropTypes.func.isRequired
}

export default AppContent

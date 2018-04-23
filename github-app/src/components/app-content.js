'use strict'

import React, {PropTypes} from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'

const AppContent = ({ userInfo, repos, starred, handleSearch, handleStarredClick, handleReposClick }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions
      handleStarredClick={handleStarredClick}
      handleReposClick={handleReposClick} />}
    {!!repos.length &&
    <Repos className='repos'
      title='Repositórios'
      repos={repos} />}
    {!!starred.length &&
    <Repos className='starred'
      title='Favoritos'
      repos={starred} />}
  </div>
)

AppContent.propTypes = {
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent

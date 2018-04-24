'use strict'

import React, {PropTypes} from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'

const AppContent = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  handleStarredClick,
  handleReposClick,
  isFetching }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
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
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleReposClick: PropTypes.func.isRequired,
  handleStarredClick: PropTypes.func.isRequired
}

export default AppContent

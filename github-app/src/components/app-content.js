'use strict'

import React from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'

const AppContent = ({ userInfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userInfo && <UserInfo />}
    {!!userInfo && <Actions />}
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

export default AppContent

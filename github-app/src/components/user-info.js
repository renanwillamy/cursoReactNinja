'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/487669?v=4' />
    <h1 className='user-name'>
      <a href='https://api.github.com/users/fdaciuk'>
      Fernando Daciuk
      </a>
    </h1>
    <ul className='repos-info'>
      <li>- Repositórios: 122</li>
      <li>- Seguidores: 10</li>
      <li>- Seguindo: 10</li>
    </ul>
  </div>
)
export default UserInfo

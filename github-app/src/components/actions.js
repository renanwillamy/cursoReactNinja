'use strict'

import React from 'react'

const Actions = ({ handleStarredClick, handleReposClick }) => (
  <div className='actions'>
    <button onClick={handleReposClick} >Ver repositórios</button>
    <button onClick={handleStarredClick}>Ver favoritos</button>
  </div>
)
export default Actions

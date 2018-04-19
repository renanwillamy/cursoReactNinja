'use strict'

import React from 'react'
import Button from './button'

const LikeButton = ({children, handleClick}) => (
  <Button handleClick={() => alert('Like')}>Like</Button>
)
export default LikeButton

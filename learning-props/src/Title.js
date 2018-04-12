'use strict'

import React from 'react'

const Title = ({name, lastName}) => (
  <h1>{`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
         name: "Unknown",
         lastName: "No last name"
}

export default Title

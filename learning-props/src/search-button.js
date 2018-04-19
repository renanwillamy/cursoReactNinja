'use strict'

import React from 'react'
import Button from './button'

const SearchButton = ({children, handleClick}) =>
(<Button handleClick={() => alert("Seaching")}> Test </Button>)

export default SearchButton

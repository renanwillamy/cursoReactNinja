'use strict'

import React from 'react'

const Title = ({name, lastName}) => (
  <h1>{`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
         name: "Unknown",
         lastName: "No last name"
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: "Unknown",
//       lastName: "No last name"
//     }
//   },
//   render: function () {
//     return <h1>Olá {this.props.name}  {this.props.lastName}!</h1>
//   }
// })

export default Title

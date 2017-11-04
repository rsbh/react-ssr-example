import React from 'react'
import {Link} from 'react-router-dom'

class Example extends React.Component {
  render () {
    return (
      <div>
        <h1>Example Using react-ssr Boilerplate</h1>
        <Link to='/example/episodes'>List of Rick and Morty Episodes</Link>

      </div>
    )
  }
}

export default Example

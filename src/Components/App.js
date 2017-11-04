import React from 'react'
import {Link} from 'react-router-dom'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>React SSR</h1>
        <Link to='/example'>react-ssr example</Link>
      </div>
    )
  }
}

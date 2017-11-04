import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/style.scss'
export default class App extends React.Component {
  render () {
    return (
      <div>
        <div className='banner'>
          <span className='heading'>react ssr</span>
          <a href='https://github.com/rishabh09/react-ssr'>
            <span className='corner-ribbon'>Fork me on Github</span>
          </a>
          <Link className='heading-button' to='/example'>Example</Link>
        </div>
      </div>
    )
  }
}

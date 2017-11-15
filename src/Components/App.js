import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import '../styles/style.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>React SSR</title>
          <meta name='description' content='React Server Side Boilerplate with react-router v4 and React v16' />
        </Helmet>
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

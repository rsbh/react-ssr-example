import React from 'react'
import {Route} from 'react-router-dom'
import App from '../Components/App'
import Example from '../Components/Example/Example'
import Episodes from '../Components/Example/Episodes/Episodes'

export default () => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/example' component={Example} />
      <Route path='/example/episodes' component={Episodes} />
    </div>
  )
}

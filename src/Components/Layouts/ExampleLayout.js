import React from 'react'
import PropTypes from 'prop-types'

import Header from '../LayoutComponents/Header'
import Footer from '../LayoutComponents/Footer'
import {renderRoutes} from 'react-router-config'

const ExampleLayout = ({route}) => {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        {renderRoutes(route.routes)}
      </div>
      <Footer />
    </div>
  )
}

ExampleLayout.propTypes = {
  route: PropTypes.object
}

export default ExampleLayout

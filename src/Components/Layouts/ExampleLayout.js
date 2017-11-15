import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import Header from '../LayoutComponents/Header'
import Footer from '../LayoutComponents/Footer'
import {renderRoutes} from 'react-router-config'

const ExampleLayout = ({route}) => {
  return (
    <div>
      <Helmet>
        <title>React SSR Example</title>
        <meta name='description' content='Example using React Server Side Boilerplate with react-router v4 and React v16' />
      </Helmet>
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

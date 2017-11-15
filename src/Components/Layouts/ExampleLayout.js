import React from 'react'
import Header from '../LayoutComponents/Header'
import Footer from '../LayoutComponents/Footer'
import {renderRoutes} from 'react-router-config'

export default ({route}) => {
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

import React from 'react'
import { renderToString } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Routes from '../../src/Routes/router-config'
import template from '../views/template'
import {renderRoutes} from 'react-router-config'

function requesthandler (req, res) {
  let body = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {renderRoutes(Routes) }
    </StaticRouter>)
  const helmet = Helmet.renderStatic()
  res.send(template({body, helmet}))
}

module.exports = requesthandler

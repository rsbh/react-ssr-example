import React from 'react'
import { renderToString } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import Routes from '../../src/Routes/router-config'
import template from '../views/template'
import {renderRoutes} from 'react-router-config'

function requesthandler (req, res) {
  let body = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {renderRoutes(Routes) }
    </StaticRouter>)
  res.send(template({body}))
}

module.exports = requesthandler

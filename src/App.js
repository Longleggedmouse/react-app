import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from 'router'

import ZHAppHeader from 'components/app-header'
import ZHAppFooter from 'components/app-footer'

export default memo(function App () {
  return (
    <HashRouter>
      <div className="normalTheme">
        <ZHAppHeader />
        {renderRoutes(routes)}
        <ZHAppFooter />
      </div>
    </HashRouter>
  )
})

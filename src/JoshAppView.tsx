import React from 'react'
import { urlPaths } from './utils/urlPaths'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { JoshSiteRoute } from './pages/Josh-site/joshsiteroute';
import { HomeRoute } from './pages/home/homeroute';
import { TestRoute } from './pages/test-site/testroute'


export const JoshAppView = () => (

    <BrowserRouter>
      <Switch>
      <Route
          exact
          path={urlPaths.TEST}
          component={TestRoute} />
        <Route
          exact
          path={urlPaths.JOSH_SITE}
          component={JoshSiteRoute} />
          <Route
          exact
          path={urlPaths.HOME}
          component={HomeRoute} />

        
      </Switch>
    </BrowserRouter>
)
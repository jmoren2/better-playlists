import React from 'react'
import { urlPaths } from './utils/urlPaths'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { JoshSiteRoute } from './pages/Josh-site/joshsiteroute';
import { homeroute } from './pages/home/homeroute';


export const JoshAppView = () => (

    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={urlPaths.JOSH_SITE}
          component={JoshSiteRoute} />
          <Route
          exact
          path={urlPaths.HOME}
          component={homeroute} />
        
      </Switch>
    </BrowserRouter>
)
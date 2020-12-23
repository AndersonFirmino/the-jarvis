import React, { Fragment, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Loading from '../pages/Loading'

import paths from './paths'

const renderRoutes = (routes: any) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route: any, i: any) => {
        const Guard = route.guard || Fragment
        const Layout = route.layout || Fragment
        const Component = route.component

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props: any): React.ReactElement => (
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
              </Guard>
            )}
          />
        )
      })}
    </Switch>
  </Suspense>
)

function Routes(): React.ReactElement {
  return renderRoutes(paths)
}

export default Routes

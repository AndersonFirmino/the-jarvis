import { lazy } from 'react'

const paths = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('src/pages/Start')),
  },
  {
    path: '/',
    component: lazy(() => import('src/pages/NotFound')),
  },
]

export default paths

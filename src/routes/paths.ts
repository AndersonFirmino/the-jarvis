import { lazy } from 'react'

const paths = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('src/pages/Start')),
  },
  {
    exact: true,
    path: '/hero-details',
    component: lazy(() => import('src/pages/HeroDetails')),
  },
  {
    path: '/',
    component: lazy(() => import('src/pages/NotFound')),
  },
]

export default paths

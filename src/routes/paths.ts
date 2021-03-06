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
    exact: true,
    path: '/comics',
    component: lazy(() => import('src/pages/Comics')),
  },
  {
    exact: true,
    path: '/comics-details',
    component: lazy(() => import('src/pages/ComicsDetails')),
  },
  {
    path: '/',
    component: lazy(() => import('src/pages/NotFound')),
  },
]

export default paths

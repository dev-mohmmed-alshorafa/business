import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './Redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './i18n'
import Dashborad from './pages/Dashborad'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import DashboardMain from './pages/DashboardMain'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Services from './pages/Services'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/dashboard',
        element: <Dashborad />,
        children: [
          { index: true, element: <DashboardMain /> },
          { path: '/dashboard/aboutus', element: <AboutUs /> },
          { path: '/dashboard/contact', element: <Contact /> },
          { path: '/dashboard/blog', element: <Blog /> },
          { path: '/dashboard/services', element: <Services /> },
        ],
      },
    ],
    // errorElement: <NotFound />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

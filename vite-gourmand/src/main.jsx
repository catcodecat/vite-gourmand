import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { AdminDashboard } from './pages/AdminDashboard'
import { Contact } from './pages/Contact'
import { EmployeeDashboard } from './pages/EmployeeDashboard'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/Home'
import { Legal } from './pages/Legal'
import { Login } from './pages/Login'
import { MenuDetail } from './pages/MenuDetail'
import { Menus } from './pages/Menus'
import { Order } from './pages/Order'
import { Register } from './pages/Register'
import { UserDashboard } from './pages/UserDashboard'
import './styles.css'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menus', element: <Menus /> },
      { path: '/menus/:id', element: <MenuDetail /> },
      { path: '/connexion', element: <Login /> },
      { path: '/inscription', element: <Register /> },
      { path: '/commande', element: <Order /> },
      { path: '/dashboard', element: <UserDashboard /> },
      { path: '/employe', element: <EmployeeDashboard /> },
      { path: '/admin', element: <AdminDashboard /> },
      { path: '/contact', element: <Contact /> },
      { path: '/mentions-legales', element: <Legal type="mentions" /> },
      { path: '/cgv', element: <Legal type="cgv" /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

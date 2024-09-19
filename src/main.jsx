import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AddHealthRecord from './components/AddHealthRecord.jsx'
import EditUpdateHealth from './components/EditUpdateHealth.jsx'
import ListHealthRecord from './components/ListHealthRecord.jsx'
import DetailsHealthRecord from './components/DetailsHealthRecord.jsx'


const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <ListHealthRecord />
    },
    {
      path: "/health-record/details/:id",
      element: <DetailsHealthRecord />
    },
    {
      path: "/health-record/add",
      element: <AddHealthRecord />
    },
    {
      path: "/health-record/edit/:id",
      element: <EditUpdateHealth />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>,
  </RouterProvider>
)

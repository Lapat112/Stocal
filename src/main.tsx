import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , createBrowserRouter ,RouterProvider } from 'react-router-dom'



import './index.css'

import App from './App.tsx'
import Getsto from './Getsto/Getsto.tsx'
import Poststo from './post/Poststo.tsx'


const router = createBrowserRouter([
  {path:'/', element: <App/>,
    children:[
      {index:true,element:<Getsto/>},
      {path:'Poststo',element:<Poststo/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(    
    <RouterProvider router={router} />
)

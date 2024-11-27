import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Router from './Router.jsx'
import { Home, About ,Contact, User, Github, githubInfoLoader} from './components'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Router />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       }
//     ],
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Router />}>
      {/* Specify default route */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

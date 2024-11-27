import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

const Router = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Router
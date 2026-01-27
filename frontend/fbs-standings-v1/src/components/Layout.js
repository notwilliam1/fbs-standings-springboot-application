import {Outlet} from 'react-router-dom';
import React from 'react';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout;
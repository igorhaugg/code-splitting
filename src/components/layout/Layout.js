import React from 'react';

import Header from '../header/Header';

const Layout = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default Layout;

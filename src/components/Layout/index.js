import React, { useEffect, useState, createContext, } from 'react';
import Menu from './Menu';
import './layout.scss';

const Context = createContext();
const Layout = (props) => {
  const { children, className="main", ...rest } = props;

  return (
    <div className="page-container">
      {/* <header>
        <h1>title</h1>
        <Menu />
      </header> */}

      <main className={className}>
        {children}
      </main>

      <footer>

      </footer>
    </div>
  );
};

export { Context };
export default Layout;
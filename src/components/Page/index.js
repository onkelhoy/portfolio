import React, { useEffect, useState, createContext, } from 'react';

const Context = createContext();
const Page = (props) => {
  const { children, ...rest } = props;

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>tab 1</li>
            <li>tab 2</li>
            <li>tab 3</li>
            <li>tab 4</li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
};

export { Context };
export default Page;
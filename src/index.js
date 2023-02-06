import React from 'react';
import {createRoot} from 'react-dom/client'
import NavBar from './navbar';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Main = () => {
  return (
    <NavBar />
  )
}

root.render(<Main />);
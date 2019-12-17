import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <header>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/about/contact'>Contact</Link></li>
          <li><Link to='/store'>Store</Link></li>
        </ul>
      </header>
      <main>
        <div className="App">
          {routes}
        </div>
      </main>
    </HashRouter>
  );
}

export default App;

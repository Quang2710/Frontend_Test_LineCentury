import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoading1, setIsLoading1] = useState<any>('123');
  const [isLoading2, setIsLoading2] = useState<boolean>(true);

  useEffect(() => {
    // trong này là 1 cái hàm gì đó....
  }, []);

  const ham = () => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code></code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

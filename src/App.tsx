import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CandleStickChart from './component/ChartOHLC';

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
        <CandleStickChart />
    </div>
  );
}

export default App;
import React from 'react';
import TotalSalesChart from './components/TotalSalesChart';
import NewCustomersChart from './components/NewCustomersChart';
import RepeatCustomersChart from './components/RepeatCustomersChart';

function App() {
  return (
    <div className="App">
      <h1>E-commerce Analytics Dashboard</h1>
      <TotalSalesChart interval="%Y-%m-%d" />
      <NewCustomersChart interval="%Y-%m-%d" />
      <RepeatCustomersChart />
    </div>
  );
}

export default App;

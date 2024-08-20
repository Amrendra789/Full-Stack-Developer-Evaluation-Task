import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalSalesChart = ({ interval }) => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/orders/total-sales?interval=${interval}`)
      .then(response => {
        setSalesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching sales data:', error);
      });
  }, [interval]);

  return (
    <div>
      <h2>Total Sales</h2>
      {/* Render your chart here using salesData */}
    </div>
  );
};

export default TotalSalesChart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function RepeatCustomersChart() {
  const [data, setData] = useState({ dates: [], repeatCustomers: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/customers/repeat`);
        const { dates, repeatCustomers } = response.data;
        setData({ dates, repeatCustomers });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.dates.length) return <p>No data available</p>;

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Repeat Customers',
        data: data.repeatCustomers,
        fill: false,
        backgroundColor: 'rgb(255, 159, 64)',
        borderColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Repeat Customers</h2>
      <Line data={chartData} />
    </div>
  );
}

export default RepeatCustomersChart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function NewCustomersChart({ interval }) {
  const [data, setData] = useState({ dates: [], newCustomers: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/customers/new?interval=${interval}`);
        const { dates, newCustomers } = response.data;
        setData({ dates, newCustomers });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [interval]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.dates.length) return <p>No data available</p>;

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'New Customers',
        data: data.newCustomers,
        fill: false,
        backgroundColor: 'rgb(153, 102, 255)',
        borderColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>New Customers</h2>
      <Line data={chartData} />
    </div>
  );
}

export default NewCustomersChart;

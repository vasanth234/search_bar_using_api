import React, { useState, useEffect } from 'react';
import { Api } from './api';
import Table from './Table';

const App = () => {
  const [data, setData] = useState('');
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchAway();
  }, []);

  const fetchAway = async () => {
    try {
      const rest = await Api();
      const ert=rest.data;
      setApiData(ert); // Set the fetched data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searched = (dataArray,query) => {
    console.log("Data Array:", dataArray); // Log the data array
    console.log("Query:", query); // Log the search query
    return dataArray.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Table data={searched(apiData,data)} /> {/* Pass filtered data to Table component */}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Header from './Header';
import PlantPage from './PlantPage';
const baseURL = 'http://localhost:6001/plants';

function App() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setPlantData(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <PlantPage plantData={plantData} setPlantData={setPlantData} />
    </div>
  );
}

export default App;

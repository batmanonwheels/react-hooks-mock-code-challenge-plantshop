import React, { useState } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({ plantData, setPlantData }) {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);

  const filteredData = plantData.filter((plant) => {
    if (plant.name.toLowerCase().includes(searchQuery.toLowerCase)) {
      return plant;
    }
    return plant;
  });

  console.log(filteredData);
  return (
    <main>
      <NewPlantForm plantData={plantData} setPlantData={setPlantData} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList filteredData={filteredData} />
    </main>
  );
}

export default PlantPage;

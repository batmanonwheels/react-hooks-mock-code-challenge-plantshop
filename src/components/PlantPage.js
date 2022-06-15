import React, { useState } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({ plantData, setPlantData }) {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);

  // let filteredData = plantData.filter((plant) =>
  //   plant.name.toLowerCase().includes(searchQuery.toLowerCase)
  // // );

  // console.log(filteredData);
  return (
    <main>
      <NewPlantForm plantData={plantData} setPlantData={setPlantData} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList plantData={plantData} />
    </main>
  );
}

export default PlantPage;

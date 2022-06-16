import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ filteredData }) {
  // console.log(plantData);
  return (
    <ul className='cards'>
      {filteredData.map((plant) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </ul>
  );
}

export default PlantList;

import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plantData }) {
  // console.log(plantData);
  return (
    <ul className='cards'>
      {plantData.map((plant) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </ul>
  );
}

export default PlantList;

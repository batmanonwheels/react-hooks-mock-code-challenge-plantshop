import React, { useState } from 'react';
import uuid from 'react-uuid';

function NewPlantForm({ plantData, setPlantData }) {
  const defaultFormData = {
    id: uuid(),
    name: '',
    image: '',
    price: '',
  };
  const [formData, setFormData] = useState(defaultFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlantData([...plantData, formData]);
    // setFormData(defaultFormData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='new-plant-form'>
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Plant name'
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          onChange={handleChange}
          value={formData.image}
        />
        <input
          type='number'
          name='price'
          step='0.01'
          placeholder='Price'
          onChange={handleChange}
          value={formData.price}
        />
        <button type='submit'>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

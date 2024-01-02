import React, { useState } from 'react';
import axios from 'axios';
const Auth = () => {
    const [formData, setFormData] = useState({
      name: '',
      sex: '',
      age: '',
      places: '',
      college: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/users/register', formData);
          console.log('Response from server:', response);
        } catch (error) {
          console.error('Registration failed', error);
        }
      };
      
  
    return (
      <div>
        <h1>Authentication Page</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
  
          <label>Sex:</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          />
  
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
  
          <label>Places:</label>
          <input
            type="text"
            name="places"
            value={formData.places}
            onChange={handleChange}
          />
  
          <label>College:</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
  
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default Auth;
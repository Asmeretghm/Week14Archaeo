import React, { useState, useEffect } from 'react';
import { getArchaeosites, createArchaeosite, deleteArchaeosite, updateArchaeosite } from './services/api';




function Archaeopage() {
  const [archaeosites, setArchaeosites] = useState([]);
  const [newArchaeosite, setNewArchaeosite] = useState({
    siteName: '',
    region: '',
    country: '',
    age: '',
    siteType: '',
    images: ''
  });

  // Fetch archaeosites from the API
  const fetchArchaeosites = async () => {
    try {
      const response = await getArchaeosites();
      console.log(response); // Debugging: Inspect the response
      // Ensure the response structure matches
      setArchaeosites(response.data.archaeosites || []);
    } catch (error) {
      console.error('Error fetching archaeosites:', error);
    }
  };

  useEffect(() => {
    fetchArchaeosites();
  }, []);

  // Handle input changes for creating a new archaeosite
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArchaeosite((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle creating a new archaeosite
  const handleCreateArchaeosite = async () => {
    try {
      await createArchaeosite(newArchaeosite);
      fetchArchaeosites(); // Refresh the list after adding
      setNewArchaeosite({
        siteName: '',
        region: '',
        country: '',
        age: '',
        siteType: '',
        images: ''
      });
    } catch (error) {
      console.error('Error creating archaeosite:', error);
    }
  };

  // Handle deleting an archaeosite
  const handleDeleteArchaeosite = async (id) => {
    try {
      await deleteArchaeosite(id);
      fetchArchaeosites(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting archaeosite:', error);
    }
  };

  const handleUpdateArchaeosite = async (id) => {
    try {
      await updateArchaeosite(id);
      fetchArchaeosites(); // Refresh the list after update
    } catch (error) {
      console.error('Error updating archaeosite:', error);
    }
  };


  return (

    <div>


      <h1>ArchaeoDB </h1>
      <div>
        <input
          type="text"
          name="siteName"
          placeholder="Site Name"
          value={newArchaeosite.siteName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={newArchaeosite.region}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={newArchaeosite.country}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newArchaeosite.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="siteType"
          placeholder="Site Type"
          value={newArchaeosite.siteType}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="images"
          placeholder="Image URL"
          value={newArchaeosite.images}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateArchaeosite}>Add Archaeosite</button>
      </div>
      <ul>
        {archaeosites.length > 0 ? (
          archaeosites.map((archaeosite) => (
            <li key={archaeosite._id}>
              {archaeosite.siteName || 'No Site Name'} -
              {archaeosite.region || 'No Region'} -
              {archaeosite.country || 'No Country'} -
              {archaeosite.age || 'No Age'} -
              {archaeosite.siteType || 'No Type'} -
              {archaeosite.images || 'No Images'}
              <button onClick={() => handleDeleteArchaeosite(archaeosite._id)}>Delete</button>

            </li>


          ))
        ) : (
          <li>No archaeosites available</li>
        )}
      </ul>


    </div >

  )







}

export default Archaeopage;





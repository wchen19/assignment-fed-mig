import React, { useState } from 'react';
import axios from 'axios';
import './AddModal.scss';

const AddModal = ({ addModal, accessToken }) => {
  const [userData, setUserData] = useState({});

  const handleInputChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;

    setUserData((previousValues) => {
      return {
        ...previousValues,
        [eventName]: eventValue,
      };
    });
  };

  const handleClick = async () => {
    console.log(accessToken);
    const res = await axios.post(
      'https://mitramas-test.herokuapp.com/customers',
      { ...userData, status: true },
      {
        headers: { Authorization: `${accessToken}` },
      }
    );
    console.log(res);
    if (res.status === 200) {
      addModal();
    }
  };

  return (
    <div className='add-modal'>
      <div className='title'>Add Customer</div>
      <div className='input-section'>
        <div className='input'>
          Name{' '}
          <input
            type='text'
            value={userData.name ? userData.name : ''}
            name='name'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='input'>
          Address{' '}
          <input
            type='text'
            value={userData.address ? userData.address : ''}
            name='address'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='input'>
          Country{' '}
          <input
            type='text'
            value={userData.country ? userData.country : ''}
            name='country'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='input'>
          Phone Number{' '}
          <input
            type='tel'
            value={userData.phone_number ? userData.phone_number : ''}
            name='phone_number'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='input'>
          Job Title{' '}
          <input
            type='text'
            value={userData.job_title ? userData.job_title : ''}
            name='job_title'
            required
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='button'>
        <button onClick={handleClick}>Create</button>
        <button onClick={addModal}>Cancel</button>
      </div>
    </div>
  );
};

export default AddModal;

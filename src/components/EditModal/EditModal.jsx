import React, { useState } from 'react';
import axios from 'axios';
import './EditModal.scss';

const EditModal = ({ editModal, accessToken, user }) => {
  const [userData, setUserData] = useState(user ? user : {});
  const [switchOn, setSwitchOn] = useState(user.status);

  const switchClick = () => {
    setSwitchOn(!switchOn);
  };
  console.log(userData);
  const handleInputChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    console.log(eventValue);
    setUserData((previousValues) => {
      return {
        ...previousValues,
        [eventName]: eventValue,
      };
    });
  };

  const handleClick = async () => {
    console.log(accessToken);
    const res = await axios.put(
      'https://mitramas-test.herokuapp.com/customers',
      { ...userData },
      {
        headers: { Authorization: `${accessToken}` },
      }
    );
    console.log(res);
    if (res.status === 200) {
      editModal();
    }
  };

  return (
    <div className='add-modal'>
      <div className='title'>Edit Customer</div>
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
        <div className='input'>
          Status{' '}
          <div className='status' style={{ color: !userData?.status && 'red' }}>
            {userData?.status ? 'Aktif' : 'Tidak Aktif'}
            <div
              className='switch'
              style={{ backgroundColor: !userData?.status && 'gray' }}
              onClick={() => {
                switchClick();
                handleInputChange({
                  target: { value: switchOn, name: 'status' },
                });
              }}
            >
              <div className='ball' style={{ left: !switchOn && '20px' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className='button'>
        <button onClick={handleClick}>Update</button>
        <button onClick={editModal}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;

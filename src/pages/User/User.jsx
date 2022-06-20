import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.scss';
import UserCard from '../../components/UserCard/UserCard';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import AddModal from '../../components/AddModal/AddModal';

const User = ({ accessToken }) => {
  const [userData, setUserData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [user, setUser] = useState({});
  const [searchKey, setSearchKey] = useState('');
  const [sortKey, setSortKey] = useState(false);
  const [result, setResult] = useState([]);

  const deleteModal = (name, id) => {
    setShowDeleteModal(!showDeleteModal);
    setUser({ id: id, name: name });
  };

  const addModal = () => {
    setShowAddModal(!showAddModal);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(
      'https://mitramas-test.herokuapp.com/customers',
      { headers: { Authorization: `${accessToken}` }, data: { id: id } }
    );
    console.log(res);
  };

  const handleSearch = (event) => {
    const eventValue = event.target.value;
    setSearchKey(eventValue);
    search();
  };
  const handleSort = (event) => {
    const eventValue = event.target.value;
    if (eventValue === 'All') {
      setResult(userData);
      return;
    } else if (eventValue === 'Aktif') {
      setSortKey(false);
    } else if (eventValue === 'Tidak Aktif') {
      setSortKey(true);
    }
    sort();
  };

  const search = async () => {
    console.log(searchKey);
    if (searchKey === '') {
      setResult(userData);
      return;
    }

    const res = userData.filter((data) => {
      return data.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setResult(res);
  };

  const sort = async () => {
    console.log(sort);

    const res = userData.filter((data) => {
      return data.status === sortKey;
    });
    setResult(res);
  };

  const getCustomer = async () => {
    const res = await axios.get(
      'https://mitramas-test.herokuapp.com/customers',
      { headers: { Authorization: `${accessToken}` } }
    );

    if (res.status === 200) {
      setUserData(res.data.data);
      setResult(res.data.data);
    }
  };

  useEffect(() => {
    if (accessToken) getCustomer();
  }, [accessToken]);

  return (
    <div className='user'>
      <div className='top'>
        <button className='add-customer' onClick={addModal}>
          Add Customer
        </button>
        <input
          type='text'
          value={searchKey}
          onChange={handleSearch}
          placeholder='Input Search'
        />
        <select name='status' onChange={handleSort}>
          <option value='All'>Sort Status</option>
          <option value='Aktif'>Aktif</option>
          <option value='Tidak Aktif'>Tidak Aktif</option>
        </select>
      </div>
      {showAddModal && (
        <AddModal addModal={addModal} accessToken={accessToken} />
      )}
      <div className='bottom'>
        {result && (
          <>
            {result.map((data) => {
              return (
                <div className='container' key={data.id}>
                  <UserCard userData={data} deleteModal={deleteModal} />
                </div>
              );
            })}
            {showDeleteModal && (
              <DeleteModal
                user={user}
                deleteModal={deleteModal}
                deleteUser={deleteUser}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default User;

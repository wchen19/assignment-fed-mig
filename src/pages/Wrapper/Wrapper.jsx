import React, { useState } from 'react';
import axios from 'axios';
import Profile from '../../assets/profile.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Outlet } from 'react-router-dom';
import './Wrapper.scss';

const Wrapper = ({ accessToken, setAccessToken }) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const login = async () => {
    const res = await axios.post(
      'https://mitramas-test.herokuapp.com/auth/login',
      {
        email: 'akun12@mig.id',
        password: 'BA8A9E03',
      }
    );

    if (res.status === 200) setAccessToken(res.data.access_token);
  };

  const logout = () => {
    setAccessToken('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const showInput = () => {
    setShow(!show);
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('search');
    }
  };

  return (
    <div className='wrapper'>
      <div className='nav'>
        <div className='left-nav'>
          <span className='path'>Perusahaan</span>
          <span className='arrow'>&gt;</span>
          <span className='last-path'>Mitramas Infosys Global</span>
        </div>
        <div className='right-nav'>
          <div className='util'>
            <div className='search-bar'>
              <input
                type='text'
                value={value}
                placeholder='Search'
                onChange={handleChange}
                onKeyDown={search}
                style={{ visibility: show ? 'visible' : 'hidden' }}
              />
              <SearchRoundedIcon id='search' onClick={showInput} />
            </div>
            <NotificationsRoundedIcon />
          </div>
          {accessToken ? (
            <div className='profile' onClick={logout}>
              <img src={Profile} alt='profile' /> John Doe
            </div>
          ) : (
            <button className='login' onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Wrapper;

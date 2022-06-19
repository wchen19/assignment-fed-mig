import React, { useState } from 'react';
import Profile from '../../assets/profile.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Company from '../Company/Company';
import './Wrapper.scss';

const Wrapper = () => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

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
          <div className='profile'>
            <img src={Profile} alt='profile' /> John Doe
          </div>
        </div>
      </div>
      <div className='content'>
        <Company />
      </div>
    </div>
  );
};

export default Wrapper;

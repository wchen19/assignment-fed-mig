import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import KeyboardCommandKeyRoundedIcon from '@mui/icons-material/KeyboardCommandKeyRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import SavedSearchRoundedIcon from '@mui/icons-material/SavedSearchRounded';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const handleClick = (e) => {
    const active = document.getElementsByClassName('active-tab');
    if (active.length !== 0) active[0].classList.remove('active-tab');
    let target = e.target.closest('div.menu');
    target.classList.add('active-tab');
  };

  return (
    <div className='sidebar'>
      <div className='logo'>logo</div>
      <div className='menu-container'>
        <div className='menu' onClick={handleClick}>
          <HomeRoundedIcon />
        </div>
        <div className='menu' onClick={handleClick}>
          <ConfirmationNumberRoundedIcon />
        </div>
        <div className='menu' onClick={handleClick}>
          <AssignmentTurnedInRoundedIcon />
        </div>
        <div className='menu' onClick={handleClick}>
          <Inventory2RoundedIcon />
        </div>
        <Link to='perusahaan/mitramas-infosys-global'>
          <div className='menu active-tab' onClick={handleClick}>
            <ApartmentRoundedIcon />
          </div>
        </Link>
      </div>
      <div className='menu-container'>
        <Link to='user'>
          <div className='menu' onClick={handleClick}>
            <PeopleOutlineRoundedIcon />
          </div>
        </Link>
        <div className='menu' onClick={handleClick}>
          <LayersRoundedIcon />
        </div>
        <div className='menu' onClick={handleClick}>
          <KeyboardCommandKeyRoundedIcon />
        </div>
        <div className='menu' onClick={handleClick}>
          <ViewInArRoundedIcon />
        </div>
        <div className='menu' onClick={handleClick}>
          <SavedSearchRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

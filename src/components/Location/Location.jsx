import React from 'react';
import Card from '../../components/Card/Card';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import WarehouseRoundedIcon from '@mui/icons-material/WarehouseRounded';
import './Location.scss';

const Location = () => {
  return (
    <Card>
      <div className='location'>
        <div className='top'>
          <div className='title'>Lokasi</div>
          <span>Lihat semua</span>
        </div>
        <div className='bottom'>
          <div className='box-1'>
            <MapsHomeWorkRoundedIcon />
            <div className='detail'>
              <div className='number'>20</div>
              <span>Induk</span>
            </div>
          </div>
          <div className='box-2'>
            <BuildRoundedIcon />
            <div className='detail'>
              <div className='number'>3</div>
              <span>Sub Lokasi Level 1</span>
            </div>
          </div>
          <div className='box-3'>
            <WarehouseRoundedIcon />
            <div className='detail'>
              <div className='number'>1</div>
              <span>Sub Lokasi Level 2</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Location;

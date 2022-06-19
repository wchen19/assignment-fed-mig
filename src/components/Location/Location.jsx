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
              <div className='desc'>Induk</div>
            </div>
          </div>
          <div className='box-2'>
            <BuildRoundedIcon />
            <div className='detail'>
              <div className='number'>3</div>
              <div className='desc'>Sub Lokasi Level 1</div>
            </div>
          </div>
          <div className='box-3'>
            <WarehouseRoundedIcon />
            <div className='detail'>
              <div className='number'>1</div>
              <div className='desc'>Sub Lokasi Level 2</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Location;

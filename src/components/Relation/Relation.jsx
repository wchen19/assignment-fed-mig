import React from 'react';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import './Relation.scss';
import Card from '../Card/Card';

const Relation = () => {
  return (
    <Card>
      <div className='relation'>
        <div className='top'>
          <div className='title'>Relasi</div>
          <span>Lihat semua</span>
        </div>
        <div className='bottom'>
          <div className='relation-item'>
            <ShareRoundedIcon />
            <div className='detail'>
              <div className='number'>20</div>
              <div className='desc'>Memiliki</div>
            </div>
          </div>
          <div className='relation-item'>
            <ShareRoundedIcon />
            <div className='detail'>
              <div className='number'>108</div>
              <div className='desc'>Menggunakan</div>
            </div>
          </div>
          <div className='relation-item'>
            <ShareRoundedIcon />
            <div className='detail'>
              <div className='number'>67</div>
              <div className='desc'>Meminjam</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Relation;

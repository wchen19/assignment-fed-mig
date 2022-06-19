import React from 'react';
import Card from '../Card/Card';
import './Activity.scss';

const Activity = () => {
  return (
    <Card>
      <div className='activity'>
        <div className='title'>Aktivitas</div>
        <div className='activity-container'>
          <div className='activity-item'>
            <div className='desc'>
              Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa
            </div>
            <div className='time'>Hari ini, 06:00</div>
          </div>
          <div className='activity-item'>
            <div className='desc'>
              Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk
              Kantor Cabang Tebet
            </div>
            <div className='time'>Kemaren, 17:32</div>
          </div>
          <div className='activity-item'>
            <div className='desc'>
              Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi
            </div>
            <div className='time'>Kemaren, 17:32</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Activity;

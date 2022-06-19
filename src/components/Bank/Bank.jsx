import React from 'react';
import Card from '../Card/Card';
import Visa from '../../assets/visa.png';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import './Bank.scss';

const Bank = () => {
  return (
    <Card>
      <div className='bank'>
        <div className='top'>
          <div className='title'>Akun Bank</div>
          <button>
            <span>+</span>Tambah Akun Bank
          </button>
        </div>
        <div className='bottom'>
          <div className='bank-item'>
            <div className='bank-card yellow-gr'>
              <img src={Visa} alt='visa' />
            </div>
            <div className='bank-detail'>
              <div className='name'>
                Bank KB Bukopin
                <div className='tool'>
                  <EditRoundedIcon className='edit' />
                  <DeleteRoundedIcon className='delete' />
                </div>
              </div>
              <div className='account'>**** 0876 - Yusron Taufiq</div>
              <div className='currency'>IDR</div>
            </div>
          </div>
          <div className='bank-item'>
            <div className='bank-card blue-gr'>
              <img src={Visa} alt='visa' />
            </div>
            <div className='bank-detail'>
              <div className='name'>
                Citibank, NA
                <div className='tool'>
                  <EditRoundedIcon className='edit' />
                  <DeleteRoundedIcon className='delete' />
                </div>
              </div>
              <div className='account'>**** 5525 - Si Tampan</div>
              <div className='currency'>USD</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Bank;

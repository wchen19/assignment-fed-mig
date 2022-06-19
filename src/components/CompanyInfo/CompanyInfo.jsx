import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Background from '../../assets/background.jpg';
import Logo from '../../assets/logo.png';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import './CompanyInfo.scss';

const CompanyInfo = () => {
  const [switchOn, setSwitchOn] = useState(true);
  const switchClick = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <Card>
      <img src={Background} alt='background' className='background' />
      <div className='company-info'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='name'>Mitramas Infosys Global</div>
        <div className='service'>Layanan IT</div>
        <div className='edit'>
          <EditRoundedIcon />
          Sunting profil
        </div>
        <div className='info-section'>
          <div className='info'>
            <span>Status Perusahaan</span>
            <div className='status' style={{ color: !switchOn && 'red' }}>
              {switchOn ? 'Aktif' : 'Tidak Aktif'}
              <div
                className='switch'
                style={{ backgroundColor: !switchOn && 'gray' }}
                onClick={switchClick}
              >
                <div
                  className='ball'
                  style={{ left: !switchOn && '20px' }}
                ></div>
              </div>
            </div>
          </div>
          <div className='info'>
            <span>Singkatan</span>
            MIG
          </div>
          <div className='info'>
            <span>Alamat Perusahaan</span>Jl. Tebet Raya No. 42, Jakarta Selatan
          </div>
          <div className='info'>
            <span>Penanggung Jawab (PIC)</span>John Doe
          </div>
          <div className='info'>
            <span>Tanggal PKP</span>03 Maret 2021
          </div>
          <div className='info'>
            <span>E-mail</span>
            <div>
              <EmailRoundedIcon />
              <a href='mailto: mig@mitrasolusi.group'>mig@mitrasolusi.group</a>
            </div>
          </div>
          <div className='info'>
            <span>No. Telp</span>
            <div>
              <PhoneRoundedIcon />
              <a href='tel: 021-5678-1234'>021-5678-1234</a>
            </div>
          </div>
          <div className='info'>
            <span>Situs Web</span>
            <div>
              <LanguageRoundedIcon />
              <a href='mitramas.com'>mitramas.com</a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanyInfo;

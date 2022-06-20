import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import './UserCard.scss';

const UserCard = ({ userData, deleteModal }) => {
  const [switchOn, setSwitchOn] = useState(true);

  const switchClick = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <>
      <Card>
        <div className='user-card'>
          <div className='top'>
            <div className='user-info'>
              <div className='name'>{userData?.name}</div>
              <div className='id'>{userData?.id}</div>
            </div>
            <div className='tool'>
              <EditRoundedIcon className='edit' />
              <DeleteRoundedIcon
                className='delete'
                onClick={() => deleteModal(userData?.name, userData?.id)}
              />
            </div>
          </div>
          <div className='bottom'>
            <div className='detail'>
              <span>Status Perusahaan</span>
              <div
                className='status'
                style={{ color: !userData?.status && 'red' }}
              >
                {userData?.status ? 'Aktif' : 'Tidak Aktif'}
                <div
                  className='switch'
                  style={{ backgroundColor: !userData?.status && 'gray' }}
                  onClick={switchClick}
                >
                  <div
                    className='ball'
                    style={{ left: !switchOn && '20px' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='detail'>
              <span>Country</span>
              {userData?.country}
            </div>
            <div className='detail'>
              <span>Address</span>
              {userData?.address}
            </div>
            <div className='detail'>
              <span>Job</span>
              {userData?.job_title}
            </div>
            <div className='detail'>
              <span>Phone Number</span>
              {userData?.phone_number}
            </div>
            <div className='detail'>
              <span>Data Created</span>
              {userData?.created_at}
            </div>
            <div className='detail'>
              <span>Data Updated</span>
              {userData?.updated_at}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default UserCard;

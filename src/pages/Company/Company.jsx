import React from 'react';
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo';
import Location from '../../components/Location/Location';
import './Company.scss';

const Company = () => {
  return (
    <div className='company row'>
      <div className='flex-1'>
        <CompanyInfo />
      </div>
      <div className='flex-3 column'>
        <div className='flex-1'>
          <Location />
        </div>
        <div className='flex-2'>
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Company;

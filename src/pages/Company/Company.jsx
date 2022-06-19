import React from 'react';
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo';
import './Company.scss';

const Company = () => {
  return (
    <div className='company'>
      <div className='flex-1'>
        <CompanyInfo />
      </div>
      <div className='flex-3'></div>
    </div>
  );
};

export default Company;

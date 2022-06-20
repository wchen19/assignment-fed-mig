import React from 'react';
import Activity from '../../components/Activity/Activity';
import Bank from '../../components/Bank/Bank';
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo';
import Location from '../../components/Location/Location';
import Relation from '../../components/Relation/Relation';
import './Company.scss';

const Company = () => {
  return (
    <div className='company'>
      <div className='main-section-1'>
        <CompanyInfo />
      </div>
      <div className='main-section-2'>
        <div>
          <Location />
        </div>
        <div className='sub-container'>
          <div className='sub-section-1'>
            <Bank />
            <Relation />
          </div>
          <div className='sub-section-2'>
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

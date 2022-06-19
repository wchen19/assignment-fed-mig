import React from 'react';
import Activity from '../../components/Activity/Activity';
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo';
import Location from '../../components/Location/Location';
import Relation from '../../components/Relation/Relation';
import './Company.scss';

const Company = () => {
  return (
    <div className='company row'>
      <div className='flex-1'>
        <CompanyInfo />
      </div>
      <div className='flex-3 column'>
        <div>
          <Location />
        </div>
        <div className='flex-2 row'>
          <div className='flex-1 column'>
            <Relation />
            <Relation />
          </div>
          <div className='flex-1'>
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

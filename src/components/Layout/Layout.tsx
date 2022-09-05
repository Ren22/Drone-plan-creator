import React from 'react';
import { PlanList } from '../PlanList';
import { PlanSaver } from '../PlanSaver';
import { Map } from '../Map';
import './Layout.css';
import {} from '../../features/plans/planSlice';

const Layout = () => {
  return (
    <>
      <div className="content">
        <Map />
        <div>
          <PlanSaver />
          <PlanList />
        </div>
      </div>
    </>
  );
};

export default Layout;

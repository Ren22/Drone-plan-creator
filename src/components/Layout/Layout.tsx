import React from 'react';
import { PlanList } from '../PlanList';
import { PlanSaver } from '../PlanSaver';
import { Map } from '../Map';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <div className="content">
        <Map />
        <div className="sidebar">
          <PlanSaver />
          <PlanList />
        </div>
      </div>
    </>
  );
};

export default Layout;

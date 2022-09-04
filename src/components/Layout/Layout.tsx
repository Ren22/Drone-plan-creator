import React, { useState } from 'react';
import { PlanList } from '../PlanList';
import { PlanSaver } from '../PlanSaver';
import { Map } from '../Map';
import './Layout.css';

const Layout = () => (
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

export default Layout;

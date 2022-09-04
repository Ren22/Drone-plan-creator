import React, { useState } from 'react';
import { PlanList } from '../PlanList';
import { PlanSaver } from '../PlanSaver';
import { Map } from '../Map';
import './Layout.css';
import { Button } from '../Button';

const Layout = () => {
  const [isMarkerAddingMode, setIsMarkerAddingMode] = useState(false);
  const enableAddMarkerMode = () => {
    setIsMarkerAddingMode(!isMarkerAddingMode);
  };
  return (
    <>
      <div className="content">
        <Map />
        <div>
          <Button onClick={enableAddMarkerMode}>
            {`${isMarkerAddingMode ? 'Stop' : 'Start'} plan creation`}
          </Button>
          <PlanSaver />
          <PlanList />
        </div>
      </div>
    </>
  );
};

export default Layout;

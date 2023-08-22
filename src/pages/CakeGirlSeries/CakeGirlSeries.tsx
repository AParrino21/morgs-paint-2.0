import React from "react";
import "./CakeGirlSeries.css";

import PaintingLayout from "../../components/PaintingLayout/PaintingLayout";
import CakeGirlHeader from "../../components/CakeGirlHeader/CakeGirlHeader";

const CakeGirlSeries = () => {
  return (
    <div>
        <div>
            <CakeGirlHeader />
        </div>
      <div>
        <PaintingLayout />
      </div>
    </div>
  );
};

export default CakeGirlSeries;

import React from "react";
import Anex6 from "./components/Anex6";
import Anex4 from "./components/Anex4";
import Approval1 from"./components/Approval1";
import Approval2 from"./components/Approval2";
import Exit_Approval from"./components/Exit_Approval";
import ExitOfFarmer from "./components/ExitOfFarmer";
import Checkpoint from "./components/Checkpoint";
import Declaration from "./components/Declaration";
import Inspection from "./components/Inspection";
import RiskManagement from "./components/RiskManagement";
import FarmersContract from "./components/FarmersContract";
function App(){
  return(
    <div className={Anex4}>
      <Anex4/>
      <div className={Anex6}>
      <Anex6/>
      <div className={Approval1}>
        <Approval1/>
        <div className={Approval2}>
          <Approval2/>
          <div className={Exit_Approval}>
            <Exit_Approval/>
            <div className={ExitOfFarmer}>
              <ExitOfFarmer/>
            </div>
            <div className={Checkpoint}>
              <Checkpoint/>
            </div>
            <div className={Declaration}>
              <Declaration/>
            </div>
            <div className={Inspection}>
              <Inspection/>
            </div>
            <div className={RiskManagement}>
              <RiskManagement/>
            </div>
            <div className={FarmersContract}>
              <FarmersContract/>
            </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
}
  export default App;
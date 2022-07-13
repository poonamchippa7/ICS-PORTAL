import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  
  const [farmerName, setFarmerName] = useState('');
  const [farmerId, setFarmerId] = useState('');
  const [farmerAdd, setFarmerAdd] = useState('');
  const [fName, setFName] = useState('');
  const [fId, setFId] = useState('');
  const [fAdd, setFAdd] = useState('');
  const [fSerial, setFSerial] = useState('');
  const [fDate, setFData] = useState('');
  const [fPlace, setFPlace] = useState('');
  
  const  submitHandler = () => {
    let temparr = {
      FarmerName: farmerName,
      FarmerID: farmerId,
      FarmerAdd: farmerAdd,
      FName: fName,
      FId:fId,
      Fserial:fSerial,
      FDate:fDate,
      FPlace:fPlace,
      FAdd:fAdd,
    }
    console.log(temparr)
  } 
  
  return (
    <>
      <form onSubmit={submitHandler} >
        
      <div className="container border d-flex align-items-center justify-content-center">
        <div className="annex 4">
          <center>
            <h1>FORMAT FOR SANCTIONS BY ICS</h1>
          </center>
          <center>
            <h2 align-items-center>(Letter Head)</h2>
          </center>
          <p>To,</p>

<div className="form-group col-md-6 d-flex justify-content-between ">
                  <label >Name of the farmer</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Farmer’s name  "
                    name="farmername"
                    onChange={(e)=> setFarmerName(e.target.value)}
                    
                    value={farmerName}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between ">
                  <label htmlFor="">ID Number</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="ID Number "
                    name="id"
                    onChange={(e) => setFarmerId(e.target.value)}
                    value={farmerId}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">Address</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Address "
                    name="add"
                    onChange={(e) => setFarmerAdd(e.target.value)}
                    value={farmerAdd}
                    required="required"
                  />
                </div>
          <h3>List of sanctions and conditions of the approval committee</h3>
          <p>
            The following sanctions have been listed by the approval committee
            based on the internal 2 inspections on xx/xx/xxxx
          </p>
          <p>1.Removal of farmer from the group</p>
          <p>2.Downgrading the organic status to conventional</p>
          <p>3.Sale of farm produce as conventional</p>
          <p>
            The following conditions have to be met by the farmer for
            maintaining the certification status and continuing with the project
          </p>
          <table>
            <tr>
              <tr>
                <input
                  class="effect 16"
                  type="text"
                  placeholder="Condition1"
                  onChange={(e) => setFName(e.target.value)}
                    value={fName}
                    required="required"
                />
              </tr>
              <tr>
                <input
                  class="effect 16"
                  type="text"
                  placeholder="Condition2"
                  onChange={(e) => setFId(e.target.value)}
                    value={fId}
                    required="required"
                />
              </tr>
              <tr>
                <input class="effect 16" 
                type="text"
                 placeholder="Condition3"
                 onChange={(e) => setFAdd(e.target.value)}
                    value={fAdd}
                    required="required" />
              </tr>
            </tr>
          </table>
          <p>
            You are requested to fulfill the conditions listed at S.No.
            <tc>
              <input
                class="effect 16"
                type="text"
                placeholder="(Enter serial no)"
                onChange={(e) => setFSerial(e.target.value)}
                    value={fSerial}
                    required="required"
              />
            </tc>
            within xx/xx/xxxx and
          </p>
          <div className="Date">
            <label for="birthday">Date:</label>
            <input type="date"
             id="birthday" 
             name="birthday"
             onChange={(e) => setFData(e.target.value)}
             value={fDate}
             required="required">

            </input>
          </div>
          <p>
            Place
            <tc>
              <input
                class="effect 16"
                type="text"
                placeholder="Name of Place"
                onChange={(e) => setFPlace(e.target.value)}
                    value={fPlace}
                    required="required"
              />
            </tc>
          </p>
                    <div className=".justify-content-end">
            Signature
            <div>(For ICS)</div>
          <p>(Seal of ICS)</p>
          <div>
        <tr><input
            type="button"
            value="Submit"         
             onClick={ submitHandler}     
          />
          </tr>
        </div> 
       </div>
        </div>
      </div>
      </form>
    </>
    
  );
}

export default App;

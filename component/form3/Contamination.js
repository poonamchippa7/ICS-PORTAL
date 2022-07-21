import React ,{useState,useEffect} from 'react';
import Axios from "axios";

import {Table,Dropdown,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";



export default function Contamination() {

    const [fname,setName]=useState({
        SNo:"",SNo1:"",SNo2:"",SNo3:"",SNo4:"",SNo5:"",
        Source_Details: "", Source_Details1: "", Source_Details2: "", Source_Details3: "", Source_Details4: "", Source_Details5: "",
        Time_of_contamination_control1: "",Time_of_contamination_control2: "",Time_of_contamination_control3: "",Time_of_contamination_control4: "", Time_of_contamination_control5: "",Time_of_contamination_control4: "",
        Prevention: "", Prevention1: "", Prevention2: "", Prevention3: "", Prevention4: "", Prevention5: "",
        Control:"",Control1:"",Control2:"",Control3:"",Control4:"",Control5:"",
        Remarks: "",   Remarks1: "",  Remarks2: "",  Remarks3: "",  Remarks4: "",  Remarks5: "", 
       
    
    
      });
      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
        const [inputFields, setInputFields] = useState([
            {  
                SNo:"",Source_Details: "",
            Time_of_contamination_control: "",
            Prevention: "",
            Control:"",
            Remarks: "",},
          ]);
        
          
           const handleChangeInput = (id, event) => {
            
            const newInputFields = inputFields.map(i => {
              if(id === i.id) {
                i[event.target.name] = event.target.value
              }
              return i;
            })
            
            setInputFields(newInputFields);
          }
        const handleAddFields = () => {
            setInputFields([...inputFields, {   SNo:"", Source_Details: "",
            Time_of_contamination_control: "",
            Prevention: "",
            Control:"",
            Remarks: "",}])
          }
          
        const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
        }
        useEffect(() => {}, [fname]);

  return (
  <>
  <section>
    
        {/*Table 5   Contamination Control Records: */}
        <div className="card ">
          <div className="card-body">
            <div className="row scrollX">
            {JSON.stringify(fname)}
              <div className="col scrollY">
                <h6> Contamination Control Records: </h6>
                <hr />
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Sno
                      </th>
                      <th className="col-md-4" name="farm">
                        Chances of contamination
                      </th>
                      <th className="col-md-4" name="area">
                        Source & Details
                      </th>
                      <th className="col-md-2" name="crop">
                        Time of contamination control
                      </th>
                      <th className="col-md-2" name="appT">
                        Contamination management
                        <th class="col-md-2" name="appT">
                          Time
                        </th>
                        <th className="col-md-2" name="appT">
                          Rate
                        </th>
                      </th>

                      <th className="col-md-2" name="source">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                            name="Sno"
                            onChange={inputEvent}
                            value={fname.Sno}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <tr>Machinery</tr>
                        </td>
                        <td>
                          <input
                            name="Source_Details"
                            onChange={inputEvent}
                            value={fname.Source_Details}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                           name="Time_of_contamination_control"
                           onChange={inputEvent}
                           value={fname.Time_of_contamination_control}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                             name="Prevention"
                             onChange={inputEvent}
                             value={fname.Prevention}
                              type="text"
                              placeholder="Prevention"
                            />
                          </td>
                          <td>
                            <input
                             name="Control"
                             onChange={inputEvent}
                             value={fname.Control}
                              type="text"
                              placeholder="Control"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                           name="Remarks"
                           onChange={inputEvent}
                           value={fname.Remarks}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                      </tr>
                    </tbody>
                
                  
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                           name="Sno"
                           onChange={inputEvent}
                           value={fname.Sno}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <tr>Water</tr>
                        </td>
                        <td>
                          <input
                           name="Source_Details1"
                           onChange={inputEvent}
                           value={fname.Source_Details1}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                           name="Time_of_contamination_control1"
                           onChange={inputEvent}
                           value={fname.Time_of_contamination_control1}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                              name="Prevention1"
                              onChange={inputEvent}
                              value={fname.Prevention1}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                              name="Control1"
                              onChange={inputEvent}
                              value={fname.Control1}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            name="Remarks1"
                            onChange={inputEvent}
                            value={fname.Remarks1}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                      </tr>
                      {/* <BsDashSquare onClick={handleRemoveFieldT4} /> */}
                    </tbody>
                 
                  
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                           name="Sno"
                           onChange={inputEvent}
                           value={fname.Sno}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <tr>Air</tr>
                        </td>
                        <td>
                          <input
                           name="Source_Details2"
                           onChange={inputEvent}
                           value={fname.Source_Details2}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                           name="Time_of_contamination_control2"
                           onChange={inputEvent}
                           value={fname.Time_of_contamination_control2}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                             name=" Prevention2"
                             onChange={inputEvent}
                             value={fname.Prevention2}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                             name="Control2"
                             onChange={inputEvent}
                             value={fname.Control2}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                           name="Remarks2"
                           onChange={inputEvent}
                           value={fname.Remarks2}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                      </tr>
                    </tbody>
                  
                  
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                           name="Sno"
                           onChange={inputEvent}
                           value={fname.Sno}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <tr>Neighbour</tr>
                        </td>
                        <td>
                          <input
                            name="Source_Details3"
                            onChange={inputEvent}
                            value={fname.Source_Details3}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name="Time_of_contamination_control3"
                            onChange={inputEvent}
                            value={fname.Time_of_contamination_control3}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                              name="Prevention3"
                              onChange={inputEvent}
                              value={fname.Prevention3}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                              name="Control3"
                              onChange={inputEvent}
                              value={fname.Control3}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            name="Remarks3"
                            onChange={inputEvent}
                            value={fname.Remarks3}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                      </tr>
                    </tbody>
                  
                  
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                            name="Sno"
                            onChange={inputEvent}
                            value={fname.Sno}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <tr>Drift Control & Buffer Zone</tr>
                        </td>
                        <td>
                          <input
                           name="Source_Details4"
                           onChange={inputEvent}
                           value={fname.Source_Details4}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                           name="Time_of_contamination_control4"
                           onChange={inputEvent}
                           value={fname.Time_of_contamination_control4}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                             name="Prevention4"
                             onChange={inputEvent}
                             value={fname.Prevention4}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                              name="Control4"
                              onChange={inputEvent}
                              value={fname.Control4}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                           name="Remarks4"
                           onChange={inputEvent}
                           value={fname.Remarks4}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                      </tr>
                    </tbody>
                  
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                           name="Sno"
                           onChange={inputEvent}
                           value={fname.Sno}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <tr>Others</tr>
                        </td>
                        <td>
                          <input
                            name="Source_Details5"
                            onChange={inputEvent}
                            value={fname.Source_Details5}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                           name="Time_of_contamination_control5"
                           onChange={inputEvent}
                           value={fname.Time_of_contamination_control5}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                             name="Prevention5"
                             onChange={inputEvent}
                             value={fname.Prevention5}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                              name="Control5"
                              onChange={inputEvent}
                              value={fname.Control5}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            name="Remarks5"
                            onChange={inputEvent}
                            value={fname.Remarks5}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                      </tr>
                    </tbody>
                  

                  {/* <BsPlusSquare onClick={handleAddFieldsT4} /> */}
                </Table>
              </div>
            </div>
          </div>
          <div className="form-group col-md-6 a-right my-2">
            <Button href="/Estimate_Marketing">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
        </div>
  </section>
  </>
  )
}


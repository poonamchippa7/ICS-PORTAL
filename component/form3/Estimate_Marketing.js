import React ,{useState,useEffect} from 'react';
import Axios from "axios";
 
import {Table,Dropdown,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";


export default function Estimate_Marketing() {


    const [fname,setName]=useState({
        Name_of_farm_plot_area: [],
        Name_of_the_crop_produce: [],
        Estimated: [],
        Actual:[],
        Estimated_production_MT: [],  
        Actual_production_MT: [],
        Name_of_the_produce: [],
        Quantity_of_Storage: [],
        Date: [],
        Quantity:[],
        Mode:[],
        Quantity_Left:[],
        Other_uses:[],
        Remarks:[],
    
    
      });
      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
        const [inputFields, setInputFields] = useState([
            { Name_of_farm_plot_area: [],
                Name_of_the_crop_produce: [],
                Estimated: [],
                Actual:[],
                Estimated_production_MT: [],  
                Actual_production_MT: [],
                Name_of_the_produce: [],
                Quantity_of_Storage: [],
                Date: [],
                Quantity:[],
                Mode:[],
                Quantity_Left:[],
                Other_uses:[],
                Remarks:[], },
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
            setInputFields([...inputFields, {   Name_of_farm_plot_area: [],
                Name_of_the_crop_produce: [],
                Estimated: [],
                Actual:[],
                Estimated_production_MT: [],  
                Actual_production_MT: [],
                // Name_of_the_produce: [],
                // Quantity_of_Storage: [],
                // Date: [],
                // Quantity:[],
                // Mode:[],
                // Quantity_Left:[],
                // Other_uses:[],
                // Remarks:[], 
            }])
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
      {/* Table 6 :  Estimates of Production & Harvest Record:                 */}

      <div className="card ">
          <div className="card-body">
            <div className="row ">
            {JSON.stringify(fname)}
              <div className="col ">
                <h6>Estimates of Production & Harvest Record: </h6>
                <hr />
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                     
                      <th className="col-md-4" name="farm">
                        Name of farm / plot no
                      </th>

                      <th className="col-md-2" name="crop">
                      Name of the crop / produce
                      </th>

                      <th className="col-md-2" name="appT">
                        Time of harvest
                        <th class="col-md-2" name="appT">
                          Estimated
                        </th>
                        <th className="col-md-2" name="appT">
                          Actual
                        </th>
                      </th>

                      <th className="col-md-2" name="source">
                        Estimated production (MT)
                      </th>

                      <th className="col-md-2" name="source">
                        Actual production (MT)
                      </th>
                    </tr>
                  </thead>
                  { inputFields.map(inputField => (
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                            name="Name_of_farm_plot_area"
                            onChange={inputEvent}
                            value={fname.Name_of_farm_plot_area}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name=" Name_of_the_crop_produce"
                            onChange={inputEvent}
                            value={fname. Name_of_the_crop_produce}
                            type="text"
                            placeholder="crop"
                          />
                        </td>

                       

                        <td>
                          <td>
                            <input
                              name="Estimated"
                              onChange={inputEvent}
                              value={fname.Estimated}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                             name="Actual"
                             onChange={inputEvent}
                             value={fname.Actual}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            name="Estimated_production_MT"
                            onChange={inputEvent}
                            value={fname.Estimated_production_MT}
                            type="text"
                            placeholder="type"
                          />
                        </td>

                        <td>
                          <input
                            name="Actual_production_MT"
                            onChange={inputEvent}
                            value={fname.Actual_production_MT}
                            type="text"
                            placeholder="rate"
                          />
                        </td>
                      </tr>
                      <BsDashSquare disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputFields.id)}/>
                    </tbody>
                   
                  ))}
                 <BsPlusSquare onClick={handleAddFields}/>
                </Table>
              </div>
            </div>
          </div>
        </div>

        {/* Table 7 - */}

        <div className="card ">
          <div className="card-body">
            <div className="row ">
              <div className="col ">
                <h6>Marketing and Dispatch Record: </h6>
                <hr />
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                      

                      <th className="col-md-2" name="crop">
                        Name of the crop
                      </th>
                      <th className="col-md-4" name="farm">
                        Quantity of Storage
                      </th>

                      <th className="col-md-2" name="appT">
                        Details of transport
                        <th class="col-md-2" name="appT">
                          Date
                        </th>
                        <th className="col-md-2" name="appT">
                          Quantity
                        </th>
                        <th className="col-md-2" name="appT">
                          Mode
                        </th>
                      </th>

                      <th className="col-md-2" name="source">
                        Quantity Left
                      </th>
                      <th className="col-md-2" name="source">
                        Other uses
                      </th>

                      <th className="col-md-2" name="source">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  { inputFields.map(inputField => (
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                            name="Name_of_the_produce"
                            onChange={inputEvent}
                            value={fname.Name_of_the_produce}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name="Quantity_of_Storage"
                            onChange={inputEvent}
                            value={fname.Quantity_of_Storage}
                            type="text"
                            placeholder="crop"
                          />
                        </td>

                        <td>
                          <input
                            name="Date"
                            onChange={inputEvent}
                            value={fname.Date}
                            type="text"
                            placeholder="2016"
                          />
                        </td>

                        <td>
                          <td>
                            <input
                              name=" Quantity"
                              onChange={inputEvent}
                              value={fname. Quantity}
                              type="text"
                              placeholder="date"
                            />
                          </td>
                          <td>
                            <input
                              name=" Mode"
                              onChange={inputEvent}
                              value={fname. Mode}
                              type="text"
                              placeholder="quantity "
                            />
                          </td>
                          <td>
                            <input
                              name="Quantity_Left"
                              onChange={inputEvent}
                              value={fname.Quantity_Left}
                              type="text"
                              placeholder="mode "
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            name="Other_uses"
                            onChange={inputEvent}
                            value={fname.Other_uses}
                            type="text"
                            placeholder="left"
                          />
                        </td>

                        <td>
                          <input
                            name="Remarks"
                            onChange={inputEvent}
                            value={fname.Remarks}
                            type="text"
                            placeholder="uses"
                          />
                        </td>

                        
                      </tr>
                    
                      <BsDashSquare disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputFields.id)}/>
                    </tbody>
                  ))}

                 <BsPlusSquare onClick={handleAddFields}/>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group col-md-6 a-right my-2">
            <Button href="/Inspection">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
      
      </section>
  
   </>
  )
}

import React ,{useState,useEffect} from 'react';
import Axios from "axios";

import {Table,Dropdown,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";


export default function Soil_Disease() {

    const [fname,setName]=useState({
        SNo: "",
        Name_of_farm_plot_no: "",
        Area: "",
        Name_of_the_crop:"",
        Name_of_the_inputs: "",  
        Source_of_input_brand: "",
        Time: "",
        Rate: "",



       SNo1: "",
       Name_of_farm_plot_no1: "",
       Area1: "",
       Name_of_the_crop1:"",
       Name_of_pest_disease_and_weed:"",
        Total_Plots:"",
        Name:"",
        Time1:"",
        Source_brand_of_input:"",
        Rate_of_application:"",

    
    
      });
      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
        const [inputFields, setInputFields] = useState([
            {   SNo: "",
            Name_of_farm_plot_no: "",
            Area: "",
            Name_of_the_crop:"",
            Name_of_the_inputs: "",  
            Source_of_input_brand: "",
            Time: "",
            Rate: "",
    
    
    
           SNo1: "",
           Name_of_farm_plot_no1: "",
           Area1: "",
           Name_of_the_crop1:"",
           Name_of_pest_disease_and_weed:"",
            Total_Plots:"",
            Name:"",
            Time1:"",
            Source_brand_of_input:"",
            Rate_of_application:"", },
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
            setInputFields([...inputFields, {   SNo: "",
            Name_of_farm_plot_no: "",
            Area: "",
            Name_of_the_crop:"",
            Name_of_the_inputs: "",  
            Source_of_input_brand: "",
            Time: "",
            Rate: "",
    
    
    
           SNo1: "",
           Name_of_farm_plot_no1: "",
           Area1: "",
           Name_of_the_crop1:"",
           Name_of_pest_disease_and_weed:"",
            Total_Plots:"",
            Name:"",
            Time1:"",
            Source_brand_of_input:"",
            Rate_of_application:"", }])
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
    
       
        {/* Soil Conditioners & Fertility Input Records: Table No 3 */}

        <div className="card ">
          <div className="card-body">
            <div className="row">
            {JSON.stringify(fname)}
              <div className="col ">
                <h6>Soil Conditioners & Fertility Input Records: </h6>
                <hr />
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Sno
                      </th>
                      <th className="col-md-4" name="farm">
                        Name of farm / plot no
                      </th>
                      <th className="col-md-4" name="area">
                        Area
                      </th>
                      <th className="col-md-2" name="crop">
                        Name of the crop
                      </th>
                      <th className="col-md-2" name="input">
                        Name of the inputs
                      </th>
                      <th className="col-md-2" name="source">
                        Source of input / brand
                      </th>
                      <th className="col-md-2" name="appT">
                        Details of application
                        <th className="col-md-2" name="appT">
                          Time
                        </th>
                        <th className="col-md-2" name="appT">
                          Rate
                        </th>
                      </th>
                    </tr>
                  </thead>
                  { inputFields.map(inputField => (
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
                          <input
                            name="Name_of_farm_plot_no"
                            onChange={inputEvent}
                            value={fname.Name_of_farm_plot_no}
                            type="text"
                            placeholder="crop"
                          />
                        </td>
                        <td>
                          <input
                            name="Area"
                            onChange={inputEvent}
                            value={fname.Area}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name="Name_of_the_crop"
                            onChange={inputEvent}
                            value={fname.Name_of_the_crop}
                            type="text"
                            placeholder="2016"
                          />
                        </td>
                        <td>
                          <input
                            name="Name_of_the_inputs"
                            onChange={inputEvent}
                            value={fname.Name_of_the_inputs}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name="Source_of_input_brand"
                            onChange={inputEvent}
                            value={fname.Source_of_input_brand}
                            type="text"
                            placeholder="type"
                          />
                        </td>
                        <td>
                          <td>
                            <input
                              name="Time"
                              onChange={inputEvent}
                              value={fname.Time}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                              name="Rate"
                              onChange={inputEvent}
                              value={fname.Rate}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
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

        {/*Table 4 Disease, Insects, Pests & Weed Management Record:  */}

        <div className="card ">
          <div className="card-body">
            <div className="row scrollX">
              <div className="col scrollY">
                <h6> Disease, Insects, Pests & Weed Management Record: </h6>
                <hr />
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Sno
                      </th>
                      <th className="col-md-4" name="farm">
                        Name of farm / plot no
                      </th>
                      <th className="col-md-4" name="area">
                        Area
                      </th>
                      <th className="col-md-2" name="crop">
                        Name of the crop
                      </th>
                      <th className="col-md-2" name="input">
                        Name of pest, disease and weed
                      </th>

                      <th className="col-md-2" name="appT">
                        Treatment used for control
                        <th className="col-md-2" name="appT">
                          Name
                        </th>
                        <th className="col-md-2" name="appT">
                          Time
                        </th>
                      </th>

                      <th className="col-md-2" name="source">
                        Source of input / brand
                      </th>

                      <th className="col-md-2" name="source">
                        Rate of application
                      </th>
                    </tr>
                  </thead>
                  { inputFields.map(inputField => (
                    <tbody>
                      <tr ng-repeat="name in getdrugnameNewArray">
                        <td>
                          <input
                            name="SNo1"
                            onChange={inputEvent}
                            value={fname.SNo1}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name="Name_of_farm_plot_no1"
                            onChange={inputEvent}
                            value={fname.Name_of_farm_plot_no1}
                            type="text"
                            placeholder="crop"
                          />
                        </td>
                        <td>
                          <input
                            name="Area1"
                            onChange={inputEvent}
                            value={fname.Area1}
                            type="text"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            name="Name_of_the_crop1"
                            onChange={inputEvent}
                            value={fname.Name_of_the_crop1}
                            type="text"
                            placeholder="2016"
                          />
                        </td>
                        <td>
                          <input
                            name="Name_of_pest_disease_and_weed"
                            onChange={inputEvent}
                            value={fname.Name_of_pest_disease_and_weed}
                            type="text"
                            placeholder=""
                          />
                        </td>

                        <td>
                          <td>
                            <input
                              name="Total_Plots"
                              onChange={inputEvent}
                              value={fname.Total_Plots}
                              type="text"
                              placeholder="Time"
                            />
                          </td>
                          <td>
                            <input
                              name="Name"
                              onChange={inputEvent}
                              value={fname.Name}
                              type="text"
                              placeholder=" Rate"
                            />
                          </td>
                        </td>

                        <td>
                          <input
                            name="Time1"
                            onChange={inputEvent}
                            value={fname.Time1}
                            type="text"
                            placeholder="type"
                          />
                        </td>

                        <td>
                          <input
                            name=" Source_brand_of_input"
                            onChange={inputEvent}
                            value={fname.Source_brand_of_input}
                            type="text"
                            placeholder="rate"
                          />
                        </td>
                        <td>
                          <input
                            name=" Rate_of_application"
                            onChange={inputEvent}
                            value={fname.Rate_of_application}
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

          <div className="form-group col-md-6 a-right my-2">
            <Button href="/Contamination">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>

          </div>
  </section>
  </>
  )
}

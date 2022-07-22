import React ,{useState,useEffect} from 'react';
import Axios from "axios";
 import { v4 as uuidv4 } from 'uuid';
import {Table,Dropdown,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";


export default function Farm_Seed() {

    const [fname,setName]=useState({
        Name_of_the_crop: "",
        Area_in_Hectares: "",
        Year_and_season_of_production: "",
        Method_of_production:"",
        Remarks: "",  


        SNo: "",
        Name_of_the_crop1: "",
        Variety: "",
        Purchase_date_of_seed: "",
        Name_of_Supplier_Address: "",
        Type_of_seed: "",
        Seed_Treatment: "",
        
    
    
      });
      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
        const [inputFields, setInputFields] = useState([
            { id: uuidv4(),  Name_of_the_crop: "",
            Area_in_Hectares: "",
            Year_and_season_of_production: "",
            Method_of_production:"",
            Remarks: "",  
    
    
            SNo: "",
            Name_of_the_crop1: "",
            Purchase_date_of_seed: "",
            Name_of_Supplier_Address: "",
            Type_of_seed: "",
            Seed_Treatment: "", },
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
            setInputFields([...inputFields, { id: uuidv4(),   Name_of_the_crop: "",
            Area_in_Hectares: "",
            Year_and_season_of_production: "",
            Method_of_production:"",
            Remarks: "",  
    
    
            SNo: "",
            Name_of_the_crop1: "",
            Purchase_date_of_seed: "",
            Name_of_Supplier_Address: "",
            Type_of_seed: "",
            Seed_Treatment: "", }])
          }
          
        const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
        }

        useEffect(() => {}, [fname]);

  return (
   <>
   <section >
   <div className="card ">
          <div className="card-body">
            <div className="row">
            {JSON.stringify(fname)}
              <div className="col ">
                <h6>Farm-Crop-Area Details </h6>
                <hr />
                <div className="table table-striped table-bordered table-sm">
                  <Table responsive striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th className="col-md-4" name="crop">
                          Name of the crop
                        </th>
                        <th className="col-md-4" name="Area">
                          Area in Hectares
                        </th>
                        <th className="col-md-2" name="year">
                          Year and season of production
                        </th>
                        <th className="col-md-2" name="method">
                          Method of production (irrigated, non irrigated)
                        </th>
                        <th className="col-md-2" name="remark">
                          Remarks (organic/ in conversion/ others)
                        </th>
                      </tr>
                    </thead>
                    { inputFields.map(inputField => (
                      <tbody>
                        <tr ng-repeat="name in getdrugnameNewArray">
                          <td>
                            <input
                              name="Name_of_the_crop"
                              onChange={inputEvent}
                              value={fname.Name_of_the_crop}
                              type="text"
                              placeholder="crop"
                            />
                          </td>
                          <td>
                            <input
                              name=" Area_in_Hectares"
                              onChange={inputEvent}
                              value={fname. Area_in_Hectares}
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td>
                            <input
                             name="Year_and_season_of_production"
                             onChange={inputEvent}
                             value={fname.Year_and_season_of_production}
                              type="text"
                              placeholder="2016"
                            />
                          </td>
                          <td>
                            <input
                              name="Method_of_production"
                              onChange={inputEvent}
                              value={fname.Method_of_production}
                              type="text"
                              placeholder="irrigated / Non irrigated"
                            />
                          </td>
                          <td>
                            <input
                              name="Remarks"
                              onChange={inputEvent}
                              value={fname.Remarks}
                              type="text"
                              placeholder="remark"
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
        </div>




        <div className="card ">
          <div className="card-body">
            <div className="row">
              <div className="col ">
                <h6>Seed & Planting Material: </h6>
                <hr />
                <div className="table table-striped table-bordered table-sm">
                  <Table responsive striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th className="col-md-4" name="sno">
                          Sno
                        </th>
                        <th className="col-md-4" name="crop">
                          Name of the crop
                        </th>
                        <th className="col-md-4" name="variety">
                          Variety
                        </th>
                        <th className="col-md-2" name="date">
                          Purchase date of seed
                        </th>
                        <th className="col-md-2" name="sadd">
                          Name of Supplier & Address
                        </th>
                        <th className="col-md-2" name="type">
                          Type of seed (organic, untreated non organic, treated
                          non organic)
                        </th>
                        <th className="col-md-2" name="seedT">
                          Seed Treatment (give details)
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
                              placeholder="treatment details"
                            />
                          </td>
                        <td>
                            <input
                              name="  Variety"
                              onChange={inputEvent}
                              value={fname.Variety}
                              type="text"
                              placeholder="type"
                            />
                          </td>
                          
                          <td>
                            <input
                              name="Name_of_the_crop1"
                              onChange={inputEvent}
                              value={fname.Name_of_the_crop1}
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td>
                            <input
                             name="Purchase_date_of_seed"
                             onChange={inputEvent}
                             value={fname.Purchase_date_of_seed}
                              type="text"
                              placeholder="crop"
                            />
                          </td>
                          <td>
                            <input
                             name="Name_of_Supplier_Address"
                             onChange={inputEvent}
                             value={fname.Name_of_Supplier_Address}
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td>
                            <input
                              name="Type_of_seed"
                              onChange={inputEvent}
                              value={fname.Type_of_seed}
                              type="text"
                              placeholder="2016"
                            />
                          </td>
                          <td>
                            <input
                              name="Seed_Treatment:"
                              onChange={inputEvent}
                              value={fname.Seed_Treatment}
                              type="text"
                              placeholder=""
                            />
                          </td>
                        
                        </tr>
                        <BsDashSquare disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputFields.id)}/>
                    </tbody>
                
                                ))}
                 {/* <BsPlusSquare onClick={handleAddFields}/> */}
                  </Table>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group col-md-6 a-right my-2">
            <Button href="/Soil_Disease">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
        </div>



    </section></>
  )
}

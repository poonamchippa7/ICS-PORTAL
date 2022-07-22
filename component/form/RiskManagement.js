import React,{useState,useEffect} from 'react';

import { BsPlusSquare } from 'react-icons/bs';
import { Form, Button, FormGroup, FormControl, ControlLabel ,Table,Row,Col} from "react-bootstrap";

export default function RiskManagement() {

    const [fname,setName]=useState({
        Neighbouring_non_organic_fields1:"",Neighbouring_non_organic_fields2:"",
            Non_organic_activities_of_same_farm1:"",Non_organic_activities_of_same_farm2:"",
            Industry_motorways_wastewater1:"",Industry_motorways_wastewater2:"",
            Others1:"",Others2:"",
            Extra11:"",Extra12:"",Extra13:"",
            Extra21:"",Extra22:"",Extra23:"",
            Extra31:"",Extra32:"",Extra33:"",
            Measure_taken_to_minimise_the_risk:"",

    
    
      });
      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
        const [inputFields, setInputFields] = useState([
            {  Neighbouring_non_organic_fields1:"",Neighbouring_non_organic_fields2:"",
            Non_organic_activities_of_same_farm1:"",Non_organic_activities_of_same_farm2:"",
            Industry_motorways_wastewater1:"",Industry_motorways_wastewater2:"",
            Others1:"",Others2:"",
            Extra11:"",Extra12:"",Extra13:"",
            Extra21:"",Extra22:"",Extra23:"",
            Extra31:"",Extra32:"",Extra33:"",
            Measure_taken_to_minimise_the_risk:"",
},
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
          useEffect(() => {}, [fname]);

  return (
    <section className="section  mt-4">
       
   
       <div className="container border border-dark" >
           
          {/* <div className="card ">
              <div className="card-body"> */}
                  <div className="row ">
                  {JSON.stringify(fname)}
                      <div className="col  ">
                      <h4>Risk Management</h4>
                      <hr />
                      
            <Table  responsive className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="col-md-1" name= "PlotNo"   >Risk of contamination from</th>
                    <th className="col-md-1" name="Area" >Low/ Med / High</th>
                    <th className="col-md-1" name="MainCrops" >Comments</th>
                    </tr>
                </thead>
               
                <tbody>
                   
                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    Neighbouring non-organic fields
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Neighbouring_non_organic_fields1"
                                                    onChange={inputEvent}
                                                    value={fname.Neighbouring_non_organic_fields1}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                </Form.Group>
                    {/* <input type="text" name=" Neighbouring_non_organic_fields1"  onChange={inputEvent} value={fname. Neighbouring_non_organic_fields1}   placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text" name=" Neighbouring_non_organic_fields2"  onChange={inputEvent} value={fname. Neighbouring_non_organic_fields2} placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>
                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    Non-organic activities of same farm
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Non_organic_activities_of_same_farm1"
                                                    onChange={inputEvent}
                                                    value={fname.Non_organic_activities_of_same_farm1}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                </Form.Group>  
                    {/* <input type="text" name="Non_organic_activities_of_same_farm1"  onChange={inputEvent} value={fname.Non_organic_activities_of_same_farm1}    placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text" name="Non_organic_activities_of_same_farm2"  onChange={inputEvent} value={fname.Non_organic_activities_of_same_farm2}  placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>
                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    Industry, motorways, wastewater, etc.
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Industry_motorways_wastewater1"
                                                    onChange={inputEvent}
                                                    value={fname.Industry_motorways_wastewater1}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                </Form.Group>
                    {/* <input type="text"  name="Industry_motorways_wastewater1"  onChange={inputEvent} value={fname.Industry_motorways_wastewater1}    placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text" name="Industry_motorways_wastewater2"  onChange={inputEvent} value={fname.Industry_motorways_wastewater2}  placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>

                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    Others (specify)
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Others1"
                                                    onChange={inputEvent}
                                                    value={fname.Others1}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                </Form.Group>
                    {/* <input type="text"   name="Others1"  onChange={inputEvent} value={fname.Others1}   placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text" name="Others2"  onChange={inputEvent} value={fname.Others2}  placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>
                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    <input type="text"   name="Extra11"  onChange={inputEvent} value={fname.Extra11}   placeholder="Enter  " />
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Extra12"
                                                    onChange={inputEvent}
                                                    value={fname.Extra12}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                 </Form.Group>
                   {/* <input type="text"   name="Extra12"  onChange={inputEvent} value={fname.Extra12}   placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text" name="Extra13"  onChange={inputEvent} value={fname.Extra13}  placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>
                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    <input type="text"    name="Extra21"  onChange={inputEvent} value={fname.Extra21}  placeholder="Enter  " />
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Extra22"
                                                    onChange={inputEvent}
                                                    value={fname.Extra22}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                </Form.Group>
                    {/* <input type="text"    name="Extra22"  onChange={inputEvent} value={fname.Extra22}  placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text"  name="Extra23"  onChange={inputEvent} value={fname.Extra23} placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>
                <tr ng-repeat="name in getdrugnameNewArray">
                    
                    <td>
                    <input type="text"   name="Extra31"  onChange={inputEvent} value={fname.Extra31}   placeholder="Enter  " />
                    </td>
                    <td>
                    <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm={2}></Form.Label>
                                                <Col sm={5}>
                                                <Form.Select
                                                    name="Extra32"
                                                    onChange={inputEvent}
                                                    value={fname.Extra32}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Med">Med</option>
                                                    <option value="High">High</option>
                                                </Form.Select>
                                                </Col>
                                                </Form.Group>
                    {/* <input type="text"    name="Extra32"  onChange={inputEvent} value={fname.Extra32}  placeholder="Low/ Med / High" /> */}
                    </td>
                    <td>
                    <input type="text" name="Extra33"  onChange={inputEvent} value={fname.Extra33}  placeholder="Enter Remark"></input>
                    </td>
                    
                    
                </tr>
                
                
                 

                </tbody>

            </Table  >
            <Form>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Measure taken to minimise the risk</Form.Label>
                    <Form.Control as="textarea" name="Measure_taken_to_minimise_the_risk"  onChange={inputEvent} value={fname.Measure_taken_to_minimise_the_risk}  rows={3} />
                </Form.Group>
                </Form>
                
            </div>
            
        </div>
       

       



       
<div className="form-group col-md-6 a-right my-2">
            <Button href="/approval1">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>

     
        </div>
  </section>
  )
}

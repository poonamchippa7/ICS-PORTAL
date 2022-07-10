import React ,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Table,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';

export default function Exit_Approval() {
  const [fname,setName]=useState({
    Farmer_Name: "",
    Id_Number: "",
   Address: "",
   Name_of_Grower_group:"",
   Name_of_member: "",  
   ID_number1: "",
   Crops_and_Status: "",
   Start_of_Conversion: "",
   Validity_of_current_certification: "",
   corrective_action1: "",corrective_action2:"",
   Crop1: "",Crop2: "",
   Quantity1:"",Quantity2:"",
   Date:"",
   Place:"",
   Signature:"",
   Seal:""


  });
  const inputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
  };

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(),Farmer_Name: "",
    Id_Number: "",
   Address: "",
   Name_of_Grower_group:"",
   Name_of_member: "",  
   ID_number1: "",
   Crops_and_Status: "",
   Start_of_Conversion: "",
   Validity_of_current_certification: "",
   corrective_action1: "",corrective_action2:"",
   Crop1: "",Crop2: "",
   Quantity1:"",Quantity2:"",
   Date:"",
   Place:"",
   Signature:"",
   Seal:"" },
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
    setInputFields([...inputFields, { id: uuidv4(),  Farmer_Name: "",
    Id_Number: "",
   Address: "",
   Name_of_Grower_group:"",
   Name_of_member: "",  
   ID_number1: "",
   Crops_and_Status: "",
   Start_of_Conversion: "",
   Validity_of_current_certification: "",
   corrective_action1: "",corrective_action2:"",
   Crop1: "",Crop2: "",
   Quantity1:"",Quantity2:"",
   Date:"",
   Place:"",
   Signature:"",
   Seal:"" }])
  }
  
const handleRemoveFields = id => {
const values  = [...inputFields];
values.splice(values.findIndex(value => value.id === id), 1);
setInputFields(values);
}

  
  return (
    <section>
        <div className="container border border-dark my-4">
            <div className="card my-2 ">
              <div className="card-body">
                  <div className="row">
                  
                      <div className="col my-4 ">
                     <h1 className="text-center">EXIT APPROVAL FORMAT FOR A MEMBER FARMER FROM A GROWER GROUP</h1>
                     <h6 className="text-center">(Letter Head, ICS)</h6>
                     <div>To,
                     <div className="form-group col-md-6 d-flex justify-content-start ">
                          <label   name="Name" >Name:  </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Farmer_Name " onChange={inputEvent} value={fname.Farmer_Name}  required="required" placeholder="Enter Your Name"/>

                      </div>
                      <div  className="form-group col-md-6 d-flex justify-content-start ">
                          <label name="ID"  >ID Number:</label>
                         
                          <input className="border-0  border-bottom border-dark  mx-4" type="text" name="Id_Number " onChange={inputEvent} value={fname.Id_Number}  required="required" placeholder="Enter Your ID Number"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-start">
                          <label  name="Address"  >Address: </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Address" onChange={inputEvent} value={fname.Address}   required="required" placeholder="Enter Your Address"/>

                      </div>
                      </div>
                     <br/>
                     <div>
                     <strong>Exit Approval</strong>
                     <div>Your application for exit from the grower group has been accepted by the  <input className="border-0  border-bottom border-dark mx-2 col-md-5" type="text" name="Name_of_Grower_group"  onChange={inputEvent} value={fname.Name_of_Grower_group}  required="required" placeholder="(Responsible authority) (name of Grower group)"/>.<br/>
                       <br/>
                        The details of your certification status as on xx/xx/xxxx is as follows:
                        <div className="form-group col-md-6 d-flex justify-content-between ">
                          <label   name="Name" >Name of member :  </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Name_of_member " onChange={inputEvent} value={fname.Name_of_member}  required="required" />

                      </div>
                      <div  className="form-group col-md-6 d-flex justify-content-between ">
                          <label name="ID"  >ID Number :</label>
                         
                          <input className="border-0  border-bottom border-dark  mx-5" type="text" name="ID_number1" onChange={inputEvent} value={fname.ID_number1}  required="required" />

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Address"  >Crops and Status : </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Crops_and_Status " onChange={inputEvent} value={fname.Crops_and_Status}   required="required" />

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Address"  >Start of Conversion : </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Start_of_Conversion " onChange={inputEvent} value={fname.Start_of_Conversion}   required="required" />

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Address"  >Validity of current certification :</label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Validity_of_current_certification " onChange={inputEvent} value={fname.Validity_of_current_certification}   required="required" />

                      </div>
                        <br/>
                      The corrective action listed by the approval committee and/or by the internal inspector (if any)<br/>
                      <input className="border-0  border-bottom border-dark mx-5 col-md-6" type="text" name="corrective_action1" onChange={inputEvent} value={fname.corrective_action1}   required="required" />
                      <br/>
                      <input className="border-0  border-bottom border-dark mx-5 col-md-6" type="text" name="corrective_action2 " onChange={inputEvent} value={fname.corrective_action2}   required="required"/>
                      <br/>
                      <br/>
                        List of products already sold to ICS and quantity

                        <Table  responsive className="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th className="col-md-1" name= "Crop"   >Crop</th>
                                <th className="col-md-1" name="Quantity" >Quantity</th>
                               
                            </tr>
                        </thead>
                        { inputFields.map(inputField => (
                        <tbody>
                        <tr ng-repeat="name in getdrugnameNewArray">
                    
                   
                        <td>
                        <input type="text" name="Crop1"  oonChange={inputEvent} value={fname.Crop1}   placeholder="Name" />
                        </td>
                        <td>
                        <input type="text" name="Quantity1 "  onChange={inputEvent} value={fname.Quantity1} placeholder="Quantity"/>
                        </td>
                        </tr>
                        <BsDashSquare disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}/>
                    </tbody>
                     ) ) }
                     <BsPlusSquare onClick={handleAddFields}/>
                    </Table>
                       
                    </div>
                     <div className=" d-flex  justify-content-between">
                        <div className="mr-auto p-2 ">
                       <label  name="date" >Date:</label>
                        <input type="date" className="border-0  border-bottom border-dark mx-2" name="Date" onChange={inputEvent} value={fname.Date}  placeholder="Enter Date"/>
                        </div>
                        <div  className="p-2" >
                        <label name="sign"  >(for ICS )Signature:</label>
                        <input type="text" className="border-0  border-bottom border-dark mx-2" name="Signature" onChange={inputEvent} value={fname.Signature} placeholder="Sign here"/>
                        </div>
                        

                    </div>
                    <div className=" d-flex  justify-content-between">
                        <div className="mr-auto p-2 ">
                       <label  name="Place" >Place:</label>
                        <input type="text" className="border-0  border-bottom border-dark mx-2" name="Place" onChange={inputEvent} value={fname.Place}  placeholder="Enter Place"/>
                        </div>
                        <div  className="p-2" >
                        <label name="sign"  >(Seal of Grower Group):</label>
                        <input type="text" className="border-0  border-bottom border-dark mx-2" name="Seal" onChange={inputEvent} value={fname.Seal} />
                        </div>
                        

                    </div>
                     </div>
                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group col-md-6 a-right my-2">
            <Button href="/">Submit</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
        </div>
    </section>
  )
}

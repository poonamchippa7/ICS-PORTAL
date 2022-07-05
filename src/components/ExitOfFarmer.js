import React ,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Table,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
//import { getAllUsers, createUser } from './services/UserService';

export default function ExitOfFarmer() {

    const [fname,setName]=useState({
        Farmer_Name: "",
        Id_Number: "",
       Address: "",
       ICS_Incharge1:"",ICS_Incharge2:"",ICS_Incharge3:"",
       Name_of_the_grower_group: "",  
       Reason1: "",Reason2: "",Reason3: "",
       New_certification_body: "",
       Date: "",
      Signature: "",
      
    
      });
      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
    
      const [inputFields, setInputFields] = useState([
        { id: uuidv4(),Farmer_Name: "",
        Id_Number: "",
       Address: "",
       ICS_Incharge1:"",ICS_Incharge2:"",ICS_Incharge3:"",
       Name_of_the_grower_group: "",  
       Reason1: "",Reason2: "",Reason3: "",
       New_certification_body: "",
       Date: "",
      Signature: "", },
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
        setInputFields([...inputFields, { id: uuidv4(), Farmer_Name: "",
        Id_Number: "",
       Address: "",
       ICS_Incharge1:"",ICS_Incharge2:"",ICS_Incharge3:"",
       Name_of_the_grower_group: "",  
       Reason1: "",Reason2: "",Reason3: "",
       New_certification_body: "",
       Date: "",
      Signature: "", }])
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
                <h1 >APPLICATION FORMAT FOR EXIT OF FARMER FROM ICS

                </h1>
                <hr/>
                <div>
                    <p><strong>From </strong>(Member of Farmer Group under certification)</p>
                    <div className="form-group col-md-6 d-flex justify-content-start ">
                          <label   name="Name" >Name:  </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Farmer_Name "  onChange={inputEvent} value={fname.Farmer_Name}   required="required" placeholder="Enter Your Name"/>

                      </div>
                      <div  className="form-group col-md-6 d-flex justify-content-start ">
                          <label name="ID"  >ID Number:</label>
                         
                          <input className="border-0  border-bottom border-dark  mx-4" type="text" name="Id_Number " onChange={inputEvent} value={fname.Id_Number}    required="required" placeholder="Enter Your ID Number"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-start">
                          <label  name="Address"  >Address: </label>
                         
                          <input className="border-0  border-bottom border-dark mx-5" type="text" name="Address "  onChange={inputEvent} value={fname.Address}   required="required" placeholder="Enter Your Address"/>

                      </div>

                </div>
                <br/>
                <div>
                    <p><strong>To </strong>(The ICS Incharge)</p>
                    <div className="form-group col-md-6 d-flex justify-content-start ">
                          
                         
                          <input className="border-0  border-bottom border-dark mx-3" type="text" name=" ICS_Incharge1 " onChange={inputEvent} value={fname.ICS_Incharge1}   required="required" placeholder="Enter Your Name"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-start">
                          
                         
                          <input className="border-0  border-bottom border-dark mx-3" type="text" name=" ICS_Incharge2 "  onChange={inputEvent} value={fname. ICS_Incharge2}   required="required" placeholder="Enter Your ID Number"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-start">
                         
                         
                          <input className="border-0  border-bottom border-dark mx-3" type="text" name=" ICS_Incharge3 " onChange={inputEvent} value={fname. ICS_Incharge3}   required="required" placeholder="Enter Your Address"/>

                      </div>

                </div>
                <br/>
                <div>
                    
                    <h5 className="text-center">Sub:- Request letter for exit from ICS</h5><br/>
                    <strong>Dear Sir, </strong><br/>
                    <p>I am not interested to continue with the<input className="border-0  border-bottom border-dark mx-2" type="text" name="Name_of_the_grower_group "  onChange={inputEvent} value={fname. Name_of_the_grower_group}  required="required" placeholder="Enter name of the grower group"/>under organic certification for the following reasons:</p>
                    <input className="border-0  border-bottom border-dark  col-md-10" type="text" name="Reason1 " onChange={inputEvent} value={fname.Reason1}   required="required" placeholder="Reason1"/><br/>
                    <input className="border-0  border-bottom border-dark  col-md-10" type="text" name="Reason2 " onChange={inputEvent} value={fname.Reason2}   required="required" placeholder="Reason 2"/><br/>
                    <input className="border-0  border-bottom border-dark  col-md-10" type="text" name="Reason3 " onChange={inputEvent} value={fname.Reason3}   required="required" placeholder="Reason 3"/>
                    <p>Hence kindly allow me to exit from the grower group during the renewal of certification of this group</p><br/>
                    <p><br/>Also kindly forward the details of my certification status as on the date of my exit, to
                       <input className="border-0  border-bottom border-dark mx-2" type="text" name="New_certification_body " onChange={inputEvent} value={fname.New_certification_body}    required="required" />
                       who are the new certification body under which I intended to be certified</p>
                    <p className="text-end  mx-5">Yours faithfully</p>
                    <div className=" d-flex  justify-content-between">
                        <div className="mr-auto p-2 ">
                       <label  name="date" >Date:</label>
                        <input type="date" className="border-0  border-bottom border-dark mx-2" name=" Date" onChange={inputEvent} value={fname.Date} placeholder="Enter Date"/>
                        </div>
                        <div  className="p-2" >
                        <label name="sign"  >Signature of the farmer:</label>
                        <input type="text" className="border-0  border-bottom border-dark mx-2" name=" Signature" onChange={inputEvent} value={fname.Signature} placeholder="Sign here"/>
                        </div>

                    </div>




                    </div>
                

                </div>
                </div>

            </div>
            
        </div>
        <div className="form-group col-md-6 a-right my-2">
            <Button href="/">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
        </div>
    </section>
  )
}


import React ,{useState,useEffect} from 'react';
import Axios from "axios";

import {Table,Dropdown,Button,Form,Row,Col} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function FarmersContract() {

  const [fname,setName]=useState({
    Name_of_the_ICS: "",
    Farmers_name_Code_No: "",
    Date_of_Inspection: "",
    Village_Taluka_Block:"",
    Farmer_Present_during_Inspection: "",  
    Total_area: "",
    Organic_Area: "",
    Number_of_plots: "",
   Plot_No: "",
    Area: "",
    Main_Crops: "",
    Inter_Crops:"",
    Use_of_Inputs:"",
    Total_Plots:"",


  });
  const inputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
  };
    const [inputFields, setInputFields] = useState([
        {  PlotNo:"" , Area:"", MainCrops:"",Intercrops:"",UseIn:"",FName:"",FId:"",IIns:"",D:"",VTB:"",FPr:"",TA:"",OA:"",NPlots:"" },
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

  return (<>
    <section className="section">
       
   
    <div className="container border border-dark my-2" >
        
       <div className="card my-2 ">
           <div className="card-body">
               <div className="row">
               {JSON.stringify(fname)}
                   <div className="col  ">
                    <div className="text-center">
                   <h3>FARMERS CONTRACT WITH ICS</h3>
                  
                <h5 ><input className=" text-center border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder="Name of the ICS " required="required"/></h5>
                
                  and
                <h5 ><input className=" text-center  border-0  border-bottom  mx-5 w-50 my-2" type="text"  name="Farmers_name_Code_No "  onChange={inputEvent} value={fname.Farmers_name_Code_No} placeholder="Farmers name & Code No. " required="required"/></h5>
                </div>
                <div>
                <br/>
                  <h5>The ICS shall:</h5>
                  <br/>
                  
                    <ol>
                    
                    <li>Be responsible for co-ordinating the project and organic certification from an 
accredited organic certification body.</li><br/>
                    <li>Advise farmers on the organic farming methods and organize farmer training 
programmes</li><br/>
                    <li>Conduct the internal inspections and approval of organic farmers</li><br/>
                    <li>Buy the organic crop at the prevailing market price plus any possible organic 
premium (depending on market). The ICS shall make the payments within one 
week of the purchase of the products from the farmer</li><br/>
                    <li>Entertain the complaints and appeals of the farmers and do justification within 
reasonable time.</li><br/>
                    </ol>
                  
                </div>
                <div>
                  <h5>The farmer shall:</h5>
                  <ol>
                    <li>Undertake organic farming as per the organic standards outlined in the Internal 
Organic Standard as well as the Internal Control System (ICS).</li><br/>
                    <li>Not use pesticides, herbicides or synthetic fertilisers on any crop within the 
certified organic fields.</li><br/>
                    <li>Attend all the training programmes organized by the Internal Control System.</li><br/>
                    <li>Maintain the farm records in the required format.</li><br/>
                    <li>Fulfil the conditions enforced by the internal control system and the accredited
certification body.</li><br/>
                    <li>Endeavour to maintain and improve the ecosystem by not cutting trees and 
burning organic material and littering plastic wastes unnecessarily</li><br/>
                    <li>Sell the certified products to the Internal Control System only.</li><br/>
                    <li>In case of any violation of the organic standards in the project, the same shall be 
reported to the ICS.</li><br/>
                    <li>Accept the sanctions prescribed by the ICS in case of violations of the internal 
standards by the farmer.</li><br/>
                    <li>Shall allow inspections by persons authorised by ICS and the inspector of the 
accredited Certification Body and give access to the fields, stores and documents.</li><br/>

                  </ol>
                </div><br/>
                <div>
                  <Form >

                  <Row className="mb-3 my-2 d-flex justify-content-between">
                    <Form.Group as={Col} controlId="formGridCity">
                     <h5 className="text-center">Farmer</h5><br/>
                      <lable>Signature:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                      <lable>Name:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                      <lable>Place:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                      <lable>Date:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="date"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                    
                    </Form.Group>

                    <Form.Group as={Col} >
                    <h5 className="text-center">For ICS</h5><br/>
                      <lable>Signature:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                      <lable>Name:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder="" required="required"/>
                      <br/>
                      <lable>Stamp:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="text"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                      <lable>Date:</lable>
                      <input className="  border-0  border-bottom  mx-5 w-50 my-2 " type="date"  name="Name_of_the_ICS "  onChange={inputEvent} value={fname.Name_of_the_ICS} placeholder=" " required="required"/>
                      <br/>
                      
                    </Form.Group>

                    
                  </Row>

                    </Form>

                </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="form-group col-md-6 a-right my-2">
            <Button href="/FarmDairy">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
      </div>
    </section>
    </>

  )
}

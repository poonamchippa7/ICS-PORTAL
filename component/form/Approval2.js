import React ,{useState,useEffect} from 'react';

import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Approval2() {
    const [fname,setName]=useState({
      approved_without_conditions:"",
      approved_with_conditions:"",
      not_approved:"",
      Additional_conditions_or_sanctions:"",
      Date3:"",
      Signature_Approval_Manager:"",
     
     
       });
 
       const inputEvent=(event)=>{
         console.log(event.target.value);
         setName(event.target.value);
       };
         const [inputFields, setInputFields] = useState([
             {  approved_without_conditions:"",
             approved_with_conditions:"",
             not_approved:"",
             Additional_conditions_or_sanctions:"",
             Date3:"",
             Signature_Approval_Manager:"", },
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
    <section className='section mt-4'>
        <div className="container border border-dark " >
        {JSON.stringify(fname)}
        <div className="row ">
        

        <div className="col  ">
            <h4>Approval Decision</h4>
            <div className="compliance border  border-dark  my-4 " >
                <h6 className="mx-3">Compliance this year</h6>
                <Form>
                {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3 mx-3">
                    <Form.Check
                        inline
                        label="approved without conditions"
                        name="approved_without_conditions"
                        onChange={inputEvent} value={fname.approved_without_conditions} 
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                         inline
                        label="approved with conditions"
                        name="approved_with_conditions"
                        onChange={inputEvent} value={fname.approved_with_conditions} 
                         type={type}
                         id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        name="not_approved"
                        onChange={inputEvent} value={fname.not_approved} 
                        label="not approvede"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    
                    </div>
                ))}
                </Form>
                
                <hr/>

                <Form>
                
                <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlTextarea1 border border-solid">
                    <Form.Label>Additional conditions or sanctions:</Form.Label>
                    <Form.Control name="Additional_conditions_or_sanctions"  onChange={inputEvent} value={fname.Additional_conditions_or_sanctions}  as="textarea" rows={3} />
                </Form.Group>
                </Form>
                <hr/>
                <Form>
                
                <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlTextarea1 border border-solid">
                    <Form.Label>Date & Signature Approval Manager</Form.Label>
                    <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Date3" >Date </label>
                          
                          <input className="w-50 my-2" type="date"  name="Date3"  onChange={inputEvent} value={fname.Date3} placeholder="Enter Date "required="required"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Signature_Approval_Manager" >Signature Approval Manager </label>
                          
                          <input className="w-50 my-2" type="text"  name="Signature_Approval_Manager"  onChange={inputEvent} value={fname.Signature_Approval_Manager} placeholder="Sign here" required="required"/>

                      </div>
                </Form.Group>
                </Form>

            </div>
        </div>
        </div>
        <div className="form-group col-md-6 a-right my-2">
            <Button href="/Anex6">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>


        </div>
    </section>
  )
}

import React, {useState}from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Approval1() {
    const [fname,setName]=useState({
      Good:"",
      Partially_Acceptable:"",
      Missing_not_Acceptable:"",
      no_conditions:"",
      Comments_by_internal_inspector:"",
    
      });

      const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
      };
        const [inputFields, setInputFields] = useState([
            { id: uuidv4(),  Good:"",
            Partially_Acceptable:"",
            Missing_not_Acceptable:"",
            no_conditions:"",
            Comments_by_internal_inspector:"", },
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
        
        


  return (
    <section className='section mt-4'>
        <div className="container border border-dark " >
        <div className="row ">
        <div className="col  ">
            <h4>Approval / Recommendations of the internal inspector (whole farm)</h4>
            <div className="compliance border  border-dark  my-4 " >
                <h6 className="mx-3">Compliance with previous conditions</h6>
                <Form>
                {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3 mx-3">
                    <Form.Check
                          name="Good"  onChange={inputEvent} value={fname.Good} 
                        inline
                        label="good"
                       
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                         name="Partially_Acceptable"  onChange={inputEvent} value={fname.Partially_Acceptable} 
                         inline
                        label="partially/acceptable"
                        
                         type={type}
                         id={`inline-${type}-2`}
                    />
                    <Form.Check
                         name=" Missing_not_Acceptable"  onChange={inputEvent} value={fname. Missing_not_Acceptable} 
                        inline
                        
                        label="missing/not acceptable"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    <Form.Check
                         name="no_conditions"  onChange={inputEvent} value={fname.no_conditions} 
                        inline
                       
                        label="no conditions"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    
                    </div>
                ))}
                </Form>
                <h6 className="mx-3">Last year</h6>
                <hr/>

                <Form>
                
                <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlTextarea1 border border-solid">
                    <Form.Label>Comments by internal inspector</Form.Label>
                    <Form.Control name="Comments_by_internal_inspector"  onChange={inputEvent} value={fname.Comments_by_internal_inspector}  as="textarea" rows={3} />
                </Form.Group>
                </Form>
                
            </div>
        </div>
        </div>
        <div className="form-group col-md-6 a-right my-2">
            <Button href="/Declaration">Submit</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>


        </div>
    </section>
  )
}

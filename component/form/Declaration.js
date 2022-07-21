import React ,{useState,useEffect} from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel,Row,Col } from "react-bootstrap";

export default function Declaration(){ 
    const [fname,setName]=useState({
        Date1: "",
            Date2:"",
            Signature_Farmer:"",
            Signature_Internal_Inspector:"",
       
       
         });
   
         const inputEvent=(event)=>{
           console.log(event.target.value);
           setName(event.target.value);
         };
           const [inputFields, setInputFields] = useState([
               {  Date1: "",
               Date2:"",
               Signature_Farmer:"",
               Signature_Internal_Inspector:"", },
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
    <>
      
      <section className='section mt-4'>
        <div className="container border border-dark " >
        {JSON.stringify(fname)}
        <div className="row ">
        
        <div className="col  ">
            <h4>Declaration</h4>
            <div className="compliance border  border-dark  my-4 " >
                <p>The farmer herewith confirms that he/she has complied with the internal organic standard and has declared all used inputs activities as stated in this form. The farmer has noted the set conditions.</p>
                <Form className="mb-3 mx-3" >
                
                
                    {/* <div className="d-flex justify-content-between"> */}
                    <Row>
                        <Col>
                    <div className="form-group col-md-6 mx-2">
                          <label  name="Date1" >Date : </label>
                          
                          <input className="w-50 mx-2 " type="date"  name="Date1"  onChange={inputEvent} value={fname.Date1}  placeholder="Enter Date "required="required"/>

                      </div>
                      </Col>
                      <Col>
                      <div className="form-group col-md-6 mx-2  ">
                          <label  name="Date2" >Date :</label>
                          
                          <input className="w-50  mx-2 " type="date"  name="Date2"  onChange={inputEvent} value={fname.Date2}  placeholder="Enter Date "required="required"/>

                      </div>
                      </Col>
                      
                      </Row>
                      {/* </div> */}
                      {/* <div className="form-group col-md-6 "> */}
                      <Row>
                        
                        <Col>
                      <div className="form-group col-md-6  mx-2 my-2">
                          <label  name="    Signature_Farmer " > Signature Farmer :</label>
                          
                          <input className="w-50 mx-2 my-2" type="text"  name=" Signature_Farmer"  onChange={inputEvent} value={fname.Signature_Farmer}  placeholder="Sign here" required="required"/>

                      </div>
                      </Col>
                      <Col>
                      <div className="form-group col-md-6 mx-2 my-2">
                          <label  name="Signature_Internal_Inspector " >Signature Internal Inspector :</label>
                          
                          <input className="w-50  mx-2  my-2"  type="text"  name="Signature_Internal_Inspector"  onChange={inputEvent} value={fname.Signature_Internal_Inspector}  placeholder="Sign here" required="required"/>

                      </div>
                      </Col>
                      
                      
                      </Row>
                      {/* </div> */}
                     
                
                </Form>
                </div>
                
        </div>
        </div>
        <div className="form-group col-md-6 a-right my-2">
            <Button href="/approval2">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>


        </div>
    </section>
    </>
    )};



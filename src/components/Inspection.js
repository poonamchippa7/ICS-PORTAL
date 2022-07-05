import React ,{useState} from 'react';
import Axios from "axios";
 import { v4 as uuidv4 } from 'uuid';
import {Table,Dropdown,Button} from "react-bootstrap";
import { BsPlusSquare ,BsDashSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";


const Inspection = () => {

  const url="";
  const [fname,setName]=useState({
    Farmer_Id: "",
    Internal_Inspector: "",
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
        { id: uuidv4(), PlotNo:"" , Area:"", MainCrops:"",Intercrops:"",UseIn:"",FName:"",FId:"",IIns:"",D:"",VTB:"",FPr:"",TA:"",OA:"",NPlots:"" },
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
        setInputFields([...inputFields, { id: uuidv4(),  PlotNo:"" , Area:"", MainCrops:"",Intercrops:"",UseIn:"" }])
      }
      
    const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
    }

    function submit(event){
      event.preventDefault();
      Axios.post(url,{
        Farmer_Id :fname.Farmer_Id,
        Internal_Inspector : fname.Internal_Inspector,
        Date_of_Inspection : fname.Date_of_Inspection,
        Village_Taluka_Block : fname.Village_Taluka_Block,
        Farmer_Present_during_Inspection  : fname.Farmer_Present_during_Inspection,
        Total_area : fname.Total_area,
        Organic_Area : fname.Organic_Area,
        Number_of_plots : fname.Number_of_plots,
      Plot_No : fname.Plot_No,
        Area : fname.Area,
        Main_Crops : fname.Main_Crops,
        Inter_Crops : fname.Inter_Crops,
        Use_of_Inputs : fname.Use_of_Inputs,
        Total_Plots : fname.Total_Plots,

    })
      .then(res=>{
          console.log(res.fname)
      })

     
    }
    

return(
    <>
     <section className="section">
       
   
       <div className="container border border-dark" >
           
          <div className="card ">
              <div className="card-body">
                  <div className="row">
                  
                      <div className="col ">
                      <h4>INTERNAL INSPECTION CHECKLIST</h4>
                      <hr />
                      
                      <div className="form-group col-md-6 d-flex justify-content-between "  >
                      
                          <h6></h6>
                      
                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between " onSubmit={(inputEvent) =>submit(inputEvent)}>
                          <label name="Farmer_Id:"  >Farmer ID</label>
                         
                          <input className="w-50 my-2" type="text"  name="Farmer_Id: "  onChange={inputEvent} value={fname.Farmer_Id} placeholder="Enter Farmer’s Id " required="required"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Internal_Inspector" >Internal Inspector:</label>
                         
                          <input className="w-50 my-2"   type="text"  name="Internal_Inspector"  onChange={inputEvent} value={fname.Internal_Inspector} placeholder="Enter inspector's name " required="required"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Date_of_Inspection" >Date of Inspection</label>
                          
                          <input className="w-50 my-2" type="date"  name="Date_of_Inspection"  onChange={inputEvent} value={fname.Date_of_Inspection} placeholder="Enter Date "required="required"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label name="Village_Taluka_Block" >Village/Taluka/Block:</label>
                          
                          <input className="w-50 my-2" type="text" name="Village_Taluka_Block"  onChange={inputEvent} value={fname.Village_Taluka_Block} placeholder="Enter  "required="required"/>

                      </div>
                     <div className="form-group col-md-6 d-flex justify-content-between">
                      <label name=" Farmer_Present_during_Inspection" >Farmer Present during Inspection</label>
                          
                          <input className="w-50 my-2" type="text" name="Farmer_Present_during_Inspection"  onChange={inputEvent} value={fname.Farmer_Present_during_Inspection}  placeholder="Enter Yes/No " required="required"/>

                      </div>
                     
                      
                     
                      </div>
                      
                  </div>
               
                 
              </div>
          </div> 



          <div className="card ">
              <div className="card-body">
                  <div className="row">
                 
                      <div className="col ">
                      <h6>Farm details (all plots, incl. nonorganic plots)</h6>
                      <hr />
                     
                      <div className="form-group col-md-6 d-flex justify-content-between"  >
                          <label className="control-label col-xs-3 mx-4rem" name=" Total_area" >Total area</label>
                          
                          <input className="w-50 my-2" type="text" name=" Total_area"  onChange={inputEvent} value={fname. Total_area} placeholder="Ha" required="required" />

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label name="Organic_Area">Organic Area</label>
                         
                          <input className="w-50 my-2" type="text" name="Organic_Area"  onChange={inputEvent} value={fname.Organic_Area}  placeholder="Ha " required="required"/>

                      </div>
                      <div className="form-group col-md-6 d-flex justify-content-between">
                          <label  name="Number_of_plots">Number of plots</label>
                         
                          <input className="w-50 my-2" type="text" name="Number_of_plots"  onChange={inputEvent} value={fname.Number_of_plots}  placeholder="enter number of plots " required="required"/>
                      </div>
                       
                      </div>
                  </div>
                 
              </div>
            </div>
            <div>
        <Table  responsive className="table border border-solid table-hover">
<thead>
  <tr>
    <th className="col-md-1" name= "PlotNo"   >Plot No.</th>
    <th className="col-md-1" name="Area" >Area</th>
    <th className="col-md-1" name="MainCrops" >Main crops</th>
    <th className="col-md-1" name="Intercrops" >Intercrops</th>
    <th className="col-md-5" name="UseIn" > 
    <h5>
      Use of Inputs incl. Seeds (last year)</h5> <hr/>
       Product, Quantity, Date</th>
   
  </tr>
</thead>
{ inputFields.map(inputField => (
<tbody>
  <tr ng-repeat="name in getdrugnameNewArray">
    
    <td>
      <input   type="text"  name="Plot_No"  onChange={inputEvent} value={fname.Plot_No} placeholder="Enter Plot number" />
    </td>
    <td>
      <input type="text"    name="Area"  onChange={inputEvent} value={fname.yearc}  placeholder="Enter  Area" />
    </td>
    <td>
      <input type="text"   name="Main_Crops"  onChange={inputEvent} value={fname.Main_Crops}  placeholder="Enter  Main crops" />
    </td>
    <td>
      <input type="text"   name="Inter_Crops"  onChange={inputEvent} value={fname.Inter_Crops} placeholder="Enter  intercrops" />
    </td>
    <td>
      <input type="text"    name="Use_of_Inputs"  onChange={inputEvent} value={fname.Use_of_Inputs}  placeholder="Enter  use" />
    </td>
  </tr>
  <BsDashSquare disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}/>

</tbody>

) ) }

<BsPlusSquare onClick={handleAddFields}/>


</Table>
<Table  responsive className="table table-bordered table-hover">
  <thead>
<tr >
    <th className="col-md-4  square border"    >Total Plots</th>
    
   
  </tr>
  <tr ng-repeat="name in getdrugnameNewArray square border" >
  <td>
      <input  type="text" placeholder="Enter Plot number" name="UTotal_Plots"  onChange={inputEvent}  value={fname.Total_Plots} />
    </td>
    
  <td>
      <input  type="text" placeholder="Enter  Area" />
    </td>
    <td>
      <input  type="text" placeholder="Enter  Main crops" />
    </td>
    <td>
      <input  type="text" placeholder="Enter  intercrops" />
    </td>
    <td>
      <input  type="text" placeholder="Enter  use" />
    </td>
  </tr>
  </thead>
  </Table  >
            </div>
            <div className="form-group col-md-6 a-right my-2">
            <Button href="/checkpoint">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
       </div>



       
 

     
  
  </section>
    </>

);
}
export default Inspection;

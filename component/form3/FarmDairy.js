import react ,{ useState,useEffect } from "react";

import { Form, Table,Button, FormLabel } from "react-bootstrap";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";

export default function FarmDairy() {

  const [fname,setName]=useState({
    Year_of_the_Current_Crop: "",
    Season: "",
    Farmer_Name: "",
    Code_No:"",
    Farm_Unit: "",  
    Address_of_the_Unit: "",
    Year_on_which_organic_production_was_started_by_the_farmer: "",
    Date_on_which_farmer_joins_the_ICS: "",
    Total_land: "",
    No_of_farms_plots: "",
    Present_production_technique: "",
    Crops_under_organic_production_and_their_area:"",
    Other_crops:"",
    Certification_Status :"",
    Name_of_the_accredited_Certification_Body:""


  });
  const inputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
  };
    const [inputFields, setInputFields] = useState([
        {  Year_of_the_Current_Crop: "",
        Season: "",
        Farmer_Name: "",
        Code_No:"",
        Farm_Unit: "",  
        Address_of_the_Unit: "",
        Year_on_which_organic_production_was_started_by_the_farmer: "",
        Date_on_which_farmer_joins_the_ICS: "",
        Total_land: "",
        No_of_farms_plots: "",
        Present_production_technique: "",
        Crops_under_organic_production_and_their_area:"",
        Other_crops:"",
        Certification_Status :"",
        Name_of_the_accredited_Certification_Body:"" },
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
        setInputFields([...inputFields, {   Year_of_the_Current_Crop: "",
        Season: "",
        Farmer_Name: "",
        Code_No:"",
        Farm_Unit: "",  
        Address_of_the_Unit: "",
        Year_on_which_organic_production_was_started_by_the_farmer: "",
        Date_on_which_farmer_joins_the_ICS: "",
        Total_land: "",
        No_of_farms_plots: "",
        Present_production_technique: "",
        Crops_under_organic_production_and_their_area:"",
        Other_crops:"",
        Certification_Status :"",
        Name_of_the_accredited_Certification_Body:"" }])
      }
      
    const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
    }
 
    
useEffect(() => {}, [fname]);
  

  return (
    <section className="section">
       
   
    <div className="container border border-dark" >
        
       <div className="card ">
           <div className="card-body">
               <div className="row">
               {JSON.stringify(fname)}
                   <div className="col  ">
                <h4 className="text-center">FARM DIARY (for ICS)</h4>
                <hr/>
                <div >
                  <div className="form-group col-md-6 d-flex justify-content-between">
                  <label >Year of the Current Crop  : </label>
                  <input
                   input className="w-50 my-2 mx-2"   type="text"
                    placeholder="Enter year "
                    name="Year_of_the_Current_Crop"
                    required="required"
                    onChange={inputEvent}
                    value={fname.Year_of_the_Current_Crop}
                  />
                  
                  </div>
                  <br/>
                  <div className="form-group col-md-6 d-flex justify-content-between ">
                  <Form>
                    {["checkbox"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="form-group col-md-6 d-flex justify-content-between "
                      >
                        <FormLabel>Season:</FormLabel>
                        <Form.Check
                          inline
                          label="Rabi"
                          name="Season"
                          type={type}
                          onChange={inputEvent}
                          value={fname.Season}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Kharif"
                          name="Season"
                          type={type}
                          onChange={inputEvent}
                          value={fname.Season}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Annual"
                          name="Season"
                          type={type}
                          onChange={inputEvent}
                          value={fname.Season}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Other"
                          name="Season"
                          type={type}
                          onChange={inputEvent}
                          value={fname.Season}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Form>
                  </div>
                </div>
                <hr />
                <div className="form-group col-md-6 d-flex justify-content-between ">
                  <label htmlFor="">Name of the farmer</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Farmer’s name  "
                    name=" Farmer_Name"
                    onChange={inputEvent}
                    value={fname. Farmer_Name}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between ">
                  <label htmlFor="">Code No</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Farmer’s Id "
                    name="Code_No"
                    onChange={inputEvent}
                    value={fname.Code_No}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">Name of the farm Unit</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter inspector's name "
                    name="Farm_Unit"
                    onChange={inputEvent}
                    value={fname.Farm_Unit}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">Address of the Unit</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Date "
                    name="Address_of_the_Unit"
                    onChange={inputEvent}
                    value={fname.Address_of_the_Unit}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">
                    Year on which organic production was started by the farmer
                  </label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter "
                    name="Year_on_which_organic_production_was_started_by_the_farmer"
                    onChange={inputEvent}
                    value={fname.Year_on_which_organic_production_was_started_by_the_farmer}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">Date on which farmer joins the ICS</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Yes/No "
                    name="Date_on_which_farmer_joins_the_ICS"
                    onChange={inputEvent}
                    value={fname.Date_on_which_farmer_joins_the_ICS}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">Total land (acre)</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Yes/No "
                    name="Total_land"
                    onChange={inputEvent}
                    value={fname.Total_land}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">No. of farms / plots</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter number "
                    name="No_of_farms_plots"
                    onChange={inputEvent}
                    value={fname.No_of_farms_plots}
                    required="required"
                  />
                </div>
                <Form>
                  {["checkbox"].map((type) => (
                    <div
                      // key={`inline-${type}`}
                      className="form-group col-md-6 d-flex justify-content-between flex-wrap"
                    >
                      Present production technique :
                      <Form.Check
                        inline
                        label="Fully chemical"
                        name="Present_production_technique"
                        onChange={inputEvent}
                        value={fname.Present_production_technique}
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Part organic –split"
                        name="Present_production_technique"
                        onChange={inputEvent}
                        value={fname.Present_production_technique}
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Part 
                          Organic –parallel "
                          name="Present_production_technique"
                          onChange={inputEvent}
                          value={fname.Present_production_technique}
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Fully organic "
                        name="Present_production_technique"
                        onChange={inputEvent}
                        value={fname.Present_production_technique}
                        type={type}
                        id={`inline-${type}-4`}
                      />
                      <Form.Check
                        inline
                        label="Other"
                        name="Present_production_technique"
                        onChange={inputEvent}
                        value={fname.Present_production_technique}
                        type={type}
                        id={`inline-${type}-5`}
                      />
                    </div>
                  ))}
                </Form>

                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">
                    Crops under organic production and their area
                  </label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Name "
                    name="Crops_under_organic_production_and_their_area"
                    onChange={inputEvent}
                    value={fname.Crops_under_organic_production_and_their_area}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 d-flex justify-content-between">
                  <label htmlFor="">Other crops (name and area)</label>

                  <input
                    className="w-50 my-2"
                    type="text"
                    placeholder="Enter Yes/No "
                    name="Other_crops"
                    onChange={inputEvent}
                    value={fname.Other_crops}
                    required="required"
                  />
                </div>
                <div className="flex-wrap">
                  <Form>
                    {["checkbox"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="form-group col-md-6 d-flex justify-content-between "
                      >
                        Certification Status :
                        <Form.Check
                          inline
                          label="Registered ICS"
                          name="Certification_Status"
                          onChange={inputEvent}
                        value={fname.Certification_Status}
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="In conversion"
                          name="Certification_Status"
                          onChange={inputEvent}
                        value={fname.Certification_Status}
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Certified "
                          name="Certification_Status"
                          onChange={inputEvent}
                        value={fname.Certification_Status}
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="Other"
                          name="Certification_Status"
                          onChange={inputEvent}
                        value={fname.Certification_Status}
                          type={type}
                          id={`inline-${type}-4`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group col-md-6 a-right my-2">
            <Button href="/Farm_Seed">Next</Button> 

            {/* //<Link to="/checkpoint">Next</Link> */}
           
        </div>
                      </div>
   

        
           

      
    </section>
  );
}



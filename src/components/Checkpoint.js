import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import Dropdown from 'react-dropdown';
import { Table, Dropdown, Button } from "react-bootstrap";




export default function Checkpoint() {

    const [fname, setName] = useState({
        Living_Condition1: "", Living_Condition2: "",
        Animals_fed_with_organic_or_non_organic_feed1: "", Animals_fed_with_organic_or_non_organic_feed2: "",
        No_medication_without_veterinary_prescription1: "", No_medication_without_veterinary_prescription2: "",
        Whole_farm_is_managed_organically1: "", Whole_farm_is_managed_organically2: "",
        conventional_plots_clearly_separate_from_organic_plots1: "", conventional_plots_clearly_separate_from_organic_plots2: "",
        organic_crop_is_not_grown_on_non_organic_plots1: "", organic_crop_is_not_grown_on_non_organic_plots2: "",
        Seeds_and_planting_material_used1: "", Seeds_and_planting_material_used2: "",
        Farmer_trained_in_organic_standards1: "", Farmer_trained_in_organic_standards2: "",
        Farmer_aware_of_internal_organic_standard1: "", Farmer_aware_of_internal_organic_standard2: "",
        General_assessment_of_the_farm_with_regard_to_sustainability1: "", General_assessment_of_the_farm_with_regard_to_sustainability2: "",
        Burning_of_crop_residues1: "", Burning_of_crop_residues2: "",
        Border_and_prevention_of_drift1: "", Border_and_prevention_of_drift2: "",
        Weed_control1: "", Weed_control2: "",
        Pest_Management1: "", Pest_Management2: "",
        Disease_Management1: "", Disease_Management2: "",
        Prevention_of_erosion1: "", Prevention_of_erosion2: "",
        Cleanliness_of_the_farm1: "", Cleanliness_of_the_farm2: "",
        Implementation_of_all_required_activities1: "", Implementation_of_all_required_activities2: "",
        General_assessment_of_crop1: "", General_assessment_of_crop2: "",
        Yield_estimate1: "", Yield_estimate2: "",
        Harvesting1: "", Harvesting2: "",
        Processing1: "", Processing2: "",
        Storage1: "", Storage2: "",
        Transportation1: "", Transportation2: "",



    });
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const [inputFields, setInputFields] = useState([
        {
            id: uuidv4(), Living_Condition1: "", Living_Condition2: "",
            Animals_fed_with_organic_or_non_organic_feed1: "", Animals_fed_with_organic_or_non_organic_feed2: "",
            No_medication_without_veterinary_prescription1: "", No_medication_without_veterinary_prescription2: "",
            Whole_farm_is_managed_organically1: "", Whole_farm_is_managed_organically2: "",
            conventional_plots_clearly_separate_from_organic_plots1: "", conventional_plots_clearly_separate_from_organic_plots2: "",
            organic_crop_is_not_grown_on_non_organic_plots1: "", organic_crop_is_not_grown_on_non_organic_plots2: "",
            Seeds_and_planting_material_used1: "", Seeds_and_planting_material_used2: "",
            Farmer_trained_in_organic_standards1: "", Farmer_trained_in_organic_standards2: "",
            Farmer_aware_of_internal_organic_standard1: "", Farmer_aware_of_internal_organic_standard2: "",
            General_assessment_of_the_farm_with_regard_to_sustainability1: "", General_assessment_of_the_farm_with_regard_to_sustainability2: "",
            Burning_of_crop_residues1: "", Burning_of_crop_residues2: "",
            Border_and_prevention_of_drift1: "", Border_and_prevention_of_drift2: "",
            Weed_control1: "", Weed_control2: "",
            Pest_Management1: "", Pest_Management2: "",
            Disease_Management1: "", Disease_Management2: "",
            Prevention_of_erosion1: "", Prevention_of_erosion2: "",
            Cleanliness_of_the_farm1: "", Cleanliness_of_the_farm2: "",
            Implementation_of_all_required_activities1: "", Implementation_of_all_required_activities2: "",
            General_assessment_of_crop1: "", General_assessment_of_crop2: "",
            Yield_estimate1: "", Yield_estimate2: "",
            Harvesting1: "", Harvesting2: "",
            Processing1: "", Processing2: "",
            Storage1: "", Storage2: "",
            Transportation1: "", Transportation2: "",
        },
    ]);


    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }



    return (
        <>
            <section className="section">


                <div className="container border border-dark" >

                    {/* <div className="card ">
              <div className="card-body"> */}
                    <div className="row ">

                        <div className="col  ">
                            <h4>INTERNAL INSPECTION CHECKLIST</h4>
                            <hr />

                            <Table responsive className="table table-bordered table-hover ">
                                <thead>
                                    <tr>
                                        <th className="col-md-1" name="PlotNo"   >Check points</th>
                                        <th className="col-md-1" name="Area" >Yes/ No/ NA</th>
                                        <th className="col-md-1" name="MainCrops" >Remarks</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    <tr scope="row" >
                                        <b>Animal Husbandry</b>
                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Living condition of the animals on farm are acceptable
                                        </td>
                                        <td>
                                            <input type="text" name="Living_Condition1" onChange={inputEvent} value={fname.Living_Condition1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Living_Condition2 " onChange={inputEvent} value={fname.Living_Condition2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Animals fed with organic or non-organic feed
                                        </td>
                                        <td>
                                            <input type="text" name="Animals_fed_with_organic_or_non_organic_feed1 " onChange={inputEvent} value={fname.Animals_fed_with_organic_or_non_organic_feed1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Animals_fed_with_organic_or_non_organic_feed2 " onChange={inputEvent} value={fname.Animals_fed_with_organic_or_non_organic_feed2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            No medication without veterinary prescription
                                        </td>
                                        <td>
                                            <input type="text" name="No_medication_without_veterinary_prescription1 " onChange={inputEvent} value={fname.No_medication_without_veterinary_prescription1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="No_medication_without_veterinary_prescription2" onChange={inputEvent} value={fname.No_medication_without_veterinary_prescription2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>

                                    <tr scope="row" >
                                        <b>Farm and Farm Management</b>
                                    </tr>

                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Whole farm is managed organically (all crops)
                                        </td>
                                        <td>
                                            <input type="text" name="Whole_farm_is_managed_organically1" onChange={inputEvent} value={fname.Whole_farm_is_managed_organically1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Whole_farm_is_managed_organically2 " onChange={inputEvent} value={fname.Whole_farm_is_managed_organically2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            If also non-organic crops: conventional plots clearly separate from organic plots; storage of inputs is separate
                                        </td>
                                        <td>
                                            <input type="text" name="conventional_plots_clearly_separate_from_organic_plots1" onChange={inputEvent} value={fname.conventional_plots_clearly_separate_from_organic_plots1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name=" conventional_plots_clearly_separate_from_organic_plots2" onChange={inputEvent} value={fname.conventional_plots_clearly_separate_from_organic_plots2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            If also non-organic crops: organic crop is not  grown on non-organic plots (no parallel  production)
                                        </td>
                                        <td>
                                            <input type="text" name=" organic_crop_is_not_grown_on_non_organic_plots1" onChange={inputEvent} value={fname.organic_crop_is_not_grown_on_non_organic_plots1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="organic_crop_is_not_grown_on_non_organic_plots2 " onChange={inputEvent} value={fname.organic_crop_is_not_grown_on_non_organic_plots2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Seeds and planting material used
                                        </td>
                                        <td>
                                            <input type="text" name="Seeds_and_planting_material_used1 " onChange={inputEvent} value={fname.Seeds_and_planting_material_used1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Seeds_and_planting_material_used2" onChange={inputEvent} value={fname.Seeds_and_planting_material_used2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Farmer trained in organic standards
                                        </td>
                                        <td>
                                            <input type="text" name="Farmer_trained_in_organic_standards1" onChange={inputEvent} value={fname.Farmer_trained_in_organic_standards1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Farmer_trained_in_organic_standards2" onChange={inputEvent} value={fname.Farmer_trained_in_organic_standards2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Farmer aware of internal organic standard
                                        </td>
                                        <td>
                                            <input type="text" name=" Farmer_aware_of_internal_organic_standard1" onChange={inputEvent} value={fname.Farmer_aware_of_internal_organic_standard1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Farmer_aware_of_internal_organic_standard2" onChange={inputEvent} value={fname.Farmer_aware_of_internal_organic_standard2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            General assessment of the farm with regard to sustainability
                                        </td>
                                        <td>
                                            <input type="text" name="General_assessment_of_the_farm_with_regard_to_sustainability1" onChange={inputEvent} value={fname.General_assessment_of_the_farm_with_regard_to_sustainability1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="General_assessment_of_the_farm_with_regard_to_sustainability2" onChange={inputEvent} value={fname.General_assessment_of_the_farm_with_regard_to_sustainability2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Burning of crop residues
                                        </td>
                                        <td>
                                            <input type="text" name="Burning_of_crop_residues1 " onChange={inputEvent} value={fname.Burning_of_crop_residues1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Burning_of_crop_residues2" onChange={inputEvent} value={fname.Burning_of_crop_residues2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Border and prevention of drift
                                        </td>
                                        <td>
                                            <input type="text" name="Border_and_prevention_of_drift1" onChange={inputEvent} value={fname.Border_and_prevention_of_drift1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Border_and_prevention_of_drift2" onChange={inputEvent} value={fname.Border_and_prevention_of_drift2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Weed control
                                        </td>
                                        <td>
                                            <input type="text" name=" Weed_control1" onChange={inputEvent} value={fname.Weed_control1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name=" Weed_control2 " onChange={inputEvent} value={fname.Weed_control2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Pest Management
                                        </td>
                                        <td>
                                            <input type="text" name="Pest_Management1 " onChange={inputEvent} value={fname.Pest_Management1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Pest_Management2" onChange={inputEvent} value={fname.Pest_Management2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Disease Management
                                        </td>
                                        <td>
                                            <input type="text" name="Disease_Management1" onChange={inputEvent} value={fname.Disease_Management1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Disease_Management2" onChange={inputEvent} value={fname.Disease_Management2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Prevention of erosion
                                        </td>
                                        <td>
                                            <input type="text" name="Prevention_of_erosion1" onChange={inputEvent} value={fname.Prevention_of_erosion1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Prevention_of_erosion2 " onChange={inputEvent} value={fname.Prevention_of_erosion2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Cleanliness of the farm
                                        </td>
                                        <td>
                                            <input type="text" name="Cleanliness_of_the_farm1" onChange={inputEvent} value={fname.Cleanliness_of_the_farm1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Cleanliness_of_the_farm2" onChange={inputEvent} value={fname.Cleanliness_of_the_farm2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Implementation of all required activities
                                        </td>
                                        <td>
                                            <input type="text" name="Implementation_of_all_required_activities1" onChange={inputEvent} value={fname.Implementation_of_all_required_activities1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Implementation_of_all_required_activities2" onChange={inputEvent} value={fname.Implementation_of_all_required_activities2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            General assessment of crop
                                        </td>
                                        <td>
                                            <input type="text" name="General_assessment_of_crop1 " onChange={inputEvent} value={fname.General_assessment_of_crop1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="General_assessment_of_crop2" onChange={inputEvent} value={fname.General_assessment_of_crop2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>Yield estimate (list the yield estimate of the  current crops)Whole farm is managed organically (all crops)
                                        </td>
                                        <td>
                                            <input type="text" name=" Yield_estimate1" onChange={inputEvent} value={fname.Yield_estimate1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name=" Yield_estimate2" onChange={inputEvent} value={fname.Yield_estimate2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>

                                    <tr scope="row" >
                                        <b>Post Harvest Measures and Processing</b>
                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Harvesting (no chemicals used, no co-minglingof the final produce)
                                        </td>
                                        <td>
                                            <input type="text" name="Harvesting1" onChange={inputEvent} value={fname.Harvesting1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Harvesting2" onChange={inputEvent} value={fname.Harvesting2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Processing (only allowed ingredients used, no co-mingling/contamination)
                                        </td>
                                        <td>
                                            <input type="text" name="Processing1" onChange={inputEvent} value={fname.Processing1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Processing2" onChange={inputEvent} value={fname.Processing2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>
                                    <tr ng-repeat="name in getdrugnameNewArray">

                                        <td>
                                            Storage (no co-mingling / contamination)
                                        </td>
                                        <td>
                                            <input type="text" name=" Storage1 " onChange={inputEvent} value={fname.Storage1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name=" Storage2" onChange={inputEvent} value={fname.Storage2} placeholder="Enter Remark"></input>
                                        </td>

                                    </tr>
                                    <tr>


                                        <td>
                                            Transportation (no co-mingling / contamination)
                                        </td>
                                        <td>
                                            <input type="text" name="Transportation1 " onChange={inputEvent} value={fname.Transportation1} placeholder="Yes/ No/ NA" />
                                        </td>
                                        <td>
                                            <input type="text" name="Transportation2" onChange={inputEvent} value={fname.Transportation2} placeholder="Enter Remark"></input>
                                        </td>


                                    </tr>


                                </tbody>






                            </Table>

                        </div>

                    </div>
                    {/* </div>
        </div> */}






                    <div className="form-group col-md-6 a-right my-2">
                        <Button href="/riskmanagement">Next</Button>

                        {/* //<Link to="/checkpoint">Next</Link> */}

                    </div>


                </div>
            </section>
        </>

    );
}
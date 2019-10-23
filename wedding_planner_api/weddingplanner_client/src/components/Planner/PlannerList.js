import React from 'react';
import {Link} from "react-router-dom";

import EditPlanner from './EditPlanner'
import './PlannerList.css'

function PlannerList(props){
    const planners = props.planners.map(function(planner){
        return(
            <div id key={planner.id}>
                <a href={'/planner/'+ planner.id}><h3>{planner.first_name} {planner.last_name}</h3></a>
                <p>{planner.wedding_date}</p>

            
            {/* <button type="btn"><EditPlanner planner={planner} updatePlanner={props.updatePlanner}/></button> */}
            <Link to={`./planner/${planner.id}/edit`}><button>Edit</button> </Link>
            
            <button type="btn" className="btn btn-outline-danger btn-sm"onClick={()=>{props.deletePlanner(planner.id)}}>Delete</button>
            </div>
        )
    })

    return(
        <div className="listofplanners">
            {planners}
        </div>
    )
}
export default PlannerList
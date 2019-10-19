import React from 'react';
import EditPlanner from './EditPlanner'
import './PlannerList.css'

function PlannerList(props){
    const planners = props.planners.map(function(planner){
        return(
            <div id key={planner.id}>
                <a href={'/planner/'+ planner.id}><h3>{planner.first_name} {planner.last_name}</h3></a>

            
            <EditPlanner planner={planner} updatePlanner={props.updatePlanner}/>
            <button type="btn" class="btn btn-outline-danger btn-sm"onClick={()=>{props.deletePlanner(planner.id)}}>Delete</button>
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
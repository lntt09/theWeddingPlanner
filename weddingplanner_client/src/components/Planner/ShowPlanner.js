import React from 'react';
import EditPlanner from '../Planner/EditPlanner'

function ShowPlanner(props){
    const planners = props.planners.map(function(planner){
        return(
            <div id key={planner.id}>
                <a href={'/planner/'+ planner.id}><h3>{planner.first_name} {planner.last_name}</h3></a>
                <Planners getPlanners={props.getPlanner} />
                         
                <EditPlanner planner={planner} updatePlanner={props.updatePlanner}/>
                <button type="btn" class="btn btn-outline-danger btn-sm"onClick={()=>{props.deletePlanner(planner._id)}}>Delete</button>
            </div>
        )
    })

    return(
        <div>
            {planners.id}
        </div>
    )
}
export default ShowPlanner
import React, {Component} from 'react';
import PlannerList from '../Planner/PlannerList'
import NewPlanner from '../Planner/NewPlanner'

import './FrontPage.css'

class FrontPage extends Component{
    constructor(){
        super()
        this.state = {
            planners: []
        }
    }
    componentDidMount(){
        this.getPlanners()
    }

    updatePlanner = async (id, formData)=>{
        const updatePlanner = await fetch(`http://localhost:4000/planners/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            // credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatePlanner.json();
        if(parsedResponse.status === 201){
            this.setState({
                planners: formData
            })
            console.log(formData)
        }
        console.log(parsedResponse)
    };

    deletePlanner = async(id)=>{
        console.log(id);
        try{
            const deletePlanner = await fetch(`http://localhost:4000/planners/${id}`, {
                method: "DELETE",
                // credentials: "include"
            });
            const parsedResponse = await deletePlanner.json();
            if(parsedResponse.status === 200){
                this.setState({
                    planners: this.state.planners.filter(planner => planner.id !== id)
                })
            }
        }
        catch(err){
            console.log(err)
        }
    };

    createPlanner = async(formData) =>{
        console.log(formData);
        try{
            const newPlanner = await fetch('http://localhost:4000/planners', {
                method: "POST",
                body: JSON.stringify(formData),
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await newPlanner.json();
            if(parsedResponse.status === 201){
                this.setState({
                    planners: [parsedResponse, ...this.state.planners]
                })
            }
        }
        catch(err){
            console.log(err)
        }
    };

    // getPlanners = async() =>{
    //     try{
    //         const planners = await fetch('http://localhost:4000/planners');
    //         const parsedResponse = await planners.json()
    //         if(parsedResponse.status.code === 200){
    //             this.setState({
    //                 planners: parsedResponse.planners
    //             })
    //         }
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    showPlanners = async() =>{
        const planners = await fetch(`http://localhost:4000/planners/`);
        const parsedResponse = await planners.id.json()
        console.log(parsedResponse);
        this.setState({
            planners: parsedResponse.planners
        })
    }

    getPlanners = async() =>{
        const planners = await fetch('http://localhost:4000/planners');
        const parsedResponse = await planners.json()
        console.log(parsedResponse);
        this.setState({
            planners: parsedResponse.planners
        })
    }
    
    render(){
       
        return(
            <div>
                <h1 className="frontpageHeader">Our Current Brides</h1>
               
                <PlannerList planners={this.state.planners} deletePlanner={this.deletePlanner} updatePlanner={this.updatePlanner}/>
                <NewPlanner createPlanner={this.createPlanner} />
                
            </div>
        )
    }
}

export default FrontPage;
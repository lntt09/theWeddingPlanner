import React, {Component} from 'react';
import ToDoList from '../ToDoList/ToDoList'
import './Planners.css'

class Planners extends Component{
    constructor(){
        super()
        this.state = {
            planners: []
        }
    }

    componentDidMount(){
        this.getPlanners()
    }

    getPlanners = async() =>{
        const planners = await fetch('http://localhost:4000/planners');
        const parsedResponse = await planners.json()
        console.log(parsedResponse);
        this.setState({
            planners: parsedResponse
        })
    }

    render(){
        const planners = this.state.planners.map((planners)=>{
            return(
                <div id key={planners.id}>
                    <h3>{planners.first_name}</h3>
                    <h3>{planners.last_name}</h3>
                </div>
            )
        })
        return(
            <div>
                <h1 className="planner_H1">My Wedding Planner</h1>
                {planners}
                <ToDoList />
            </div>
        )
    }
}

export default Planners;
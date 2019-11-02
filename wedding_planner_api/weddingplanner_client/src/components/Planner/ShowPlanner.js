import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './ShowPlanner.css'
import ToDoList from '../ToDoList/ToDoList'
import Venues from '../Venues/Venues'


export default class ShowPlanner extends Component {
    state = {
        planner: {
            first_name: '',
            last_name: '',
            wedding_date: '',

        }
    }
    componentDidMount() {
        this.showPlanner()
    }

    showPlanner = async () => {
        const plannerId = this.props.match.params.plannerId
        const planner = await axios.get(`http://localhost:4000/planners/${plannerId}`)
        this.setState({
            planner: planner.data.planner
        })
        console.log(this.state.planner)
    }

    render() {

        return (
            <div>
                <div className="showbridename" >
                    <h1 > {this.state.planner.first_name} {this.state.planner.last_name} </h1>
                    <h3>Selected Venue: {this.state.planner.venues_id}</h3>

                    
                </div>
                <div className = "todolist">
                    <ToDoList />
                    
                </div>
                <div className = "venueList">
                    <Venues />
                </div>
                
            </div>

        )
    }
}
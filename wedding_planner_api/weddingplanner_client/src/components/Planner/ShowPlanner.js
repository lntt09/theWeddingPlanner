import React, { Component } from 'react'
import axios from 'axios'

export default class ShowPlanner extends Component {
    state = {
        planner: {
            first_name: '',
            last_name: '',
            wedding_date: ''
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
                {this.state.planner.first_name} 
                {this.state.planner.last_name}
                
            </div>
        )
    }
}

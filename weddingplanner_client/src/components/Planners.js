import React, {Component} from 'react';

class Planners extends Component{
    constructor(props){
        super(props)
        this.state = {
            planners: []
        }
    }

    componentDidMount(){
        this.getPlanners()
    }

    getPlanners(){
        fetch('http://localhost:4000/planners')
			.then(response => response.json())
			.then(json => console.log(json))
            .catch(error => console.error(error))
    }
    render(){
        return(
            <h1>My Wedding Planner</h1>
        )
    }
}

export default Planners;
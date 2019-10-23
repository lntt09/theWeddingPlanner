import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class EditPlanner extends Component {
  state = {
    planner: {
      modal: false,
      first_name: '',
      last_name: '',
      wedding_date: ''
    }
  }

  componentDidMount(){
    this.getPlanner()
  }

  getPlanner = async() => {
    const plannerId = this.props.match.params.plannerId
    const planner = await axios.get(`http://localhost:4000/planners/${plannerId}`)
    this.setState({
      planner: planner.data.planner
    })
    console.log(planner.data)
    console.log(this.state.planner)
  }

  editPlanner = async () => {
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
                First Name: <input type="text" name="first_name" onChange={this.handleChange} placeholder={this.state.planner.first_name} /><br/><br/>
                Last Name: <input name="last_name" onChange={this.handleChange} placeholder={this.state.planner.last_name}></input><br/><br/>
                Wedding Date: <input type="text" name="wedding_date" onChange={this.handleChange} placeholder={this.state.planner.wedding_date} />
            </form>
      </div>
    )
  }
}

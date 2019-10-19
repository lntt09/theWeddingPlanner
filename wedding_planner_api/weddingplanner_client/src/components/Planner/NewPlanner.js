import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './NewPlanner.css'


class NewPlanner extends Component {
    constructor(){
        super();
        this.state = {
            modal: false,
            first_name: '',
            last_name: '',
            wedding_date: ''
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPlanner(this.state);
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>Add A New Planner</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Lets Add A New Planner </ModalHeader>
                <ModalBody className='modalbody'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Welcome bride...create your planner</h3>
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" name="first_name" onChange={this.handleChange} />
                        <br />
                        <br />
                        <label htmlFor="last_name">Last Name:</label>
                        <input name="last_name" onChange={this.handleChange}></input>
                        <br />
                        <br />
                        <label htmlFor="wedding_date">Wedding Date:</label>
                        <input type="text" name="wedding_date" onChange={this.handleChange} />
                        <br />
                        <br />
                        
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit}>Create Planner</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default NewPlanner;
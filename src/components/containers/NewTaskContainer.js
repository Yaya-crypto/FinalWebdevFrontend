import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk } from '../../store/thunks';

class NewTaskContainer extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            // employeeId: null,
            description: "",
            priorityLevel: 0,
            completionStatus: "",
            redirect: false,
            redirectId: null,
            error: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (this.state.description === "") {
            this.setState({error: "Description field is required"});
            return;
        }

        let task = {
            // employeeId: this.state.employeeId,
            description: this.state.description,
            priorityLevel: this.state.priority,
            completionStatus: this.state.completion,
        };

        let newTask = await this.props.addTask(task);

        this.setState({
            redirect: true,
            redirectId: newTask.id,
            error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
  
    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }

        return (
            <NewTaskView 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error} 
            />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addTask: (task) => dispatch(addTaskThunk(task)),
    })
}

export default connect(null, mapDispatch)(NewTaskContainer);

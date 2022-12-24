import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployeeThunk } from "../../store/thunks";
import { EmployeeView } from "../views";

class EmployeeContainer extends Component {
  componentDidMount() {
    //getting Employee ID from url
    this.props.fetchEmployee(this.props.match.params.id);
  }

  render() {
    return (
      <EmployeeView 
        employee={this.props.employee}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);
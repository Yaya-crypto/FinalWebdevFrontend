import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { fetchEmployeeThunk, editEmployeeThunk } from "../../store/thunks";

class EditEmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstname: "",
      lastname: "",
      department: "",
      redirect: false,
      redirectId: null,
      error: "",
    };
  }

  componentDidMount() {
    //getting Employee ID from url
    this.props.fetchEmployee(this.props.match.params.id);
    this.setState({
      id: this.props.employee.id,
      firstname: this.props.employee.firstname,
      lastname: this.props.employee.lastname,
      department: this.props.employee.department,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //get new info for Employee from form input
    let employee = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
    };

    this.props.editEmployee(employee);

    this.setState({
      redirect: true,
      redirectId: this.props.employee.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single Employee view of the edited Employee
    if (this.state.redirect) {
      return <Redirect to={`/employee/${this.state.redirectId}`} />;
    }

    return (
      <div className="flexbox">
        <h1 className="title">
          {" "}
          Edit {this.state.firstname} {this.state.lastname} ({this.state.id}){" "}
        </h1>

        <form
          style={{ textAlign: "center" }}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div>
            <div className="container">
              <label style={{ color: "#11153e", fontWeight: "bold" }}>
                First Name:{" "}
              </label>
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            <div className="container">
              <label style={{ color: "#11153e", fontWeight: "bold" }}>
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            <div className="container">
              <label style={{ color: "#11153e", fontWeight: "bold" }}>
                Department:{" "}
              </label>
              <input
                type="text"
                name="department"
                value={this.state.department}
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            <button className="btn" style={{ margin: "3rem" }} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditEmployeeContainer);

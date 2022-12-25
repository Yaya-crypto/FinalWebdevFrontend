import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  if (!props.allEmployees.length) {
    return <div className="title">There are no employees.</div>;
  }

  return (
    <div className="flexbox">
      <h1 className="title"> Employees</h1>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div className=" container" key={employee.id}>
            <Link className="subtitle" to={`/employee/${employee.id}`}>
              <h1>{name}</h1>
            </Link>
            <p className="caption">{employee.department}</p>
          </div>
        );
      })}
      <Link to={`/newemployee`}>
        <button className="btn">Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;

import { Link } from "react-router-dom";

// Add logic to show no tasks belong to the emmpployee if there are none
// Add logic to delete the empployee
// edit the empployee informmation,, with a validated form 
const EmployeeView  = (props) => {
    const {employee, editTask, allTasks} = props;
    let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
    let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
    
    return (
      <div>      
        <h3>{employee.firstName}</h3>
        <h3>{employee.lastName}</h3>
        <h3>{employee.id}</h3>
        <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
         
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
          <div>Assigned tasks:
          {assignedTasks.map( task  => {
            return (
              <div key={task.id}>
              <Link to={`/task/${task.id}`}>
                 <h4>{task.description}</h4>
              </Link>
              <button onClick={() => editTask({id:task.id, employeeId: null})}>x</button>
              </div>
            );
          })}</div>
          <div>Available tasks :
          {availableTasks.map( task  => {
            return (
              <div key={task.id}>
              <Link to={`/task/${task.id}`}>
                <h4>{task.description}</h4>
              </Link>
              <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</button>
              </div>
            );
          })}</div>
  
        </div>

      </div>
    );
  
  };
  
  export default EmployeeView;
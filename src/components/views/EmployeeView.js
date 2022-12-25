import { Link } from "react-router-dom";

// Add logic to show no tasks belong to the emmpployee if there are none
// Add logic to delete the empployee
// edit the empployee informmation,, with a validated form
const EmployeeView = (props) => {
  const { employee, editTask, allTasks } = props;
  let assignedTasks = allTasks.filter(
    (task) => task.employeeId === employee.id
  );
  let availableTasks = allTasks.filter(
    (task) => task.employeeId !== employee.id
  );

  return (
    <div >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem",
        }}
      >
        <h3 className="title">
          {employee.firstname} {employee.lastname} ({employee.id})
        </h3>
        <Link
          className="subtitle"
          style={{ color: "white" }}
          to={`/editemployee/${employee.id}`}
        >
          Edit employee information
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div className="container caption" style={{ padding: "2rem" }}>
          Assigned tasks:
          {assignedTasks.map((task) => {
            return (
              <div
                className="container"
                style={{ boxShadow: "0px 0px" }}
                key={task.id}
              >
                <Link className="subtitle" to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button
                  onClick={() => editTask({ id: task.id, employeeId: null })}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <div className="container caption" style={{ padding: "2rem" }}>
          Available tasks :
          {availableTasks.map((task) => {
            return (
              <div
                className="container"
                style={{ boxShadow: "0px 0px" }}
                key={task.id}
              >
                <Link className="subtitle" to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button
                  onClick={() =>
                    editTask({ id: task.id, employeeId: employee.id })
                  }
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;

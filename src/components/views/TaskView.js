import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div className="flexbox">
      <h1 className="title">{task.description}</h1>

      <div className="container">
        {task.employee ? (
          <h3>{task.employee.firstname + " " + task.employee.lastname}</h3>
        ) : (
          <h3>staff</h3>
        )}
        <Link className="subtitle" to={`/edittask/${task.id}`}>
          Edit task information
        </Link>
        <br />
        <Link className="subtitle" to={`/tasks`}>
          View all tasks
        </Link>
      </div>
    </div>
  );
};

export default TaskView;

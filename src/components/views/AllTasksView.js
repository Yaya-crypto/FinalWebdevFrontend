import { Link } from "react-router-dom";
// Fix the all tasks link. its not working, keep sthrowing axios error
const AllTasksView = (props) => {
  let { allTasks, deleteTask } = props;
  //Tasks = [{id: 300, title: "hello"}]
  if (!allTasks.length) {
    return (
      <div>
        <p className="title">There are no tasks.</p>
        <Link to={`/newtask`}>
          <button>Add New Task</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flexbox">
      <h1 className="title"> Tasks</h1>
      {allTasks.map((task) => {
        let title = task.description;
        return (
          <div className="container" key={task.id}>
            <Link className="subtitle" to={`/task/${task.id}`}>
              <h1>{title}</h1>
            </Link>
            <button className="btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      })}
      <Link to={`/newtask`}>
        <button className="btn">Add New Task</button>
      </Link>
    </div>
  );
};

export default AllTasksView;

const NewTaskView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="flexbox">
      <h1 className="title">New Task</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <h3>EmployeeID</h3>
          <input
            type="text"
            name="employeeId"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="container">
          <h3>Description</h3>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="container">
          <h3>Priority</h3>
          <input
            type="text"
            name="priority"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="container">
          <h3>Completion</h3>
          <input
            type="text"
            name="completion"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div style={{ padding: "3rem" }}>
          <button className="btn" type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskView;

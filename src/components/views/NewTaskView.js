
const NewTaskView = (props) => {
    const {handleChange, handleSubmit, error } = props;

    return (
        <div>
          <h1>New Task</h1>
          <form onSubmit={(e) => handleSubmit(e)}>

            <h3>EmployeeID</h3>
            <input name="EmployeeID" onChange ={(e) => handleChange(e)} />

            <h3>Description</h3>
            <input name="Description" onChange ={(e) => handleChange(e)} />

            <h3>Priority</h3>
            <input name="Priority" onChange ={(e) => handleChange(e)} />

            <h3>Completion</h3>
            <input name="Completion" onChange ={(e) => handleChange(e)} />

            <button> Submit</button> 
            </form>
        </div>
      );
    };

    export default NewTaskView;
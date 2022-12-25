
const NewTaskView = (props) => {
    const {handleChange, handleSubmit, error } = props;

    return (
        <div>
          <h1 className='title'>New Task</h1>
          <form onSubmit={(e) => handleSubmit(e)}>

            <h3>EmployeeID</h3>
            <input type="text" name="employeeId" onChange ={(e) => handleChange(e)} />

            <h3>Description</h3>
            <input type="text" name="description" onChange ={(e) => handleChange(e)} />

            <h3>Priority</h3>
            <input type="text" name="priority" onChange ={(e) => handleChange(e)} />

            <h3>Completion</h3>
            <input type="text" name="completion" onChange ={(e) => handleChange(e)} />

            <button type="submit"> Submit</button> 
            </form>
        </div>
      );
    };

    export default NewTaskView;
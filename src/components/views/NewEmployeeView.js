const NewEmployeeView = (props) => {
    const {handleChange, handleSubmit, error } = props;

    return (
        <div>
          <h1>New Employee</h1>
          <form onSubmit={(e) => handleSubmit(e)}>

            <h3>First Name:</h3>
            <input name="EmployeeID" onChange ={(e) => handleChange(e)} />

            <h3> Last Name:</h3>
            <input name="Description" onChange ={(e) => handleChange(e)} />

            <h3>Department:</h3>
            <input name="Priority" onChange ={(e) => handleChange(e)} />

            <button> Submit</button> 
            </form>
        </div>
      );
    };

    export default NewEmployeeView;
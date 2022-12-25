const NewEmployeeView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="flexbox">
      <h1 className="title">New Employee</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <h3>First Name:</h3>
          <input name="firstname" onChange={(e) => handleChange(e)} />
        </div>

        <div className="container">
          <h3> Last Name:</h3>
          <input name="lastname" onChange={(e) => handleChange(e)} />
        </div>

        <div className="container">
          <h3>Department:</h3>
          <input name="department" onChange={(e) => handleChange(e)} />
        </div>

        <div style={{padding: "3rem"}}>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewEmployeeView;

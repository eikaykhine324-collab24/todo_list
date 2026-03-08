import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const Form = ({ submitTask }) => {
  const [userTask, setUserTask] = useState("");
  const formHandling = () => {
    submitTask(userTask);
    setUserTask("");
  };
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <input
          value={userTask}
          onChange={(e) => setUserTask(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Tasks..."
        />
      </div>
      <div className="col-3">
        <button
          type="button"
          onClick={() => formHandling(userTask)}
          className="btn btn-primary"
        >
          <IoMdAdd />
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;

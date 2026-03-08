import React from "react";
import { ImCross } from "react-icons/im";
const Cart = ({ tasks, deleteTask, updateTask }) => {
  const handleDeleteTask = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={
            task.complete
              ? "list-group-item w-100 mt-3 shadow-sm  bg-success text-decoration-line-through text-white"
              : "list-group-item w-100 mt-3 shadow-sm "
          }
        >
          <div className="row">
            <div className="col-9 offset-1  ">
              <input
                type="checkbox"
                onClick={() => updateTask(task.id, !task.complete)}
                className="me-2"
                checked={task.complete}
              />
              {task.task}
            </div>
            <div className="col-2 ">
              <ImCross onClick={() => handleDeleteTask(task.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

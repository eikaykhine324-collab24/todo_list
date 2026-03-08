import React from "react";
import Cart from "./Cart";

const List = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      <div>
        <ol className="list-group">
          <Cart tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </ol>
      </div>
    </div>
  );
};

export default List;

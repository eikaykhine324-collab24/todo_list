import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { api } from "./api/apiResource";
import List from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import uuid from "react-uuid";

const App = () => {
  const [tasks, setTask] = useState([]);

  const fetchData = async () => {
    let res = await api.get("/todolist");
    setTask(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [tasks]);
  const submitTask = async (userTask) => {
    const data = {
      id: uuid(),
      task: userTask,
      complete: false,
    };
    await api.post("/todolist", data);
  };
  const deleteTask = async (task_id) => {
    await api.delete(`/todolist/${task_id}`);
  };
  const updateTask = async (task_id, complete) => {
    await api.patch(`/todolist/${task_id}`, { complete });
  };
  return (
    <div className="mx-auto w-50 mt-5">
      <Form submitTask={submitTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default App;

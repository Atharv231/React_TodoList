import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, settitle] = useState("");
  const [decs, setdecs] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, decs }]);
    settitle("");
    setdecs("");
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask)
    
  };



  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className=" flex items-center justify-between p-3 mb-4 border-2 border-stone-900"
        >
          <div className=" flex items-center justify-between w-2/3">
            <h4 className=" text-2xl font-bold">{t.title}</h4>
            <h5 className=" text-xl">{t.decs}</h5>
          </div>

          <button onClick={()=>{ deleteHandler(i)} } className=" dele" >
            Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="na">My Todo List </h1>

      <form onSubmit={submithandler}>
        <input 
          className="task"
          type="text"
          placeholder="Enter Task"
          required
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="dec"
          type="text"
          required
          placeholder=" Enter Description"
          value={decs}
          onChange={(e) => {
            setdecs(e.target.value);
          }}
        />
        <button className="sub"> Add Task</button>
      </form>

      <div className=" ma p-8  mt-3">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;

import React from "react";
import classes from "./Board.module.css";
import C_Task from "../classes/C_Task";
import Task from "../Task/Task";
import E_TaskState from "../Enum/E_TaskState";

type BoardProps = {
  tasks: C_Task[];
};

const Board = (props: BoardProps) => {
  let todoTasks = props.tasks.filter(
    (task) => task.status === E_TaskState.TODO
  );
  /* let doingTasks = props.tasks.filter(
    (task) => task.status === E_TaskState.DOING
  );
  let doneTasks = props.tasks.filter(
    (task) => task.status === E_TaskState.DONE
  ); */

  let todoTasksJSX = todoTasks.map((todoTask) => {
    return <Task taskData={todoTask} />;
  });

  /*  let doingTasksJSX = doingTasks.map((doingTask) => {
    return <Task taskData={doingTask} />;
  });

  let doneTasksJSX = doneTasks.map((doneTask) => {
    return <Task taskData={doneTask} />;
  }); */

  return (
    <div className={classes.Board}>
      <div>
        <p>TODO</p>
        {todoTasksJSX}
      </div>
      <div>
        <p>DOING</p>
        {/*   {doingTasksJSX} */}
      </div>
      <div>
        <p>DONE</p>
        {/*  {doneTasksJSX} */}
      </div>
      <div>Add New Column</div>
    </div>
  );
};

export default Board;

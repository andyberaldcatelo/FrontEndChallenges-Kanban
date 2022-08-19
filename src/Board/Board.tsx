import React from "react";
import classes from "./Board.module.css";
import C_Task from "../classes/C_Task";
import Task from "../Task/Task";
import { BsCircleFill } from "react-icons/bs";

type BoardProps = {
  tasks: C_Task[];
};

const Board = (props: BoardProps) => {
  let todoTasks = props.tasks.filter((task) => task.status === "TODO");
  let doingTasks = props.tasks.filter((task) => task.status === "DOING");
  let doneTasks = props.tasks.filter((task) => task.status === "DONE");

  let todoTasksJSX = todoTasks.map((todoTask) => {
    return <Task taskData={todoTask} />;
  });

  let doingTasksJSX = doingTasks.map((doingTask) => {
    return <Task taskData={doingTask} />;
  });

  let doneTasksJSX = doneTasks.map((doneTask) => {
    return <Task taskData={doneTask} />;
  });

  return (
    <div className={classes.Board}>
      <div>
        <p className={classes.TaskState_Title}>
          <BsCircleFill className={classes.Todo} />
          TODO ({todoTasks.length})
        </p>
        {todoTasksJSX}
      </div>
      <div>
        <p className={classes.TaskState_Title}>
          <BsCircleFill className={classes.Doing} />
          DOING ({doingTasks.length})
        </p>
        {doingTasksJSX}
      </div>
      <div>
        <p className={classes.TaskState_Title}>
          <BsCircleFill className={classes.Done} />
          DONE ({doneTasks.length})
        </p>
        {doneTasksJSX}
      </div>
      <div>Add New Column</div>
    </div>
  );
};

export default Board;

import React from "react";
import C_Task from "../classes/C_Task";
import classes from "./TaskModal.module.css";
import { BsFillCheckSquareFill } from "react-icons/bs";

type TaskModalProps = {
  task: C_Task;
};

const TaskModal = (props: TaskModalProps) => {
  let subTasksJSX = props.task.subTasks.map((subtask) => {
    return (
      <div className={classes.Subtask}>
        <span>
          <BsFillCheckSquareFill className={classes.CheckBox} />
        </span>
        <p
          className={
            subtask.status === "TODO"
              ? classes.Subtask_Title
              : [classes.Subtask_Title, classes.Crossed].join(" ")
          }
        >
          {subtask.title}
        </p>
      </div>
    );
  });

  return (
    <div className={classes.TaskModalContainer}>
      <div>
        <p>{props.task.title}</p>
      </div>
      <div className={classes.Description}>{props.task.description}</div>
      <div className={classes.SubtasksContainer}>
        <p>
          Subtasks ({props.task.nbSubtasksDone} of {props.task.nbSubtasks})
        </p>
        <div className={classes.SubtasksList}> {subTasksJSX} </div>
      </div>

      <div className={classes.StatusContainer}>
        <span className={classes.Label} />
        <select
          placeholder={props.task.status}
          name=""
          id=""
          className={classes.StatusSelected}
        ></select>
      </div>
    </div>
  );
};

export default TaskModal;

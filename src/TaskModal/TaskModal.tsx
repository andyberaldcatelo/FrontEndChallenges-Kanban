import React from "react";
import C_Task from "../classes/C_Task";
import classes from "./TaskModal.module.css";
import { BsFillCheckSquareFill, BsPencil, BsXLg } from "react-icons/bs";

type TaskModalProps = {
  task: C_Task;
  handleCloseModal_fromTask: () => void;
};

const TaskModal = (props: TaskModalProps) => {
  let subTasksJSX = props.task.subTasks.map((subtask) => {
    return (
      <div className={classes.Subtask}>
        <label className={classes.Checkbox_Container}>
          <input type="checkbox" className={classes.Checkbox} />
        </label>
        <span
          className={
            subtask.status === "TODO"
              ? classes.Subtask_Title
              : [classes.Subtask_Title, classes.Crossed].join(" ")
          }
        >
          {subtask.title}
        </span>
      </div>
    );
  });

  return (
    <div className={classes.TaskModal_Container}>
      <div className={classes.TaskModal_BackDrop}>
        <div className={classes.TaskModal_Box}>
          <div className={classes.BsXLg_Container}>
            <BsXLg
              onClick={() => props.handleCloseModal_fromTask()}
              className={classes.BsXLg}
            />
            <BsPencil className={classes.BsPencil} />
          </div>
          <div>
            <p className={classes.Task_Title}>{props.task.title}</p>
          </div>
          <div className={classes.Task_Description}>
            {props.task.description}
          </div>
          <div className={classes.Subtasks_Container}>
            <p className={classes.Subtask_Span}>
              Subtasks ({props.task.nbSubtasksDone} of {props.task.nbSubtasks})
            </p>
            <div className={classes.SubtasksList}> {subTasksJSX} </div>
          </div>

          <div className={classes.StatusContainer}>
            <label className={classes.Label}>Status</label>
            <div>
              <select
                placeholder={props.task.status}
                name=""
                id=""
                className={classes.Status_Select}
              >
                <option value={"TODO"}>Todo</option>
                <option value={"DOING"}>Doing</option>
                <option value={"DONE"}>Done</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;

import C_GenericTask from "./C_GenericTask";
import { T_TaskState } from "../Type/Type_TaskState";

export default class C_Task extends C_GenericTask {
  private _description: string;
  private _subTasks: C_GenericTask[];

  constructor(title: string, description: string, subtasks: C_GenericTask[]) {
    super(title);
    this._description = description;
    this._subTasks = subtasks;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get subTasks(): C_GenericTask[] {
    return this._subTasks;
  }

  public set subTasks(value: C_GenericTask[]) {
    this._subTasks = value;
  }

  public get status(): T_TaskState {
    let notAllDone: boolean;
    let notAllTodo: boolean;

    notAllDone = this._subTasks.some((subTask) => subTask.status !== "DONE");
    notAllTodo = this._subTasks.some((subTask) => subTask.status !== "TODO");

    if (notAllDone === false) return "DONE";
    if (notAllTodo === false) return "TODO";
    return "DOING";
  }

  public get nbSubtasksDone(): number {
    let counter = 0;
    this._subTasks.forEach((subtask) => {
      if (subtask.status === "DONE") counter++;
    });
    return counter;
  }

  public get nbSubtasks(): number {
    return this._subTasks.length;
  }
}

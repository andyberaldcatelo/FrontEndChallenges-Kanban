import E_TaskState from "../Enum/E_TaskState";
import C_GenericTask from "./C_GenericTask";

export default class C_Task extends C_GenericTask {
  private _description: string;
  private _subTasks: C_GenericTask[];

  constructor(title: string, description: string, subtasks: C_GenericTask[]) {
    super(title, E_TaskState.TODO, undefined);
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

  public get status(): E_TaskState {
    let allDone: boolean;
    let allToDo: boolean;

    allDone = this._subTasks.some(
      (subTask) => !(subTask.status === E_TaskState.TODO)
    );
    allToDo = this._subTasks.some(
      (subTask) => !(subTask.status === E_TaskState.DONE)
    );

    if (allDone) return E_TaskState.DONE;
    if (allToDo) return E_TaskState.TODO;
    return E_TaskState.DOING;
  }

  public get nbSubtasksDone(): number {
    let counter = 0;
    this._subTasks.forEach((subtask) => {
      if (subtask.status === E_TaskState.DONE) counter++;
    });
    return counter;
  }

  public get nbSubtasks(): number {
    return this._subTasks.length;
  }
}

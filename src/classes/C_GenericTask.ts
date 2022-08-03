import E_TaskState from "../Enum/E_TaskState";

export default class C_GenericTask {
  protected _title: string;
  protected _status: E_TaskState;
  protected _taskId: number | undefined;

  constructor(
    title: string,
    status?: E_TaskState,
    taskId?: number | undefined
  ) {
    this._title = title;
    this._status = status ? status : E_TaskState.TODO;
    this._taskId = taskId ? taskId : undefined;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get status(): E_TaskState {
    return this._status;
  }

  public set status(value: E_TaskState) {
    this._status = value;
  }

  public get taskId(): number | undefined {
    return this._taskId;
  }
}

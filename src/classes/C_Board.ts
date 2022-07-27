export default class C_Board {
  private _boardName: string;
  private _isSelected: boolean;

  constructor(boardName: string, isSelected?: boolean) {
    this._boardName = boardName;
    isSelected !== undefined
      ? (this._isSelected = isSelected)
      : (this._isSelected = false);
  }

  public get isSelected(): boolean {
    return this._isSelected;
  }
  public set isSelected(value: boolean) {
    this._isSelected = value;
  }

  public get boardName(): string {
    return this._boardName;
  }
  public set boardName(value: string) {
    this._boardName = value;
  }
}

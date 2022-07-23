class C_Board {
  private _boardName: string;
  private _isSelected: boolean;

  constructor(boardName: string) {
    this._boardName = boardName;
    this._isSelected = false;
  }

  public get boardName(): string {
    return this._boardName;
  }
  public set boardName(value: string) {
    this._boardName = value;
  }

  public get isSelected(): boolean {
    return this._isSelected;
  }
  public set isSelected(value: boolean) {
    this._isSelected = value;
  }
}

export default C_Board;

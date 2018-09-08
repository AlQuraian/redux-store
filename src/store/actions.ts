// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

export class AddTodo {
  readonly type = ADD_TODO;

  constructor(public readonly payload: any) { }
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;

  constructor(public readonly payload: any) { }
}

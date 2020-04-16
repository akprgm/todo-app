type AppSate = {
  todoState: TodoState
}

type TodoState = {
  todos: Todo[]
}

type Todo = {
  id: string
  text: string,
  complete: boolean
}

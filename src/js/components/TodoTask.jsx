import TodoFooter from "./TodoFooter";

const TodoTasks = ({ todos, setTodos }) => {
  let renderTasks = todos.map((todo, index) => {
    return (
      <div
        className="list-item border-top border-bottom border-dark d-flex justify-content-between"
        key={index}
      >
        <label className="ms-5">{todo} </label>
        <button
          className="delete-task me-5"
          onClick={() => {
            deleteTask(todo);
          }}
        >
          x
        </button>
      </div>
    );
  });
  const deleteTask = (deleteTask) => {
    const newTodos = todos.filter((t) => t != deleteTask);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="main">
        <div className="todo-list">
          {/* render todo list items */}
          {todos.length !== 0 ? renderTasks : "No task. Add a task."}
        </div>
      </div>
    </>
  );
};

export default TodoTasks;

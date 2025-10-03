import TodoFooter from "./TodoFooter";

const TodoTasks = ({ todos, setTodos }) => {
  let renderTasks = todos.map((todo, index) => {
    return (
      <div
        className="list-item border-top border-bottom border-dark"
        key={index}
      >
        <label>{todo}</label>
        <button
          className="delete-task"
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

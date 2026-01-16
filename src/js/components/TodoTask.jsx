import TodoFooter from "./TodoFooter";

const TodoTasks = ({ todos, setTodos, getData }) => {
  let renderTasks = todos.map((todo, index) => {
    return (
      <div
        className="list-item border-top border-bottom border-dark d-flex justify-content-between"
        key={index}
      >
        <label className="ms-5">{todo.label} </label>
        <button
          className="delete-task me-5"
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          x
        </button>
      </div>
    );
  });
  const deleteTask = async(id) => {
   const response = await fetch("https://playground.4geeks.com/todo/todos/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
   });
    const data = await response.json();
    console.log(data);
    getData();
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

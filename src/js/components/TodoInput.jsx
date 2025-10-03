import { useState } from "react";

const TodoInput = ({ todos, setTodos }) => {
  // we need to create 2 new useState to create the new todo objects, that we can then append to the todos array
  const [newTask, setNewTask] = useState("");

  // function addTask will create a new todo object and POST it to the Todo API
  const addTask = () => {
    //console.log("Creating new todo object to append to the todos array: ", newTask);

    // create a new todo object
    let newTodoObject = {
      label: newTask,
      is_done: false,
    };

    // postData(setTodos, newTodoObject);
    setNewTask("");
  };

  // function checkTextBox will validate if the input text box has any user input.  If it does it will call
  // another function to add the new Task, otherwise it will throw an alert to let the user know to input some text
  const checkTextBox = () => {
    let textBox = document.querySelector(".new-todo");
    if (textBox.value === "") {
      alert("Please add a task.");
    } else {
      setTodos([...todos, newTask]);
    }
  };

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter was pressed!');
    checkTextBox();
    setNewTask('');
    }
  };

  // });

  // for the return statement, we need an input element (text box) to allow the user to enter a new todo
  // we need a button that will validate if there is text in the textbox
  return (
    <>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
         onKeyDown={handleKeyDown}
      />
      
    </>
  );
};

export default TodoInput;

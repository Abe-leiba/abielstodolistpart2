import { useState, useEffect } from "react";

// import CreateUser from "./CreateUser"
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTask";
import TodoFooter from "./TodoFooter";

// import { getData } from "./fetch";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [username, setUsername] = useState("");

    // inital fetch is being done here to render our todos in API Playground
    useEffect(() => {
        // getData(setTodos);
    }, [])

    return (
        <>  
            <div className="mt-5 w-50 mx-auto">
                <h1 id="title">todos</h1>
     
                <div className="border border-dark bg-light">
                    <TodoInput todos={todos} setTodos={setTodos}/>
                    <TodoTasks todos={todos} setTodos={setTodos} />
                    <TodoFooter todos={todos} setTodos={setTodos}/>
                </div>
            </div>
    
        </>
    );
}

export default TodoApp;

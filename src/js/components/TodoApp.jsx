import { useState, useEffect } from "react";

// import CreateUser from "./CreateUser"
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTask";
import TodoFooter from "./TodoFooter";

// import { getData } from "./fetch";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    // const [username, setUsername] = useState("");
    const getData = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/todo/users/abiel");
            console.log(response);

            // If user doesn't exist (404), create the user
            if (response.status === 404) {
                console.log("User not found, creating user...");
                const createResponse = await fetch("https://playground.4geeks.com/todo/users/abiel", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (createResponse.ok) {
                    const newUser = await createResponse.json();
                    console.log("User created:", newUser);
                    setTodos([]);
                }
                return;
            }

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setTodos(data.todos || []);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setTodos([]);
        }
    }
    // inital fetch is being done here to render our todos in API Playground
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="mt-5 w-50 mx-auto">
                <h1 id="title">todos</h1>

                <div className="border border-dark bg-light">
                    <TodoInput todos={todos} setTodos={setTodos} getData={getData} />
                    <TodoTasks todos={todos} setTodos={setTodos} getData={getData} />
                    <TodoFooter todos={todos} setTodos={setTodos} />
                </div>
            </div>

        </>
    );
}

export default TodoApp;


const TodoFooter = ({ todos, setTodos }) => {
    const cleartask = (cleartask) => {
        setTodos([]);
    }

    // Guard against undefined todos
    const todoCount = todos?.length || 0;

    return (
        <>
            <footer className="footer d-flex justify-content-evenly">
                {/* this will be a ternary to display how many items are left in the
                todo list in a grammatically correct manner. */}
                {todoCount !== 1 ? `${todoCount} items left.` : `${todoCount} item left.`}
                {/* <button onClick={cleartask}>Clear all tasks!</button> */}
            </footer>


        </>

    );
};

export default TodoFooter;
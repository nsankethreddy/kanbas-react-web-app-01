import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
interface Todo {
    id: number;
    title: string;
}

export default function TodoItem({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item d-flex align-items-center">

            {todo.title}

            <div style={{ marginLeft: "auto" }}>
                <button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                    className="btn btn-primary" style={{ marginBottom: "10px", marginLeft: "10px" }}
                > Edit </button>

                <button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"
                    className="btn btn-danger" style={{ marginBottom: "10px", marginLeft: "10px" }}
                > Delete </button>
            </div>
        </li>
    );
}
import { useState } from "react";
import { HiDocumentRemove } from "react-icons/hi";
import { Spinner } from "..";
import { useTodoContext } from "../../contexts/TodoContext";

const ListTodos = () => {
  //
  const { todos, deleteDocTodo } = useTodoContext();
  const [isLoading, setIsLoading] = useState();

  const handleDelete = (id) => {
    setIsLoading(id);
    deleteDocTodo(id).then((r) => {
      if (r) setIsLoading();
    });
  };
  //
  return (
    <ul className="my-4 space-y-2">
      {todos.map((todo, i) => (
        <li key={i} className="flex justify-between border px-4 py-2">
          <div>{todo.title}</div>

          {isLoading == todo.id ? (
            <div className="w-8 h-8">
              <Spinner />
            </div>
          ) : (
            <ButtonDelete onClick={() => handleDelete(todo.id)} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListTodos;

const ButtonDelete = ({ isLoading, ...props }) => {
  return (
    <button>
      <HiDocumentRemove className="w-8 h-8 text-red-500" {...props} />
    </button>
  );
};

import { useEffect, useState } from "react";
import { Header, Spinner } from "../../components";
import { FormAdd, ListTodos } from "../../components/todos";
import { useTodoContext } from "../../contexts/TodoContext";

const Todos = () => {
  //
  const { readDocsTodo } = useTodoContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    readDocsTodo().then((res) => {
      if (res) setIsLoading(false);
    });
  }, []);
  //
  return (
    <>
      <Header />

      <FormAdd />

      <main className="p-4">
        {isLoading ? (
          <div className="w-8 h-8 mx-auto m-4">
            <Spinner />
          </div>
        ) : (
          <ListTodos />
        )}
      </main>
    </>
  );
};

export default Todos;

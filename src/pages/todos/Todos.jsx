import { useEffect, useState } from "react";
import { Header, Spinner } from "../../components";
import { FormAdd, ListTodos, DetailTodo } from "../../components/todos";
import { useTodoContext } from "../../contexts/TodoContext";

const Todos = () => {
  //
  const { readDocsTodo } = useTodoContext();
  const [isLoading, setIsLoading] = useState(true);
  const [detailId, setDetailId] = useState();

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
          <ListTodos setDetailId={setDetailId} />
        )}
      </main>

      {detailId && <DetailTodo id={detailId} close={setDetailId} />}
    </>
  );
};

export default Todos;

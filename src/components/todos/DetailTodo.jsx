import {} from "react";
import { HiOutlineSave, HiX } from "react-icons/hi";

const DetailTodo = ({ id, close }) => {
  return (
    <section className="absolute top-0 left-0 w-full min-h-screen bg-gray-100 flex flex-col">
      <header className="border p-4">
        <div>{id}</div>
      </header>

      <main className="p-4">
        <textarea
          name="title"
          cols="30"
          rows="2"
          className="w-full bg-white px-4 py-2"
          value="asdsdsd"
        ></textarea>
      </main>

      <footer className="flex mt-auto bg-gray-100">
        <button className="w-full bg-green-500/25 text-green-700 hover:bg-green-300 p-2">
          <HiOutlineSave className="w-full h-6" />
          <div className="text-sm">Save</div>
        </button>

        <button
          className="w-full bg-red-500/25 text-red-700 hover:bg-red-300 p-2"
          onClick={() => close()}
        >
          <HiX className="w-full h-6" />
          <div className="text-sm">Cancel</div>
        </button>
      </footer>
    </section>
  );
};

export default DetailTodo;

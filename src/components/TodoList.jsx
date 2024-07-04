function TodoList({ data }) {
  const deleteDoc = (id) => {};

  return (
    <div className="w-full px-10 flex items-center flex-col">
      <h1 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center mb-5">
        {" "}
        TodosList
      </h1>
      {data &&
        data.map((todo) => {
          return (
            <div
              className="max-w-sm  rounded-sm w-full mx-auto shadow-2xl p-7  mb-5"
              key={todo.id}
            >
              <h3 className="mb-5">{todo.title}</h3>
              <button
                onClick={() => deleteDoc(todo.id}
                className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300  btn-block"
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;

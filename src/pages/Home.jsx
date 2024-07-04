import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Form, useActionData } from "react-router-dom";
import { TodoList } from "../components";
import FormCheckbox from "../components/FormCheckbox";
import { useCollection } from "../hooks/useCollection";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

// action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let completed = formData.get("completed") === "on";
  return { title, completed };
};

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const userData = useActionData();

  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("todos", ["uid", "==", user.uid]);

  useEffect(() => {
    if (userData && userData.title) {
      const newTodo = {
        title: userData.title,
        completed: userData.completed,
        uid: user.uid,
      };
      addDoc(collection(db, "todos"), newTodo)
        .then(() => {
          toast.success("New Todo Added");
          setInputValue(""); // Input maydonini tozalash
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [userData, user.uid]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false); // Xatoni tozalash
  };

  const handleFormSubmit = (e) => {
    if (!inputValue.trim()) {
      e.preventDefault(); // Formani yuborishni to'xtatish
      setInputError(true);
      toast.error("Todo title is required");
    }
  };

  return (
    <div className="align-element lg:flex justify-between mx-auto mt-10">
      <div className="w-2/4">
        <Form
          method="post"
          className="max-w-md w-full mx-auto"
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-center mb-5 text-4xl font-extrabold text-blue-600">
            Add new Todo
          </h2>
          <input
            type="text"
            name="title"
            placeholder="write the todo"
            value={inputValue}
            onChange={handleInputChange}
            className={`mb-5 px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-none rounded-sm transition-all ${
              inputError ? "border-red-500" : "border-[#333]"
            }`}
          />
          <FormCheckbox className="mb-5" />
          <button className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300 btn-block">
            Add
          </button>
        </Form>
      </div>
      <TodoList data={data} className="w-2/4 flex" />
    </div>
  );
}

export default Home;

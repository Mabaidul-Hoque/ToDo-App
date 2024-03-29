import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ListDisplayCard from "./ListDisplayCard";

export interface List {
  title: string;
  description: string;
  _id: number;
}

const Home = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [title, setTitle] = useState("");
  const [_id, set_Id] = useState(1);
  const [description, setDescription] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const storedLists = listsFromLS();
    if (storedLists) {
      setLists(storedLists);
      setIsDeleted(false);
      setIsAdded(false);
    }
  }, [isAdded, isDeleted]);

  const listsFromLS = () => {
    const rawListsFromLS = localStorage.getItem("lists");
    const listsFromLS = rawListsFromLS ? JSON.parse(rawListsFromLS) : [];
    return listsFromLS;
  };

  const handleAdd = () => {
    if (title !== "" && description !== "") {
      set_Id((prev) => prev + 1);
      const newList = {
        _id,
        title,
        description,
      };

      const rawListsFromLS = listsFromLS();
      localStorage.setItem(
        "lists",
        JSON.stringify([newList, ...rawListsFromLS])
      );
      setIsAdded(true);
      toast.success(`${title} added successfully`, {
        theme: "colored",
      });
      setTitle("");
      setDescription("");
    } else {
      toast.error("Inputs are missing...!", { theme: "colored" });
    }
  };
  const handleUpdate = (listId: number) => {
    const rawListsFromLS = listsFromLS();

    const updatedLists = rawListsFromLS.map((list: List) => {
      if (list._id === listId) {
        if (description === "") {
          return { ...list, title };
        } else if (title !== "" && description !== "") {
          return { ...list, title, description };
        } else if (title === "") {
          return { ...list, description };
        }
      }
      return list;
    });

    localStorage.setItem("lists", JSON.stringify(updatedLists));
    setIsAdded(true);
    toast.success(`${title} updated successfully`, {
      theme: "colored",
    });
    setTitle("");
    setDescription("");
  };

  const handleDelete = (listTitle: string) => {
    const rawListsFromLS = listsFromLS();
    if (rawListsFromLS) {
      const filteredLists = rawListsFromLS.filter(
        (list: List) => list.title !== listTitle
      );
      localStorage.setItem("lists", JSON.stringify(filteredLists));
      setIsDeleted(true);
      toast.success(`${listTitle} deleted successfully`, {
        theme: "colored",
      });
    }
  };

  const handleTittleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  // console.log("lists", lists);

  return (
    <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* LEFT COLUMN */}
      <div className="col-span-1 md:col-span-2">
        <div className="bg-white shadow-md rounded-md p-4 md:sticky md:top-36 bg-gradient-to-b from-slate-200 to-fuchsia-200">
          <form action="#" className="flex flex-col gap-8">
            <h1 className="text-4xl font-semibold font-mono">
              Add to the List
            </h1>
            {/* ADD LIST INPUT */}
            <div className="flex flex-col gap-4">
              {/* TASK TITLE */}
              <div className="text-left flex items-center gap-2">
                <label
                  className="w-48 block text-gray-700 text-xl font-semibold py-2 mb-3"
                  htmlFor="task-title"
                >
                  Task Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline glow-animation"
                  type="text"
                  id="task-title"
                  placeholder="Enter your task title..."
                  value={title}
                  onChange={handleTittleChange}
                />
              </div>

              {/* TASK DESCRIPTION */}
              <div className="text-left flex items-start gap-2">
                <label
                  className="w-48 block text-gray-700 text-lg font-semibold py-2 mb-3"
                  htmlFor="task-desp"
                >
                  Task Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline glow-animation"
                  id="task-desp"
                  placeholder="Enter your task description..."
                  rows={4}
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            {/* ADD BUTTON */}
            <div className="flex justify-end pr-5">
              <button
                type="submit"
                onClick={handleAdd}
                className="text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* RIGHT COLUMN */}
      <div className="col-span-1 md:col-span-2">
        <div className="bg-white shadow-md rounded-md p-8 bg-gradient-to-b from-slate-200 to-fuchsia-200">
          {/* DISPLAY LISTS */}
          <ul className="flex flex-col gap-8 text-white text-left">
            {lists.length > 0 &&
              lists.map((list, index) => (
                <li
                  key={index}
                  className="bg-gray-500 shadow-md rounded-md p-4 flex flex-col gap-2"
                >
                  <ListDisplayCard
                    list={list}
                    handleTittleChange={handleTittleChange}
                    handleDescriptionChange={handleDescriptionChange}
                    title={title}
                    description={description}
                    handleDelete={handleDelete}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    onUpdate={handleUpdate}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

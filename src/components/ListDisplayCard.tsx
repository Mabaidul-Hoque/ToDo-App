import React, { useState } from "react";
import { List } from "./Home";
import EditModal from "./EditModal";
interface ListDisplayCardProps {
  list: List;
  handleTittleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (
    value: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  title: string;
  description: string;
  handleDelete: (value: string) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onUpdate: (value: number) => void;
}

const ListDisplayCard: React.FC<ListDisplayCardProps> = ({
  list,
  handleTittleChange,
  handleDescriptionChange,
  description,
  title,
  handleDelete,
  setTitle,
  setDescription,
  onUpdate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onUpdate(list._id);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
  };
  console.log("list id", list._id);

  return (
    <div>
      <h1 className="text-2xl font-semibold">{list?.title}</h1>
      <p>{list?.description}</p>
      <div className="flex gap-4 items-center justify-end pt-4">
        <button
          onClick={showModal}
          className="hover:bg-green-400 px-2 py-0.5 rounded"
        >
          Edit
        </button>
        <EditModal
          isOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          toBeUpdateTitle={list.title}
          toBeUpdateDesp={list.description}
          onTitleChange={handleTittleChange}
          onDespChange={handleDescriptionChange}
          title={title}
          description={description}
        />
        <button
          onClick={() => handleDelete(list.title)}
          className="hover:bg-red-400 px-2 py-0.5 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListDisplayCard;

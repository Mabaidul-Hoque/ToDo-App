import React from "react";

import { Modal } from "antd";

interface EditModalProps {
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  toBeUpdateTitle: string;
  toBeUpdateDesp: string;
  onTitleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onDespChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  description: string;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  handleOk,
  handleCancel,
  toBeUpdateTitle,
  toBeUpdateDesp,
  onTitleChange,
  onDespChange,
  title,
  description,
}) => {
  return (
    <>
      <Modal
        title="Update the list"
        open={isOpen}
        okText="Update"
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="#">
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
                value={title || toBeUpdateTitle}
                onChange={onTitleChange}
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
                value={description || toBeUpdateDesp}
                onChange={onDespChange}
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;

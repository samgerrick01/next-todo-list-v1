import React from "react";
import { FaPlus } from "react-icons/fa";

function AddTask() {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add New Todo <FaPlus className="ml-2" />
      </button>
    </div>
  );
}

export default AddTask;

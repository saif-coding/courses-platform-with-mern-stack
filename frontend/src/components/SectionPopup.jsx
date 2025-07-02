import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SectionPopup({ pop, id, fun }) {
  const [title, setTitle] = useState("");

  const createSections = async () => {
    pop(true);
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/sections/add/${id}`,
        { title },
        { withCredentials: true }
      );
      if (result.status === 201) {
        toast.success(result.data.message);
        pop(false);
        await fun();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="w-full max-w-md mx-autop p-6 bg-gray-300 h-52 absolute top-0">
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Section Name
      </label>
      <div className="relative">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter your section name"
          className="w-full pl-2 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 focus:border-indigo-500 transition text-sm placeholder-gray-400"
        />
        <div className=" flex gap-8">
          <button
            onClick={() => createSections()}
            className="bg-blue-500 text-white rounded-lg px-3 py-1 mt-5 "
          >
            Create
          </button>
          <button
            onClick={() => pop(false)}
            className="bg-red-500 text-white rounded-lg px-3 py-1 mt-5 "
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionPopup;

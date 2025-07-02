import React, { useContext, useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CourseContext } from "../context/CourseContext";

function LecturePopup({ remove, id }) {
  console.log(id, "lectureid");
  // const { getAllLectures } = useContext(CourseContext);
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureVideo, setLectureVideo] = useState("");
  const addLecture = async () => {
    const formData = new FormData();
    formData.append("lectureTitle", lectureTitle);
    formData.append("video", lectureVideo);
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/lectures/add/${id}`,
        { formData },
        { withCredentials: true }
      );
      if (result.status === 201) {
        toast.success(result.data.message);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

 

  return (
    <div className=" absolute left-0 w-60 rounded-xl h-72 bg-gray-300 p-5">
      <label className="block text-sm font-medium text-gray-700 ">
        Lecture Name
      </label>
      <input
        onChange={(e) => setLectureTitle(e.target.value)}
        value={lectureTitle}
        className="my-2 p-2 border rounded-lg capitalize focus:outline-none"
        type="text"
        placeholder="enter lecture name"
      />
      <div className="max-w-md mx-auto">
        <label className="block text-sm font-medium mt-4 text-gray-700 mb-2">
          Upload a Lecture
        </label>
        <input
          onChange={(e) => setLectureVideo(e.target.files[0])}
          type="file"
          accept="video/*"
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
          file:rounded file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100 border rounded"
        />
      </div>{" "}
      <button
        onClick={() => addLecture}
        className="bg-blue-500 px-4 py-1 cursor-pointer rounded-xl capitalize font-semibold text-white mt-4"
      >
        submit
      </button>
      <button
        onClick={() => remove(false)}
        className="bg-red-500 px-4 py-1 ml-6 rounded-xl capitalize font-semibold text-white mt-4"
      >
        Cancle
      </button>
    </div>
  );
}

export default LecturePopup;

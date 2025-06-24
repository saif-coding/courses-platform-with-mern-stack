import React, { useState } from "react";
import axios from "axios";
function AddCourse() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("thumbnail", image);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("category", selectedCategory);
    formdata.append("coursePrice", coursePrice);
    formdata.append("offerPrice", offerPrice);
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/courses/add`,
        formdata,
        { withCredentials: true }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-10 md:pl-32 flex flex-col justify-between bg-white">
      <form onSubmit={handlerSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Course thumbnail </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(1)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <img
                    className="max-w-24 cursor-pointer"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Course Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Course Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            id="category"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="">Select Category</option>
            {[
              { name: "Web development" },
              { name: "Data Science" },
              { name: "front end" },
              { name: "backend " },
            ].map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Course Price
            </label>
            <input
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>
        <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddCourse;

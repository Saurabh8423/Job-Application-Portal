import React from "react";
import { addApplication } from "../redux/applicationSlice";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";

export default function ApplicationForm({ job }) {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({ name: "", email: "", resume: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addApplication({ ...values, job }));
    alert("Application submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-lg font-bold">Apply for {job.title}</h2>
   <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={values.name}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={values.email}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        name="resume"
        placeholder="Paste Resume"
        value={values.resume}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

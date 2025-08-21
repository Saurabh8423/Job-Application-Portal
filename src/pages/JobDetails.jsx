import React from "react";
import { useParams } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
  { id: 2, title: "Backend Developer", company: "Code Ltd", location: "Bangalore" },
];

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.company} - {job.location}</p>
      <ApplicationForm job={job} />
    </div>
  );
}


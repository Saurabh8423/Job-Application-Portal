import React from "react";

export default function JobCard({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>

       <Link
        to={`/job/${job.id}`}
        className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Apply
      </Link>
    </div>
  );
}

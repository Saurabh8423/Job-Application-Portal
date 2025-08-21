import React from 'react';

export default function ApplicationSummary({ application }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="font-bold">{application.job.title}</h3>
      <p className="text-sm text-gray-600">Applied by {application.name}</p>
      <p className="text-sm text-gray-500">Email: {application.email}</p>
    </div>
  );
}


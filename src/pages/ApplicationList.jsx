import React from "react";
import { useSelector } from "react-redux";
import ApplicationSummary from "../components/ApplicationSummary";

export default function ApplicationList() {
  const applications = useSelector((state) => state.applications);

  if (applications.length === 0) return <p>No applications yet</p>;

  return (
    <div className="grid gap-4">
      {applications.map((app, idx) => (
        <ApplicationSummary key={idx} application={app} />
      ))}
    </div>
  );
}


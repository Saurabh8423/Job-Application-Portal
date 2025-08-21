import React from 'react';

export default function FormStep({ step, title, children }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Step {step}: {title}</h3>
      {children}
    </div>
  );
}


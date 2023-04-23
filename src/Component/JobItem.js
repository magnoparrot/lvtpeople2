// JobItem.js - Componente para cada trabajo individual en la lista
import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div>
      <h2>{job.type}</h2>
      <p>Name: {job.name}</p>
      <p>Status: {job.status}</p>
      <p>Count of quotations: {job.quotes}</p>
      <p>location: {job.location}</p>
      {/* ... más información del trabajo */}
    </div>
  );
}

export default JobItem;
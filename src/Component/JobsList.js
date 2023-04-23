

// JobList.js - Componente para la lista de trabajos
import React, { useState, useEffect } from 'react';
import JobItem from './JobItem';

const JobList = () => {
  // Estado para almacenar la lista de trabajos
  const [jobs, setJobs] = useState([]);
  // Estados para almacenar los filtros
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [jobStatusFilter, setJobStatusFilter] = useState('');
  const [jobLocationFilter, setJobLocationFilter] = useState('');
  const [isJobListVisible, setIsJobListVisible] = useState(false);

  // Función para obtener la lista de trabajos (puedes hacer una llamada a una API aquí)
  const fetchJobs = () => {
    // Lógica para obtener la lista de trabajos (ejemplo)
    const fetchedJobs = [
      { id: 1, type: 'Developer', name: 'Javascript Developer', status: 'Active', quotes: 5, location: 'Sidney' },
      { id: 2, type: 'Developer', name: 'Frontend developer', status: 'Inactive', quotes: 3, location: 'Hobart' },
      { id: 3, type: 'Developer', name: 'backend developer', status: 'Active', quotes: 7, location: 'Gold Coast' },
      { id: 4, type: 'employee', name: 'Factory employee', status: 'Active', quotes: 5, location: 'Darwin' },
      { id: 5, type: 'employee', name: 'Transportation employee', status: 'Inactive', quotes: 3, location: 'Newcastle' },
      { id: 6, type: 'Manager', name: 'Marketing Manager', status: 'Active', quotes: 7, location: 'Melboume' },
      // ... más trabajos
    ];

    const filteredJobs = fetchedJobs.filter(job => {
      if (jobTypeFilter && job.type !== jobTypeFilter) {
        return false;
      }
      if (jobStatusFilter && job.status !== jobStatusFilter) {
        return false;
      }
      if (jobLocationFilter && job.location !== jobLocationFilter) { // Filtrar por ubicación
        return false;
      }
      return true;
    });

    setJobs(filteredJobs);
  }

  // Llamar a la función para obtener la lista de trabajos al montar el componente y cuando los filtros cambien
  useEffect(() => {
    fetchJobs();
  }, [jobTypeFilter, jobStatusFilter, jobLocationFilter]);

  // Función para manejar los cambios en los filtros del formulario
  const handleFilterChange = (filterType, value) => {
    if (filterType === 'jobType') {
      setJobTypeFilter(value);
    } else if (filterType === 'jobStatus') {
      setJobStatusFilter(value);
    } else if (filterType === 'jobLocation') { // Agregar condición para el filtro de ubicación
      setJobLocationFilter(value);
    }
  }
  const handleToggleJobList = () => {
    setIsJobListVisible(!isJobListVisible);
  }
  return (
    <div className='listjobs'>
      <h1>List of Jobs</h1>
      <button className="my-button" onClick={handleToggleJobList}>
      {isJobListVisible ? 'Hidden Jobs' : 'Show Jobs'}
      </button>
      {isJobListVisible && (
        <div>
          <h2>Filters</h2>
          <form>
          <label>
  Type of Job:
  <select
    value={jobTypeFilter}
    onChange={(e) => handleFilterChange('jobType', e.target.value)}
  >
    <option value="">All</option>
    <option value="Developer">Developer</option>
    <option value="employee">Employee</option>
    <option value="Manager">Manager</option>
  </select>
</label>
<label>
  Status of Job:
  <select
    value={jobStatusFilter}
    onChange={(e) => handleFilterChange('jobStatus', e.target.value)}
  >
    <option value="">Todos</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</label>
<label>
  Ubicación del Trabajo:
  <select
    value={jobLocationFilter}
    onChange={(e) => handleFilterChange('jobLocation', e.target.value)}
  >
    <option value="">Todas</option>
    <option value="Sidney">Sidney</option>
    <option value="Hobart">Hobart</option>
    <option value="Gold Coast">Gold Coast</option>
    <option value="Darwin">Darwin</option>
    <option value="Newcastle">Newcastle</option>
    <option value="Melbourne">Melbourne</option>
    {/* ... más opciones de ubicación */}
  </select>
</label>

</form>
          <ul>
            {jobs.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobList;
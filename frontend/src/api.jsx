
//This file is used for interacting with the backend

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

//These are used for interacting with the jobs table via the backend
export const getJobs        = () => axios.get('/jobs');
export const createJob     = job => axios.post('/jobs', job);
export const updateJob     = job => axios.put(`/jobs/${job.jobId}`, job);
export const deleteJob     = id  => axios.delete(`/jobs/${id}`);


//These are used for interacting with the applicants table via the backend
export const getApplicants  = () => axios.get('/applicants');
export const updateStatus   = (id, status) =>
  axios.put(`/applicants/${id}/status`, { status });

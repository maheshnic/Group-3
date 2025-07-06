import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

export const getJobs        = () => axios.get('/jobs');
export const createJob     = job => axios.post('/jobs', job);
export const updateJob     = job => axios.put(`/jobs/${job.jobId}`, job);
export const deleteJob     = id  => axios.delete(`/jobs/${id}`);

export const getApplicants  = () => axios.get('/applicants');
export const updateStatus   = (id, status) =>
  axios.put(`/applicants/${id}/status`, { status });

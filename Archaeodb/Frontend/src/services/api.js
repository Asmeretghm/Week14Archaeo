import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export const getArchaeosites = () => axios.get(`${API_URL}/archaeosites`);
export const getArchaeositeById = (id) => axios.get(`${API_URL}/archaeosite/${id}`);
export const createArchaeosite = (archaeosite) => axios.post(`${API_URL}/archaeosite`, archaeosite);
export const updateArchaeosite = (id, archaeosite) => axios.put(`${API_URL}/archaeosite/${id}`, archaeosite);
export const deleteArchaeosite = (id) => axios.delete(`${API_URL}/archaeosite/${id}`);



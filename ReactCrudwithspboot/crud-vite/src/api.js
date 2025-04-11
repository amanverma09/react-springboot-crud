import axios from "axios";

const API_URL = "http://localhost:1010/api/users";

// simple massage
export const getMessage = () => axios.get(`${API_URL}/message`);

export const getUsers = () => axios.get(`${API_URL}/`);
export const getUser = (id) => axios.get(`${API_URL}/${id}`);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

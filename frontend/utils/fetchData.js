import axios from "axios";
export const getMethod = async (url) => {
  let token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME);
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${url}`);
  return res;
};
export const postMethod = async (url, data) => {
  let token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME);
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${url}`, data);
  return res;
};
export const postMethodMultipart = async (url, data) => {
  let token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME);
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${url}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res;
};

export const putMethod = async (url, data) => {
  let token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME);
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${url}`, data);
  return res;
};
export const deleteMethod = async (url, data) => {
  let token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME);
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${url}`, data);
  return res;
};
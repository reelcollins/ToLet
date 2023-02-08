// auth.js
// get authententication token

import axios from 'axios';

export const getToken = async (username, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });
    return response.data.access;
  } catch (error) {
    console.error(error);
    return null;
  }
};
import { baseUrl } from './config';
import axios from 'axios';

export const register = async (body) => {
  let result;
  try {
    const { data } = await axios.post(`${baseUrl}/api/v1/register`, {
      username: body.username,
      email: body.email,
      password: body.password,
      gender: body.gender,
    })
    result = data;
  } catch (error) {
    result = error.response;
  }
  return result;
}
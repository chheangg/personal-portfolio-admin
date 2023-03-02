/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/auth/login'

const login = async (user) => {
  console.log(user)
  const result = await axios.post(baseUrl, user)
  return result.data
}

export default { login }
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/api/topics'

const create = async (name) => {
  const result = await axios.post(baseUrl, { name })
  return result.data;
}

export default { create }
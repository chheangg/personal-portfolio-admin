/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/api/topics'

const create = async (name) => {
  const result = await axios.post(baseUrl, { name })
  return result.data
}

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data.topics
}

export default { create, getAll }
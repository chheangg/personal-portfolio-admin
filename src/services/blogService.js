/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/api/blogs'

const create = async (blog) => {
  console.log(blog)
  const result = await axios.post(baseUrl, blog)
  return result.data
}

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data.topics
}

export default { create, getAll }
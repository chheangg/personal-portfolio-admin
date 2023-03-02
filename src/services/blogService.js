/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/api/blogs'

let token;

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const create = async (blog, thumbnail) => {
  const formData = new FormData()
  if (thumbnail) {
    formData.append('thumbnail', thumbnail)
  }

  for (const key in blog) {
    formData.append(key, blog[key])
  }

  const result = await axios.post(
    baseUrl,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    },
  )
    
  return result.data
}

const update = async (blogId, blog, thumbnail) => {
  const formData = new FormData()
  if (thumbnail) {
    formData.append('thumbnail', thumbnail)
  }

  for (const key in blog) {
    formData.append(key, blog[key])
  }

  const result = await axios.put(
    baseUrl + '/' + blogId,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    },
  )
    
  return result.data
}

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data.blogs
}

const getBlog = async (blogId) => {
  const result = await axios.get(baseUrl + '/' + blogId)
  return result.data.blog
}

export default { create, getAll, update, getBlog, setToken }
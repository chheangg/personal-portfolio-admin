/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/api/blogs'

const create = async (blog, thumbnail) => {
  const formData = new FormData()
  if (thumbnail) {
    formData.append('thumbnail', thumbnail)
    console.log(thumbnail)
  }

  for (const key in blog) {
    formData.append(key, blog[key])
  }

  const result = await axios.post(
    baseUrl,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
    
  return result.data
}

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data.blogs
}

export default { create, getAll }
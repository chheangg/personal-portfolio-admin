/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = '/api/topics'

let token;

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const create = async (topic) => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.post(baseUrl, topic, config)
  return result.data
}

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data.topics
}

const getTopic = async (topicId) => {
  const result = await axios.get(baseUrl + '/' + topicId)
  return result.data.topic
}

const update = async (topicId, topic) => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.put(baseUrl + '/' + topicId, topic,  config)
  return result.data.updatedTopic
}

export default { create, getAll, getTopic, update, setToken }
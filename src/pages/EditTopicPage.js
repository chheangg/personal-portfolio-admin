import TopicFormPage from "./TopicFormPage"
import topicService from "../services/topicService"

const paths = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Create',
    href: '/create'
  },
  {
    title: 'Edit Topic',
  }
]

const handleFormSubmit = (event, navigate, setError, topicId, queryClient) => {
  console.log('hey')
  topicService
    .update(topicId, { name: event.target['name'].value})
    .then(data => {
      navigate('/topics')
      queryClient.setQueryData(`topic-${topicId}`, data.updatedTopic)
    })
    .catch(
      error => {
        setError(error.response.data.error)
      }
    )
}

const EditTopicPage = TopicFormPage('Edit Topic', paths, handleFormSubmit)

export default EditTopicPage
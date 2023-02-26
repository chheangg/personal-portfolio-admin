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
    title: 'Create Topic',
    href: '/create/topic'
  }
]

const handleFormSubmit = (event, navigate, setError) => {
  topicService
    .create(event.target['name'].value)
    .then(data => {
      navigate('/topics')
    })
    .catch(
      error => {
        setError(error.response.data.error)
      }
    )
}

const CreateTopicPage = TopicFormPage('Create Topic', paths, handleFormSubmit)

export default CreateTopicPage
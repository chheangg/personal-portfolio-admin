import TopicFormPage from "./TopicFormPage"

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

const CreateTopicPage = TopicFormPage('Create Topic', paths)

export default CreateTopicPage
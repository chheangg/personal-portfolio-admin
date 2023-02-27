import BlogFormPage from "./BlogFormPage";
import blogService from "../services/blogService";

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
    title: 'Edit Blog',
    href: '/edit/blog/',
  }
]

const handleFormSubmit = (event, selectedTopics, editorRef, navigate, errorHandler, blogId) => {
  const blog = {
    title: event.target.name.value,
    caption: event.target.caption.value,
    topics: selectedTopics.map(topic => topic.id),
    content: editorRef.current.getContent(),
    author: '63d77e02d7289c7834d09a06',
  }

  const thumbnail = event.target.thumbnail.files[0]
  blogService.update(blogId, blog, thumbnail)
    .then(data => {
      navigate('/blogs')
    })
    .catch(error => {
      error.response.data.errors
        .forEach(error => {
          switch(error.param) {
            case 'title':
              errorHandler.setNameError(error.msg);
              break;
            case 'caption':
              errorHandler.setCaptionError(error.msg);
              break;
            case 'topic':
              errorHandler.setTopicError(error.msg);
              break;
            default:
              break;
          }
        })
    })
}

const EditBlogPage = BlogFormPage(
  'Edit Blog',
  paths,
  handleFormSubmit,
  true
)

export default EditBlogPage;
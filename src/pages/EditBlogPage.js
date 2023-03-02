import BlogFormPage from "./BlogFormPage";
import blogService from "../services/blogService";

const paths = [
  {
    title: 'Home',
    href: '/admin/'
  },
  {
    title: 'Create',
    href: '/admin/create'
  },
  {
    title: 'Edit Blog',
  }
]

const handleFormSubmit = (event, selectedTopics, editorRef, navigate, errorHandler, blogId, queryClient) => {
  const blog = {
    title: event.target.name.value,
    caption: event.target.caption.value,
    topics: selectedTopics.map(topic => topic.id),
    content: editorRef.current.getContent(),
  }

  const thumbnail = event.target.thumbnail.files[0]
  blogService.update(blogId, blog, thumbnail)
    .then(data => {
      console.log(data)
      queryClient.setQueryData(`blog-${blogId}`, data.updatedBlog)
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
)

export default EditBlogPage;
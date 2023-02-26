import BlogFormPage from "./BlogFormPage";

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
    title: 'Create Blog',
    href: '/create/blog',
  }
]

const CreateBlogPage = BlogFormPage('Create Blog', paths)

export default CreateBlogPage
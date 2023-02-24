import Page from "./Page"

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
    title: 'Blog Form',
    href: '/create/blog'
  }
]

const BlogFormPage = () => {
  return (
    <Page title='Blog Form' paths={paths} >
      <div>Blog Form Page</div>
    </Page>
  )
}

export default BlogFormPage
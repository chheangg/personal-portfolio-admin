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
    title: 'Topic Form',
    href: '/create/topic'
  }
]

const BlogFormPage = () => {
  return (
    <Page title='Topic Form' paths={paths} >
      <div>Topic Form Page</div>
    </Page>
  )
}

export default BlogFormPage
import Page from "./Page"

const paths = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Blogs',
    href: '/blogs'
  }
]

const BlogsPage = () =>
  <Page title='Blogs' paths={paths}>
    <div>Hello</div>
  </Page>

export default BlogsPage
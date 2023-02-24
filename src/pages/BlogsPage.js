import Page from "./Page"

const paths = [
  {
    title: 'Home',
    href: '/home'
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
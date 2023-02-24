import Page from "./Page"

const paths = [
  {
    title: 'Home',
    href: '/home'
  },
  {
    title: 'Topics',
    href: '/topics'
  }
]

const TopicsPage = () =>
  <Page title='Topics' paths={paths}>
   <div>Hello</div>
  </Page>

export default TopicsPage
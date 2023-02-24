import Page from "./Page"

const paths = [
  {
    title: 'Home',
    href: '/home'
  },
  {
    title: 'Create',
    href: '/create'
  }
]

const CreatePage = () =>
  <Page title='Create' paths={paths}>
    <div>Hello</div>
  </Page>

export default CreatePage
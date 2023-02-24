import Page from "./Page";

const paths = [
  {
    title: 'Home',
    href: '/'
  },
]

const HomePage = () => 
  <Page title='Home' paths={paths}>
    <div>Hello</div>
  </Page>

export default HomePage
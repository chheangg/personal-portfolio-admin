import Page from "./Page";

const paths = [
  {
    title: 'Home',
    href: '/'
  },
]

const HomePage = () => 
  <Page title='Home' paths={paths}>
    <div>Welcome to your personal portfolio admin panel!</div>
  </Page>

export default HomePage
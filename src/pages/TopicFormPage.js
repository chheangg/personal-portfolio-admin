import Page from "./Page"
import { Input, FormLabel, FormControl, Button } from '@chakra-ui/react'

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
      <FormControl w='20vw' ml='8'>
        <FormLabel htmlFor="name">Topic name</FormLabel>
        <Input id='name' name='name' placeholder="Must be at least 3 characters" variant='outline' />
        <Button 
          mt='6'
          color='gray.50'
          bgColor='gray.700'
          _hover={{
            bgColor:'teal.300',
          }}
        >Submit</Button>
      </FormControl>
    </Page>
  )
}

export default BlogFormPage
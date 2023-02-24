import Page from "./Page"
import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import { mdiPost, mdiListBox } from '@mdi/js';
import ImageCard from "../components/ImageCard"

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
    <Box px='4' mb='8'>
      <Text fontSize='18'>What would you like to create?</Text>
      <Flex mt='4' gap='8'>
        <ImageCard text='Create a blog' icon={mdiPost} />
        <ImageCard text='Create a topic' icon={mdiListBox} />
      </Flex>
    </Box>
  </Page>

export default CreatePage
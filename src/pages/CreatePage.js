import Page from "./Page"
import { Box, Flex, Text } from "@chakra-ui/react"
import { mdiPost, mdiListBox } from '@mdi/js';
import ImageCard from "../components/ImageCard"
import { useNavigate } from "react-router-dom";

const paths = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Create',
    href: '/create'
  }
]

const CreatePage = () => {
  const navigate = useNavigate()
  return (
    <Page title='Create' paths={paths}>
      <Box px='4' mb='8'>
        <Text fontSize='18'>What would you like to create?</Text>
        <Flex mt='4' gap='8'>
          <ImageCard 
            text='Create a blog' 
            icon={mdiPost} 
            onClick={() => navigate('./blog')}
          />
          <ImageCard 
            text='Create a topic' 
            icon={mdiListBox} 
            onClick={() => navigate('./topic')}
          />
        </Flex>
      </Box>
    </Page>
  )
}

export default CreatePage
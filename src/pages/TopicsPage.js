import { useQuery } from "react-query"
import { 
  Stack,
  Skeleton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import topicService from "../services/topicService"
import Page from "./Page"

import Loading from "../components/Loading"
import ContentDropDown from "../components/ContentDropDown"

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

const TopicsPage = () => {
  const result = useQuery(
    'topics',
    async () => await topicService.getAll()
  )
  const navigate = useNavigate()

  if (result.status === 'loading') {
    return (
      <Page title='Topics' paths={paths}>
        <Loading />
      </Page>
    )
  }

  const topics = result.data

  return (
    <Page title='Topics' paths={paths}>
      <TableContainer border='2px solid' borderColor='gray.700' borderRadius='lg' mx='4'>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr borderBottom='2px solid' bgColor='teal.200'>
              <Th>Topic</Th>
              <Th>Blog Count</Th>
              <Th w='calc(80%)'></Th>
            </Tr>
          </Thead>
          <Tbody>
            {topics.map(topic => 
              <Tr key={topic.id}>
                <Td>{topic.name}</Td>
                <Td>{topic.blogs.length} blogs</Td>
                <Td w='calc(80%)'><ContentDropDown onEdit={() => navigate(`/topics/${topic.id}`)} /></Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
     </Page>
  )
}


export default TopicsPage
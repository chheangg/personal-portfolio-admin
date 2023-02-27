import { useQuery } from "react-query"
import { 
  Skeleton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import blogService from "../services/blogService"
import Page from "./Page"
import { DateTime } from "luxon"
import Profile from "../components/Profile"
import ContentDropDown from "../components/ContentDropDown"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"

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

const BlogsPage = () => {
  const result = useQuery(
    'blogs',
    async () => await blogService.getAll()
  )

  const navigate = useNavigate()

  if (result.status === 'loading') {
    return (
      <Page title='Topics' paths={paths}>
        <Loading />
      </Page>
    )
  }

  const blogs = result.data

  return (
    <Page title='Blogs' paths={paths}>
      <TableContainer border='2px solid' borderColor='gray.700' borderRadius='lg' mx='4'>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr borderBottom='2px solid' bgColor='teal.200'>
              <Th>Author</Th>
              <Th>Title</Th>
              <Th>Topics</Th>
              <Th>Created On</Th>
              <Th w="calc(100%)"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map(blog => 
              <Tr key={blog.id}>
                <Td><Profile author={blog.author} /></Td>
                <Td>{blog.title}</Td>
                <Td>{blog.topics.length}</Td>
                <Td>{DateTime.fromISO(blog.timestamp).toLocaleString(DateTime.DATETIME_FULL)}</Td>
                <Td w="calc(100%)">
                  <ContentDropDown onEdit={() => navigate(`/blogs/${blog.id}`)} />
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
     </Page>
  )
}

export default BlogsPage
import { useQuery, useMutation, useQueryClient } from "react-query"
import { 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from '@chakra-ui/react'
import blogService from "../services/blogService"
import Page from "./Page"
import { DateTime } from "luxon"
import Profile from "../components/Profile"
import ContentDropDown from "../components/ContentDropDown"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import PublishButton from "../components/PublishButton"

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
  const queryClient = useQueryClient()
  const result = useQuery(
    'blogs',
    async () => await blogService.getAll()
  )

  const updateBlogMutation = useMutation(
    async ({blogId, blog}) => await blogService.update(blogId, blog),
    {
      onSuccess: () => queryClient.invalidateQueries('blogs')
    }
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
      <TableContainer border='2px solid' borderColor='gray.700' borderRadius='lg' mx='4' h='calc(80vh)' overflowY='scroll'>
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
                <Td>
                  <Box display="flex" alignItems="center"  justifyContent='flex-end' w="calc(100%)" gap='6'>
                    <PublishButton isPublished={blog.isPublished} blog={blog} updateMethod={updateBlogMutation.mutate} />
                    <ContentDropDown onEdit={() => navigate(`/blogs/${blog.id}`)} />
                  </Box>
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
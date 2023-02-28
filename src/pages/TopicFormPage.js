import Page from "./Page"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Input, FormLabel, Button, FormErrorMessage, FormControl, } from '@chakra-ui/react'
import topicService from "../services/topicService"
import Loading from "../components/Loading"

const TopicForm = ({ title, paths, handleFormSubmit }) => {
  const [error, setError] = useState('')
  const [formValue, setFormValue] = useState({
    name: ''
  })
  const navigate = useNavigate()
  const params = useParams()
  const topicId = Object.keys(params).length > 0  ? params.topicId : null
  const mustFetch = topicId ? true : false
  const result = useQuery(
    `topic-${params.topicId}`,
    topicId ? async () => await topicService.getTopic(topicId) : () => {},
    {
      enabled: mustFetch
    }
  )

  useEffect(() => {
    if (result.status === 'success') {
      setFormValue(result.data)
    }
  }, [result])

  const handleSubmit = (event) => {
    event.preventDefault()
    handleFormSubmit(event, navigate, setError, topicId)
  }

  const handlePath = () => 
  topicId 
    ? 
    paths.map(path => {
      path.href = path.title === 'Edit Topic' ? `/topics/${topicId}` : path.href
      return path
    }) 
    :
    paths

  if (result.status === 'loading') {
    return (
      <Page title={title} paths={handlePath()}>
        <Loading />
      </Page>
    )
  }

  return (
    <Page title={title} paths={handlePath()}>
      <form onSubmit={handleSubmit}>
        <FormControl w='20vw' ml='8' isInvalid={error}>
          <FormLabel htmlFor="name">Topic name</FormLabel>
          <Input defaultValue={formValue.name} id='name' name='name' placeholder="Must be at least 3 characters" variant='outline' bgColor='whiteAlpha.900' />
          <FormErrorMessage>{error}</FormErrorMessage>
          <Button 
            type='submit'
            mt='6'
            color='gray.50'
            bgColor='gray.700'
            _hover={{
              bgColor:'teal.300',
            }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Page>
  )
}

const TopicFormPage = (title, paths, handleFormSubmit) => {
  return () => <TopicForm title={title} paths={paths} handleFormSubmit={handleFormSubmit}/>
}

export default TopicFormPage
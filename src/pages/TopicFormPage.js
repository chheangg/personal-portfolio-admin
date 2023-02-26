import Page from "./Page"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input, FormLabel, Button, FormErrorMessage, FormControl, } from '@chakra-ui/react'
import topicService from "../services/topicService"

const TopicForm = ({ title, paths, formValue }) => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    topicService
      .create(event.target['name'].value)
      .then(data => {
        navigate('/topics')
      })
      .catch(
        error => {
          setError(error.response.data.error)
        }
      )
  }
  return (
    <Page title={title} paths={paths} >
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

const TopicFormPage = (title, paths, formValue) => {
  if (!formValue) {
    formValue = {
      name: ''
    }
  }
  return () => <TopicForm title={title} paths={paths} formValue={formValue}/>
}

export default TopicFormPage
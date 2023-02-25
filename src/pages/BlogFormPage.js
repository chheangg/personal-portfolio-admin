import Page from "./Page"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from "react"
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from "react-router-dom"
import { 
  Box, 
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  FormControl,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  Wrap,
  WrapItem
} from "@chakra-ui/react"

import topicService from "../services/topicService";
import blogService from "../services/blogService";

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
    title: 'Blog Form',
    href: '/create/blog'
  }
]

const BlogFormPage = () => {
  const [nameError, setNameError] = useState(null)
  const [captionError, setCaptionError] = useState(null)
  const [topicError, setTopicError] = useState(null)
  const [topics, setTopics] = useState([])
  const [selectedTopics, setSelectedTopics] = useState([])
  const editorRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    topicService
      .getAll()
      .then(data => {
        setTopics(data)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(selectedTopics.map(topic => topic.id))
    const blog = {
      title: event.target.name.value,
      caption: event.target.caption.value,
      topics: selectedTopics.map(topic => topic.id),
      content: editorRef.current.getContent(),
      author: '63d77e02d7289c7834d09a06',
    }

    blogService.create(blog)
      .then(data => {
        navigate('/blogs')
      })
      .catch(error => {
        error.response.data.errors
          .forEach(error => {
            switch(error.param) {
              case 'title':
                setNameError(error.msg);
                break;
              case 'caption':
                setCaptionError(error.msg);
                break;
              default:
                break;
            }
          })
      })
  }

  const handleSelect = (event) => {
    const value = event.target.value

    if (!value) {
      return
    }

    const isSelected = selectedTopics.find(topic => topic.id === value)

    if (isSelected) {
      return;
    }

    const topic = topics.find(topic => topic.id === value)

    setSelectedTopics([...selectedTopics, topic])
  }

  const handleRemoveTopic = (topicId) => {
    const newSelectedTopics = selectedTopics.filter(topic => topic.id !== topicId)
    setSelectedTopics(newSelectedTopics)
  }

  return (
    <Page title='Blog Form' paths={paths} >
      <form onSubmit={handleSubmit}>
        <Box m='8'>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name">Blog name</FormLabel>
            <Input id='name' name='name' w='20vw' placeholder="Must be at least 3 characters" variant='outline' />
            <FormErrorMessage key={uuidv4()}>{nameError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={captionError} mt='4'>
            <FormLabel htmlFor="caption" >Blog's caption</FormLabel>
            <Input id='caption' name='caption' w='20vw' placeholder="Must be at least 3 characters" variant='outline' />
            <FormErrorMessage key={uuidv4()}>{captionError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={topicError} mt='4'>
            <FormLabel htmlFor="caption" >Blog's topics</FormLabel>
            <Select placeholder="Select topic" w='20vw' onChange={handleSelect}>
              {topics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
            </Select>
            <Wrap m='4' w='30vw'>
              {selectedTopics.map(topic =>
                <WrapItem key={topic.id}>
                  <Tag size='md' colorScheme='teal'>
                    <TagLabel>{topic.name}</TagLabel>
                    <TagCloseButton onClick={() => handleRemoveTopic(topic.id)} />
                  </Tag>
                </WrapItem>
              )}
            </Wrap>
            <FormErrorMessage key={uuidv4()}>{topicError}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <Editor
              apiKey={process.env.REACT_APP_TINYMCE_APIKEY}
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </FormControl>
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
        </Box>
      </form>
    </Page>
  )
}

export default BlogFormPage
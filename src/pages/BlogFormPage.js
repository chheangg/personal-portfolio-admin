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

const BlogForm = ({ title, paths, content, formValue }) => {
  const [nameError, setNameError] = useState(null)
  const [captionError, setCaptionError] = useState(null)
  const [topicError, setTopicError] = useState(null)
  const [topics, setTopics] = useState([])
  const [selectedTopics, setSelectedTopics] = useState([...formValue.topics])
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
    const blog = {
      title: event.target.name.value,
      caption: event.target.caption.value,
      topics: selectedTopics.map(topic => topic.id),
      content: editorRef.current.getContent(),
      author: '63d77e02d7289c7834d09a06',
    }

    const thumbnail = event.target.thumbnail.files[0]

    console.log(editorRef.current.getContent())

    blogService.create(blog, thumbnail)
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
              case 'topic':
                setTopicError(error.msg);
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
    <Page title={title} paths={paths} >
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box m='8'>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name">Blog name</FormLabel>
            <Input defaultValue={formValue.name} id='name' name='name' w='20vw' placeholder="Must be at least 3 characters" bgColor='whiteAlpha.900'/>
            <FormErrorMessage key={uuidv4()}>{nameError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={captionError} mt='4'>
            <FormLabel htmlFor="caption" >Blog's caption</FormLabel>
            <Input defaultValue={formValue.caption} id='caption' name='caption' w='20vw' placeholder="Must be at least 3 characters" bgColor='whiteAlpha.900'/>
            <FormErrorMessage key={uuidv4()}>{captionError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={topicError} mt='4'>
            <FormLabel htmlFor="caption" >Blog's topics</FormLabel>
            <Select placeholder="Select topic" w='20vw' onChange={handleSelect} bgColor='whiteAlpha.900'>
              {topics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
            </Select>
            <Wrap w='30vw' mt='2'>
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
          <FormControl mt='4'>
            <FormLabel htmlFor="thumbnail">Blog's Thumbnail</FormLabel>
            <input id='thumbnail' name='thumbnail' type='file' />
          </FormControl>
          <FormControl mt='6'>
            <Editor
              apiKey={process.env.REACT_APP_TINYMCE_APIKEY}
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue={content}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 
                  'undo redo | blocks | ' +
                  'image ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                images_file_types: 'jpg, png, jpeg, svg, webp',
                file_picker_types: 'image',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                file_picker_callback: function (cb, value, meta) {
                  const input = document.createElement('input');
                  input.setAttribute('type', 'file');
                  input.setAttribute('accept', 'image/*');
              
                  input.addEventListener('change', (e) => {
                    const file = e.target.files[0];
              
                    const reader = new FileReader();
                    reader.addEventListener('load', () => {
                      // Upload image!
                      const id = 'blobid' + (new Date()).getTime();
                      const blobCache = editorRef.current.editorUpload.blobCache;
                      const base64 = reader.result.split(',')[1];
                      const blobInfo = blobCache.create(id, file, base64);
                      blobCache.add(blobInfo);

                      cb(blobInfo.blobUri(), { title: file.name });
                    });
                    reader.readAsDataURL(file);
                  });
              
                  input.click();
                },
                relative_urls: false,
                images_upload_handler: async (blobInfo) => {
                  let imageFile = new FormData();
                  imageFile.append('image', blobInfo.blob());
                  try {
                    const { data } = await axios.post("/api/blogs/upload", imageFile)
                    console.log(data.path)
                    return Promise.resolve(data.path)
                  } catch (error) {
                    console.log(error)
                    return;
                  }
                },
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

const BlogFormPage = (title, paths, content, formValue) => {
  if (!formValue) {
    formValue = {
      name: '',
      caption: '',
      topics: '',
      content: "<p>This is the initial content of the editor.</p>"
    }
  }
  return () => <BlogForm content={content} formValue={formValue} title={title} paths={paths} />
}

export default BlogFormPage
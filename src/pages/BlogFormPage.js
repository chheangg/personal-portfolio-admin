import Page from "./Page"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from "react"
import { useQuery, useQueryClient } from "react-query";
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate, useParams } from "react-router-dom"
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
import Loading from "../components/Loading";
import topicService from "../services/topicService";
import blogService from "../services/blogService";
import { fetchUser } from "../utilities/helper";

const BlogForm = ({ title, paths, handleFormSubmit }) => {
  const queryClient = useQueryClient()
  const [formValue, setFormValue] = useState({
    title: '',
    caption: '',
    topics: '',
    content: "<p>This is the initial content of the editor.</p>"
  })
  const [nameError, setNameError] = useState(null)
  const [captionError, setCaptionError] = useState(null)
  const [topicError, setTopicError] = useState(null)
  const [topics, setTopics] = useState([])
  const [selectedTopics, setSelectedTopics] = useState([])
  const editorRef = useRef(null)
  const navigate = useNavigate()
  const params = useParams();
  // Does detail checking if params exist
  // To differentiate easily with create / edit page
  const blogId = Object.keys(params).length > 0  ? params.blogId : null
  const mustFetch = blogId ? true : false
  
  const result = useQuery(
    `blog-${params.blogId}`,
    blogId ? async () => await blogService.getBlog(params.blogId) : () => {},
    {
      enabled: mustFetch,
    }
  )

  useEffect(() => {
    topicService
      .getAll()
      .then(data => {
        setTopics(data)
      })
  }, [])

  useEffect(() => {
    if (result.status === 'success' && selectedTopics.length === 0) {
      setFormValue(result.data)
      setSelectedTopics(result.data.topics)
    }
  }, [result, selectedTopics])
  
  const handlePath = () => 
  blogId 
    ? 
    paths.map(path => {
      path.href = path.title === 'Edit Blog' ? `/blogs/${params.blogId}` : path.href
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

  const handleSubmit = (event) => {
    event.preventDefault()
    handleFormSubmit(event, selectedTopics, editorRef, navigate, {
      setNameError,
      setCaptionError,
      setTopicError,
    }, blogId, queryClient)
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
    <Page title={title} paths={handlePath()}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box m='8'>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name">Blog name</FormLabel>
            <Input defaultValue={formValue.title} id='name' w={{base: '100%', lg: '20vw'}} name='name' placeholder="Must be at least 3 characters" bgColor='whiteAlpha.900'/>
            <FormErrorMessage key={uuidv4()}>{nameError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={captionError} mt='4'>
            <FormLabel htmlFor="caption" >Blog's caption</FormLabel>
            <Input defaultValue={formValue.caption} id='caption' w={{base: '100%', lg: '20vw'}} name='caption' placeholder="Must be at least 3 characters" bgColor='whiteAlpha.900'/>
            <FormErrorMessage key={uuidv4()}>{captionError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={topicError} mt='4'>
            <FormLabel htmlFor="caption" >Blog's topics</FormLabel>
            <Select placeholder="Select topic" w={{base: '100%', lg: '20vw'}} onChange={handleSelect} bgColor='whiteAlpha.900'>
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
              initialValue={formValue.content}
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
                    const token = fetchUser().token
                    const config = {
                      headers: { Authorization: `bearer ${token}` },
                    }

                    console.log(config)
                    const { data } = await axios.post("/api/blogs/upload", imageFile, config)
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

const BlogFormPage = (title, paths, handleFormSubmit) => {
  return () => <BlogForm title={title} paths={paths} handleFormSubmit={handleFormSubmit}/>
}

export default BlogFormPage
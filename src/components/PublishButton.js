import { Button } from "@chakra-ui/react";

const PublishButton = ({ isPublished, blog, updateMethod }) => {
  const updatePublishStatus = (event) => {
    event.preventDefault()
    updateMethod({
      blogId: blog.id,
      blog: {
        ...blog,
        topics: blog.topics.map(topic => topic.id),
        isPublished: !blog.isPublished,
      },
    })
  }

  return (
    <Button
      onClick={updatePublishStatus}
      bgColor={isPublished ?'red.500' : 'green.400'}
      color='gray.50'
      _hover={
        {
          bgColor: isPublished ?'red.400' : 'green.500'
        }
      }
    >
      {isPublished ? "Unpublish" : "Publish"}
    </Button>
  )
}

export default PublishButton;
import { Box, Grid, Card, CardHeader } from "@chakra-ui/react"
import { Icon } from "@mdi/react"

const ImageCard = ({ icon, text }) =>
  <Card
    bgColor='gray.200'
    p={[4, 10]}
    borderRadius='lg'
    fontWeight='bold'
    justifyItems='center'
    _hover={{
      bgColor: 'teal.300',
      color: 'gray.50'
    }}
  >
    <Icon size={6} path={icon}/>
    <CardHeader>{text}</CardHeader> 
  </Card>

export default ImageCard
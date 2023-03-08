import { Box, Grid, Card, CardHeader } from "@chakra-ui/react"
import { Icon } from "@mdi/react"

const ImageCard = ({ icon, text, onClick }) =>
  <Card
    padding={[1, 4]}
    bgColor='gray.200'
    borderRadius='lg'
    fontWeight='bold'
    alignItems='center'
    justifyItems='center'
    _hover={{
      bgColor: 'teal.300',
      color: 'gray.50'
    }}
    onClick={onClick}
    
  >
    <Icon size={6} path={icon}/>
    <CardHeader
      fontSize={{
        base: 'md',
        lg: 'lg'
      }}
    >{text}</CardHeader> 
  </Card>

export default ImageCard
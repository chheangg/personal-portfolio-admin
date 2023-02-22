import { Button } from "@chakra-ui/react"

const SideBarItem = ({ text }) =>
  <Button 
    py='2' 
    colorScheme='gray' 
    fontSize='xl' 
    variant='ghost'
    borderRadius='0'
    _hover={{ 
      bg: 'teal.200',
      color: 'gray.700'
    }}>
    {text}
  </Button>

export default SideBarItem
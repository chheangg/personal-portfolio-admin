import { Button } from "@chakra-ui/react"

const SideBarItem = ({ text }) =>
  <Button 
    py='6'
    colorScheme='gray' 
    fontSize='xl' 
    variant='ghost'
    borderRadius='0'
    _hover={{ 
      bg: 'teal.200',
      color: 'gray.700'
    }}
    m='0'
  >
    {text}
  </Button>

export default SideBarItem
import { Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const SideBarItem = ({ text, path }) => {
  const navigate = useNavigate()
  return (
    <Button
      colorScheme='gray'
      fontWeight='bold'
      fontSize='xl' 
      variant='ghost'
      borderRadius='0'
      _hover={{ 
        bg: 'teal.200',
        color: 'gray.700'
      }}
      m='0'
      onClick={() => navigate(path)}
    >
      {text}
    </Button>
  )
}


export default SideBarItem
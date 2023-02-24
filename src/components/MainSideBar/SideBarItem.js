import { Button} from "@chakra-ui/react"
import IconSideBarItem from "../IconSideBarItem"
import { useNavigate } from "react-router-dom"

const SideBarItem = ({ text, path, icon }) => {
  const navigate = useNavigate()
  return (
    <Button
      justifyContent='flex-start'
      colorScheme='gray'
      fontWeight='bold'
      fontSize='l' 
      variant='ghost'
      borderRadius='0'
      _hover={{ 
        bg: 'teal.200',
        color: 'gray.700'
      }}
      m='0'
      onClick={() => navigate(path)}
    >
      <IconSideBarItem icon={icon} />
      <span>{text}</span>
    </Button>
  )
}


export default SideBarItem
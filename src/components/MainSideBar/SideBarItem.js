import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import SetMenuClickContext from "../../contexts/SetMenuClickContext"
import IconSideBarItem from "../IconSideBarItem"
import { useNavigate } from "react-router-dom"

const SideBarItem = ({ text, path, icon }) => {
  const navigate = useNavigate()
  const changeMenuVisibility = useContext(SetMenuClickContext)
  return (
    <Button
      justifyContent='flex-start'
      py='6'
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
      onClick={() => {
        if (changeMenuVisibility) {
          changeMenuVisibility()
        }
        navigate(path)
      }}
    >
      <IconSideBarItem icon={icon} />
      <span>{text}</span>
    </Button>
  )
}


export default SideBarItem
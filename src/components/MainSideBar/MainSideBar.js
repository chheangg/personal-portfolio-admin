import { Flex, Button } from "@chakra-ui/react"
import { mdiHome, mdiPlus, mdiPost, mdiListBox } from '@mdi/js';
import { useContext } from "react";
import SetUserContext from "../../contexts/SetUserContext";
import SideBarItem from "./SideBarItem"

const MainSideBar = () => {
  const setUser = useContext(SetUserContext)
  return (
    <Flex flexDir='column'>
      <SideBarItem text='Home' path='/' icon={mdiHome} />
      <SideBarItem text='Create' path='/create' icon={mdiPlus} />
      <SideBarItem text='Blogs' path='/blogs' icon={mdiPost} />
      <SideBarItem text='Topics' path='/topics' icon={mdiListBox} />
      <Button 
        onClick={() => setUser(null)}
        color='red.500' 
        fontWeight='md'
        justifyContent='flex-start'
        borderRadius='0'
        variant='ghost'
        _hover={
          {
            bgColor: 'transparent'
          }
        }
      >Sign out</Button>
    </Flex>
  )
}

export default MainSideBar
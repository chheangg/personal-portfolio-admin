import { Flex, Button, IconButton } from "@chakra-ui/react"
import { mdiHome, mdiPlus, mdiPost, mdiListBox } from '@mdi/js';
import { useContext } from "react";
import SetUserContext from "../../contexts/SetUserContext";
import SideBarItem from "./SideBarItem"
import { IoMdClose } from 'react-icons/io'
import SetMenuClickContext from "../../contexts/SetMenuClickContext";

const MainSideBar = () => {
  const setUser = useContext(SetUserContext)
  const changeMenuVisibility = useContext(SetMenuClickContext)
  return (
    <Flex flexDir='column' bgColor='gray.700' color='gray.50'>
      <IconButton
        display={{
          base: 'block',
          lg: 'none'
        }}
        position='absolute'
        right='0'
        top='0'
        margin='2'
        bgColor='transparent'
        icon={<IoMdClose size='48' color='#E53E3E' />}
        _hover={{
          bgColor:'transparent'
        }}
        onClick={changeMenuVisibility}
      >

      </IconButton>
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
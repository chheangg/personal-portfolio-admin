import { Flex } from "@chakra-ui/react"
import { mdiHome, mdiPlus, mdiPost, mdiListBox } from '@mdi/js';
import SideBarItem from "./SideBarItem"

const MainSideBar = () => {
  return (
    <Flex flexDir='column' gap='2'>
      <SideBarItem text='Home' path='/' icon={mdiHome} />
      <SideBarItem text='Create' path='/create' icon={mdiPlus} />
      <SideBarItem text='Blogs' path='/blogs' icon={mdiPost} />
      <SideBarItem text='Topics' path='/topics' icon={mdiListBox} />
    </Flex>
  )
}

export default MainSideBar
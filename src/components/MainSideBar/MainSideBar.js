import { Flex, Divider } from "@chakra-ui/react"
import SideBarItem from "./SideBarItem"

const MainSideBar = () => {
  return (
    <Flex flexDir='column'>
      <SideBarItem text='Home' path='/' />
      <SideBarItem text='Create' path='/create' />
      <SideBarItem text='Blogs' path='/blogs' />
      <SideBarItem text='Topics' path='/topics' />
    </Flex>
  )
}

export default MainSideBar
import { Flex, Divider } from "@chakra-ui/react"
import SideBarItem from "./SideBarItem"

const MainSideBar = () => {
  return (
    <Flex flexDir='column' alignItems='stretch'>
      <SideBarItem text='Home' />
      <Divider m='0' orientation="horizontal" />
      <SideBarItem text='Create' />
      <Divider m='0' orientation="horizontal" />
      <SideBarItem text='Blogs' />
      <Divider m='0' orientation="horizontal" />
      <SideBarItem text='Topics' />
      <Divider m='0' orientation="horizontal" />
    </Flex>
  )
}

export default MainSideBar
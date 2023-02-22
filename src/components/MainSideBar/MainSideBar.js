import { VStack } from "@chakra-ui/react"
import SideBarItem from "./SideBarItem"

const MainSideBar = () => {
  return (
    <VStack pt='4' gap='0' alignItems='stretch'>
      <SideBarItem text='Home' />
      <SideBarItem text='Create' />
      <SideBarItem text='Blogs' />
      <SideBarItem text='Topics' />
    </VStack>
  )
}

export default MainSideBar
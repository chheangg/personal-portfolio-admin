import { 
  Grid, 
  GridItem,
} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import MainSideBar from "../components/MainSideBar/MainSideBar"


const Layout = () => {
  return (
    <Grid color='gray.50' templateColumns='1fr 5fr' h='100vh' maxh='100vh'>
      <GridItem bgColor='gray.700' pt='14'>
        <MainSideBar />
      </GridItem>
      <GridItem bgColor='gray.50' color='gray.700'  maxH='100vh' overflow='scroll'>
        <Outlet />
      </GridItem>
    </Grid>
  )
} 


export default Layout
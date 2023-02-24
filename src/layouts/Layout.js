import { 
  Grid, 
  GridItem,
} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import MainSideBar from "../components/MainSideBar/MainSideBar"


const Layout = () => {
  return (
    <Grid h='calc(100vh)' color='gray.50' templateColumns='1fr 5fr'>
      <GridItem bgColor='gray.700' pt='14'>
        <MainSideBar />
      </GridItem>
      <GridItem bgColor='gray.50' color='gray.700'>
        <Outlet />
      </GridItem>
    </Grid>
  )
} 


export default Layout
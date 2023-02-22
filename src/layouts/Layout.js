import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import MainSideBar from "../components/MainSideBar/MainSideBar"

const Layout = () => 
  <Grid h='calc(100vh)' color='gray.50' templateColumns='1fr 4fr' gap='4'>
    <GridItem bgColor='gray.700'>
      <MainSideBar />
    </GridItem>
    <GridItem bgColor='gray.50'>
      <Outlet />
    </GridItem>
  </Grid>

export default Layout
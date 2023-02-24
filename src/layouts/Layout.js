import { 
  Grid, 
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import MainSideBar from "../components/MainSideBar/MainSideBar"


const Layout = () => 
  <Grid h='calc(100vh)' color='gray.50' templateColumns='1fr 5fr'>
    <GridItem bgColor='gray.700' pt='8'>
      <MainSideBar />
    </GridItem>
    <GridItem bgColor='gray.50' color='gray.700'>
      <Breadcrumb h='8' bgColor='gray.300'>
        // Add Bread Crumb
      </Breadcrumb>
      <Outlet />
    </GridItem>
  </Grid>

export default Layout
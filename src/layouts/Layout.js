import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const Layout = () => 
  <Grid templateColumns='1fr 4fr' gap='4'>
    <GridItem>
      <aside>
        side bar
      </aside>
    </GridItem>
    <GridItem>
      <Outlet />
    </GridItem>
  </Grid>

export default Layout
import { 
  Box,
  Grid, 
  GridItem,
} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import SetMenuClickContext from "../contexts/SetMenuClickContext"
import MainSideBar from "../components/MainSideBar/MainSideBar"


const Layout = () => {
  const [ showMenuBar, setShowMenuBar ] = useState(false)
  const changeMenuVisibility = () => setShowMenuBar(!showMenuBar)
  return (
    <Grid color='gray.50' templateColumns={{
      base: '1fr',
      lg: '1fr 5fr'
    }} h='100vh' maxh='100vh'>
      <GridItem 
      display={{
        base: 'none',
        lg: 'block'
      }}
      bgColor='gray.700'
      pt='14'>
        <MainSideBar />
      </GridItem>
      <GridItem bgColor='gray.50' color='gray.700'  maxH='100vh' overflow='scroll'>
        <Box
          display={{
            base: showMenuBar ? 'block' : 'none',
            lg: 'none'
          }}
          position='static'
          top='0'
          bottom='0'
          right='0'
          left='0'
        >
          <Box
            position='absolute'
            bgColor='gray.700'
            pt='14'
            top='0'
            bottom='0'
            right='0'
            width='60vw'
            zIndex='1'
          >       
            <SetMenuClickContext.Provider value={changeMenuVisibility}>
              <MainSideBar />
            </SetMenuClickContext.Provider>
          </Box>
        </Box>
          <SetMenuClickContext.Provider value={changeMenuVisibility}>
            <Outlet />
          </SetMenuClickContext.Provider>
      </GridItem>
    </Grid>
  )
} 


export default Layout
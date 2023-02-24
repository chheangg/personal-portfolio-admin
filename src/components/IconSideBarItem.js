import { Box } from "@chakra-ui/react"
import Icon from "@mdi/react"

const IconSideBarItem = ({icon}) =>
  <Box bg='gray.50' color='gray.700' borderRadius='sm' p='1' mr='3'>
    <Icon path={icon} size={0.7}></Icon>
  </Box>

export default IconSideBarItem
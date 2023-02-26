import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  MenuGroup
} from '@chakra-ui/react'

import { mdiDotsVertical, mdiFileEditOutline, mdiDelete } from '@mdi/js';
import Icon from '@mdi/react'

const ContentDropDown = () =>
  <Flex justifyContent='flex-end'>
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<Icon size={1} path={mdiDotsVertical} />}
        variant='outline'
        border='none'
      />
      <MenuList>
        <MenuGroup title='Option'>
          <MenuItem icon={<Icon size={1} path={mdiFileEditOutline} />} >Edit</MenuItem>
          <MenuItem icon={<Icon path={mdiDelete} size={1} />} color='red.500'>Delete</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>  
  </Flex>

export default ContentDropDown
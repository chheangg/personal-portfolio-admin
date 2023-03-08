import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { useContext } from 'react';
import SetMenuClickContext from '../contexts/SetMenuClickContext';
import { Link } from 'react-router-dom';
import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

import { GiHamburgerMenu } from 'react-icons/gi'

import { v4 as uuidv4 } from 'uuid';

const BreadcrumbList = ({ paths }) => {
  const changeMenuVisibility = useContext(SetMenuClickContext);
  return (
    <>
      <Flex
        bgColor='gray.200'
        color='teal.400'
        alignItems='center'
        paddingX='2'
      >
        <Breadcrumb
          fontSize={{
            base: 'xl',
            lg: 'md'
          }}
          p={[2, 4]}
          width='100vw'
          bgColor='gray.200'
          color='teal.400'
          separator={<Icon path={mdiChevronRight} size={0.75} />}
          justifyContent='space-between'
        >
          {paths.map(path => <BreadcrumbItem key={uuidv4()}>
            <Link to={path.href}>{path.title}</Link>
          </BreadcrumbItem>
          )}
        </Breadcrumb>
        <IconButton
          aria-label='Menu bar'
          icon={<GiHamburgerMenu size='32' />}
          bg='transparent'
          onClick={changeMenuVisibility}
          display={{
            base: 'flex',
            lg: 'none'
          }} />
      </Flex>
    </>
  );
}

export default BreadcrumbList
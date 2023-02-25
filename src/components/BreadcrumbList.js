import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

import { v4 as uuidv4 } from 'uuid';

const BreadcrumbList = ({ paths }) => (
  <Breadcrumb p={[2, 4]} bgColor='gray.200' color='teal.400' separator={<Icon path={mdiChevronRight} size={0.75} />}>
    {paths.map(path => 
      <BreadcrumbItem key={uuidv4()}>
        <BreadcrumbLink href={path.href}>{path.title}</BreadcrumbLink>
      </BreadcrumbItem>  
    )}
  </Breadcrumb>
)

export default BreadcrumbList
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';

import { v4 as uuidv4 } from 'uuid';

const BreadcrumbList = ({ paths }) => (
  <Breadcrumb p={[2, 4]} bgColor='gray.200' fontWeight='semibold' color='teal.400'>
    {paths.map(path => 
      <BreadcrumbItem key={uuidv4()}>
        <BreadcrumbLink href={path.href}>{path.title}</BreadcrumbLink>
      </BreadcrumbItem>  
    )}
  </Breadcrumb>
)

export default BreadcrumbList
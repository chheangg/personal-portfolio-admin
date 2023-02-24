import { Container, Box, Heading } from "@chakra-ui/react";

const Page = ({title, children}) => 
  <Box
    p={[4, 4]}
  >
    <Heading mb='4'>
      {title}
    </Heading>
    {children}
  </Box>

export default Page
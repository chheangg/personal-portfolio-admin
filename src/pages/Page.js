import { 
  Box, 
  Heading,
} from "@chakra-ui/react";
import BreadcrumbList from "../components/BreadcrumbList.js";

const Page = ({title, children, paths}) =>
  <>
    <BreadcrumbList paths={paths} />
    <Box
      p={[4, 4]}
    >
      <Heading mb='4'>
        {title}
      </Heading>
      {children}
    </Box>
  </>

export default Page
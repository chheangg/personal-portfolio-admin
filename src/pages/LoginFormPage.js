import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Heading,
  VStack,
  Flex
} from "@chakra-ui/react"

const LoginFormPage = ({ onLogin }) => (
  <VStack h='100vh' maxH='100vh' bgGradient='linear(to-r, teal.300, gray.700)' color='gray.50'>
    <Heading marginY='16' textAlign='center'>Personal Portfolio Admin Panel</Heading>
    <form onSubmit={onLogin}>
      <Flex flexDir='column' gap='4'>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id='username' name='username' variant='flushed'></Input>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id='password' name='password' type='password' variant='flushed'></Input>
      </FormControl>
      </Flex>
      <Button type='submit' mt='4' colorScheme='teal'>Sign in</Button>
    </form>
  </VStack>
)

export default LoginFormPage
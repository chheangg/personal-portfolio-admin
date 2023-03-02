import {
  Center,
  FormControl,
  Input,
  FormLabel,
  Button
} from "@chakra-ui/react"

const LoginFormPage = ({ onLogin }) => (
  <Center>
    <form onSubmit={onLogin}>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id='username' name='username'></Input>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id='password' name='password' type='password'></Input>
      </FormControl>
      <Button type='submit' mt='4'>Sign in</Button>
    </form>
  </Center>
)

export default LoginFormPage
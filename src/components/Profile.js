import { Flex, Avatar, Text } from "@chakra-ui/react";

const Profile = ({ author }) => (
  <Flex bgColor='gray.200' alignItems='center' gap='4' borderRadius='md' p='2'>
    <Avatar size='sm' name={author.name} src='/public/images/test1.png' />
    <Text fontWeight='semibold'>{author.name}</Text>
  </Flex>
)

export default Profile
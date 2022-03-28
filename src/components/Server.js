import {
  Text,
  Avatar,
  Flex,
  Badge,
  Spacer,
} from '@chakra-ui/react';

import './Servers';
import LinkEditButton from './LinkEditButton';

const Server = ({ server, isEditing }) => {

  return (
    <Flex
      width="390px"
      minH="70px"
      borderWidth="1px"
      borderRadius="lg"
      padding="12px"
      align="center"
      justify="space-between"
      gap="12px"
    >
      <Avatar name={server.title} />
      <Text fontSize="2xl">{server.title}</Text>
      <Spacer />
      <Badge colorScheme={'green'}>Available</Badge>
      <LinkEditButton isEditing={isEditing} server={server}/>
    </Flex>
  );
};

export default Server;

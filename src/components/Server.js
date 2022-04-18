import { Text, Avatar, Flex, Badge, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import './Servers';
import LinkEditButton from './LinkEditButton';

const Server = ({ server, isEditing, setServers, serversStatus }) => {
  const [serverStatus, setServerStatus] = useState(false);

  useEffect(() => {
    if (
      serversStatus.find(obj => {
        return obj.id === server.id;
      }) !== undefined
    ) {
      const statusObj = serversStatus.find(obj => {
        return obj.id === server.id;
      });
      setServerStatus(statusObj.status);
    }
  }, [serversStatus, server.id]);

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
      {serverStatus ? (
        <Badge colorScheme={'green'}>Available</Badge>
      ) : (
        <Badge colorScheme={'red'}>Down</Badge>
      )}
      <LinkEditButton
        isEditing={isEditing}
        server={server}
        setServers={setServers}
      />
    </Flex>
  );
};

export default Server;

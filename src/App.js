import React from 'react';
import { useEffect, useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import {
  ChakraProvider,
  Center,
  Grid,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import theme from './theme';

import Servers from './components/Servers';
import AddServer from './components/AddServer';

function App() {
  const [servers, setServers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getServers = async () => {
      const serversFromServer = await fetchServers();
      setServers(serversFromServer);
    };

    getServers();
  }, []);

  const fetchServers = async () => {
    const res = await fetch(process.env.REACT_APP_API_ADDRESS);
    const data = await res.json();

    return data;
  };

  return (
    <ChakraProvider theme={theme}>
      <Center
        h="100vh"
        w="100vw"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex></Flex>
        <Grid
          templateColumns="repeat(auto-fit, minmax(390px, max-content))"
          gap="30px"
          width="100%"
          maxW="1230px"
          justifyContent="center"
        >
          <Servers servers={servers} isEditing={isEditing} />
          <AddServer isEditing={isEditing} />
        </Grid>
        <IconButton
          icon={<BiPencil />}
          margin={3}
          alignSelf="flex-end"
          variant="outline"
          isActive={isEditing}
          onClick={() => setIsEditing(!isEditing)}
        />
      </Center>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPencil, BiSync } from 'react-icons/bi';
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
  const [serversStatus, setServersStatus] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    updateStatus();
    axios.get(process.env.REACT_APP_API_ADDRESS + '/servers').then(response => {
      setServers(response.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateStatus();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateStatus() {
    axios
      .get(process.env.REACT_APP_API_ADDRESS + '/status')
      .then(response => {
        setServersStatus(() => response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

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
          <Servers
            servers={servers}
            isEditing={isEditing}
            setServers={setServers}
            serversStatus={serversStatus}
            updateStatus={updateStatus}
          />
          <AddServer isEditing={isEditing} setServers={setServers} />
        </Grid>
        <Flex margin={'3'} gap={'3'} alignSelf="flex-end">
          <IconButton
            icon={<BiSync />}
            variant="outline"
            onClick={updateStatus}
          />
          <IconButton
            icon={<BiPencil />}
            variant="outline"
            isActive={isEditing}
            onClick={() => setIsEditing(!isEditing)}
          />
        </Flex>
      </Center>
    </ChakraProvider>
  );
}

export default App;

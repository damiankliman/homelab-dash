import { useRef, useState } from 'react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';

import AlertBox from './AlertBox';

function AddEditServerModal(props) {
  const initialRef = useRef();

  const initialServerData = {
    id: props?.server?.id || '',
    title: props?.server?.title ?? '',
    webURL: props?.server?.webURL || '',
    pingAddress: props?.server?.pingAddress || '',
    pingPort: props?.server?.pingPort ?? '',
  };

  const [serverData, setServerData] = useState(initialServerData);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Unknown error');

  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const closeResetModal = () => {
    props.onClose();
    onCloseAlert();
    setServerData(initialServerData);
  };

  const closeModal = () => {
    props.onClose();
    onCloseAlert();
  };

  const handleChange = (value, key) => {
    const obj = { ...serverData };
    obj[key] = value;
    setServerData(obj);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsSaving(true);
    props.newServer
      ? axios
          .post(process.env.REACT_APP_API_ADDRESS + '/servers/new', serverData)
          .then(response => {
            props.setServers(response.data);
            closeResetModal();
            setIsSaving(false);
          })
          .catch(error => {
            setErrorMessage(error.response.data.message);
            setIsSaving(false);
            onOpenAlert();
          })
      : axios
          .put(process.env.REACT_APP_API_ADDRESS + '/servers/edit', serverData)
          .then(response => {
            props.setServers(response.data);
            closeModal();
            setIsSaving(false);
          })
          .catch(error => {
            setErrorMessage(error.response.data.message);
            setIsSaving(false);
            onOpenAlert();
          });
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    axios
      .delete(process.env.REACT_APP_API_ADDRESS + '/servers/delete', {
        data: { id: serverData.id },
      })
      .then(response => {
        props.setServers(response.data);
      })
      .catch(error => {
        setErrorMessage(error.response.data.message);
        setIsDeleting(false);
        onOpenAlert();
      });
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={closeResetModal}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {props.newServer ? 'Add Server' : 'Edit Server'}
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing="10px" align="start">
              <AlertBox
                type="error"
                title="Error!"
                message={errorMessage}
                onClose={onCloseAlert}
                isOpen={isOpenAlert}
              />
              <FormControl>
                <FormLabel fontSize="large">Name :</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="example: minecraft server"
                  defaultValue={serverData?.title}
                  onChange={event => handleChange(event.target.value, 'title')}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="large">Interface URL :</FormLabel>
                <Input
                  placeholder="http://"
                  defaultValue={serverData?.webURL}
                  onChange={event => handleChange(event.target.value, 'webURL')}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="large">Ping Address :</FormLabel>
                <Input
                  placeholder="192.x.x.x"
                  defaultValue={serverData?.pingAddress}
                  onChange={event =>
                    handleChange(event.target.value, 'pingAddress')
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="large">Ping Port :</FormLabel>
                <NumberInput
                  maxW="100px"
                  defaultValue={serverData?.pingPort}
                  onChange={(value, valueAsNumber) => {
                    handleChange(valueAsNumber, 'pingPort');
                  }}
                >
                  <NumberInputField placeholder="1234" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" justify="space-between">
              {props.newServer ? null : (
                <Button colorScheme="red" onClick={handleDelete}>
                  {isDeleting ? <Spinner /> : 'Remove'}
                </Button>
              )}
              <Spacer />
              <Button colorScheme="green" type="submit">
                {isSaving ? <Spinner /> : 'Save'}
              </Button>
            </Flex>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default AddEditServerModal;

import { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  VStack,
  Flex,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function EditServerModal(props) {
  const initialRef = useRef();

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Server</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="10px" align="start">
            <Text fontSize="large">Name :</Text>
            <Input
              ref={initialRef}
              placeholder="example: minecraft server"
              value={props.server.title}
            />
            <Text fontSize="large">Interface URL :</Text>
            <Input placeholder="http://" value={props.server.webURL} />
            <Text fontSize="large">Ping Address :</Text>
            <Input placeholder="192.x.x.x" value={props.server.pingAddress} />
            <Text fontSize="large">Ping Port :</Text>
            <NumberInput maxW="100px" defaultValue={props.server.pingPort}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Flex w="100%" justify="space-between">
            <Button colorScheme="red" onClick={props.onClose}>
              Remove
            </Button>
            <Button colorScheme="green" onClick={props.onClose}>
              Save
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditServerModal;

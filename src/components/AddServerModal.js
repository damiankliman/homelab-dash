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
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

function AddServerModal(props) {
  const initialRef = useRef()

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Server</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="10px" align="start">
            <Text fontSize="large">Name :</Text>
            <Input ref={initialRef} placeholder="example: minecraft server" />
            <Text fontSize="large">Interface URL :</Text>
            <Input placeholder="http://" />
            <Text fontSize="large">Ping Address :</Text>
            <Input placeholder="192.x.x.x" />
            <Text fontSize="large">Ping Port :</Text>
            <NumberInput maxW="100px" >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={props.onClose}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddServerModal;

import { Fragment } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import AddServerModal from './AddServerModal';

export function AddServer({ isEditing }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return isEditing ? (
    <Fragment>
      <Button
        width="390px"
        height="74px"
        borderWidth="1px"
        borderRadius="lg"
        padding="12px"
        align="center"
        justify="center"
        gap="12px"
        onClick={onOpen}
      >
        <AddIcon w={6} h={6} color="lightgray" />
      </Button>
      <AddServerModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  ) : (
    null
  );
}

export default AddServer;

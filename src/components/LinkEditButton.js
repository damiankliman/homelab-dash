import { Fragment } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { BiCog } from 'react-icons/bi';
import { IconButton, useDisclosure } from '@chakra-ui/react';

import AddEditServerModal from './AddEditServerModal';

function LinkEditButton({ server, isEditing }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function linkButtonClicked() {
    window.open(server.webURL);
  }

  return isEditing ? (
    <Fragment>
      <IconButton
        aria-label="Edit"
        icon={<BiCog />}
        size="sm"
        variant="outline"
        colorScheme="grey"
        onClick={onOpen}
      />
      <AddEditServerModal
        isOpen={isOpen}
        onClose={onClose}
        server={server}
        newServer={false}
      />
    </Fragment>
  ) : (
    <IconButton
      aria-label="See more"
      icon={<MdArrowForward />}
      size="sm"
      variant="outline"
      onClick={linkButtonClicked}
    />
  );
}

export default LinkEditButton;

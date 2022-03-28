import { MdArrowForward } from 'react-icons/md';
import { BiCog } from 'react-icons/bi';
import { IconButton, useDisclosure } from '@chakra-ui/react';

import EditServerModal from './EditServerModal';

function LinkEditButton({ server, isEditing }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function linkButtonClicked() {
    window.open(server.webURL);
  }

  return isEditing ? (
    <>
      <IconButton
        aria-label="Edit"
        icon={<BiCog />}
        size="sm"
        variant="outline"
        colorScheme="grey"
        onClick={onOpen}
      />
      <EditServerModal isOpen={isOpen} onClose={onClose} server={server} />
    </>
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

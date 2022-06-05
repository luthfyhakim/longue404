import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Avatar,
  Flex,
  Box,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
const ModalEditUser = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}
            gap="2"
          >
            <Avatar name="YN" bg="cyan.500" color="white"></Avatar>
            <Editable defaultValue="Username Here">
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Editable defaultValue="Email@mail.com" color={"gray.500"}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="cyan" color="white" rounded={"full"}>
            Ubah
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditUser;

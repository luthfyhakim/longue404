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
} from "@chakra-ui/react";
const ModalBrowseUsers = ({ isOpen, onClose, onOpenInfoUser }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="inside"
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cari User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el) => (
            <Flex alignItems={"center"} gap="4" marginBottom={4}>
              <Avatar name="YN" bg="cyan.500" color="white"></Avatar>
              <Text>Username Here</Text>
              <Button marginLeft={"auto"} size="xs" onClick={onOpenInfoUser}>
                Lihat
              </Button>
            </Flex>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button variant={"ghost"} rounded="full">
            Tutup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBrowseUsers;

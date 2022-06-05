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
const ModalInfoUser = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Info User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}
            gap="2"
          >
            <Avatar name="YN" bg="cyan.500" color="white"></Avatar>
            <Text>Username Here</Text>
            <Text size="md" color="gray.500">
              Email@mail.com
            </Text>
          </Flex>
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

export default ModalInfoUser;

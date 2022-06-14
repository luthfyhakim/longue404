import {
  Avatar, Button, Flex, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ModalBrowseUsers = ({ isOpen, onClose, onOpenInfoUser }) => {
  const users = useSelector((st) => st.users);

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
          {users.map((el, i) => (
            <Flex alignItems={"center"} gap="4" marginBottom={4} key={i}>
              <Avatar 
                name="YN" 
                bg="cyan.500" 
                color="white"
                src={el.avatar}
                ></Avatar>
              <Text>{el.username}</Text>
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

import {
  Avatar, Button, Flex, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "../../redux/action";

const ModalBrowseUsers = ({ isOpen, onClose, onOpenInfoUser }) => {
  const users = useSelector((st) => st.users);
  const dispatch = useDispatch();

  const handleFindByIdUser = (id) => {
    // console.log(id);
    onOpenInfoUser();
    dispatch(usersActions.getUserById(id));
  }

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
              <Button marginLeft={"auto"} size="xs" onClick={() => handleFindByIdUser(el._id)}>
                Lihat
              </Button>
            </Flex>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button variant={"ghost"} rounded="full" onClick={onClose}>
            Tutup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBrowseUsers;

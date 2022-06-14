import {
  Avatar, Box, Button, Flex, Grid,
  GridItem, Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement, Text, useDisclosure
} from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../redux/action";

// modals
import ModalInfoUser from "../components/modalInfoUser";

// icons
import { FiEdit, FiUser } from "react-icons/fi";
import { HiPaperAirplane } from "react-icons/hi";
import camp404Logo from "../assets/camp404_logo.png";
import ModalBrowseUsers from "../components/modalBrowseUsers";
import ModalEditUser from "../components/modalEditUser";

const ChatPage = () => {
  // state open & close untuk modal (lihat lebih lengkap di docs chakra ui)
  const {
    isOpen: isOpenInfoUser,
    onOpen: onOpenInfoUser,
    onClose: onCloseInfoUser,
  } = useDisclosure();

  const {
    isOpen: isOpenEditUser,
    onOpen: onOpenEditUser,
    onClose: onCloseEditUser,
  } = useDisclosure();

  const {
    isOpen: isOpenBrowseUsers,
    onOpen: onOpenBrowseUsers,
    onClose: onCloseBrowseUsers,
  } = useDisclosure();

  const dispatch = useDispatch();
  const loggedUser = useSelector((st) => st.loggedUser);

  useEffect(() => {
    dispatch(usersActions.getUsers());
    dispatch(usersActions.getLoggedUser());
  }, []);

  return (
    <>
      <Box
        minH="100vh"
        bgColor="cyan.100"
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          borderRadius={"xl"}
          bgColor="white"
          shadow={"md"}
          padding="4"
          width={{ base: "70vw", md: "60vw", xl: "50vw" }}
          height={"75vh"}
          position="relative"
        >
          <Grid templateColumns="repeat(4, 1fr)" height={"100%"}>
            <GridItem
              rounded="lg"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              flexDirection="column"
              // borderRightWidth={1}
              bg="gray.100"
              height="87%"
            >
              <Flex>
                <Avatar
                  marginLeft={3}
                  name="YN"
                  bg="cyan.500"
                  color="white"
                  src={loggedUser.avatar}
                ></Avatar>
                <Icon
                  onClick={onOpenEditUser}
                  fontSize={12}
                  as={FiEdit}
                  color="gray.500"
                  cursor={"pointer"}
                  alignSelf="end"
                />
              </Flex>
              <Text marginTop="2">{loggedUser.username}</Text>
              <Button
                onClick={onOpenBrowseUsers}
                bg="gray.50"
                marginTop={4}
                rounded={"full"}
                fontSize="14px"
              >
                <Icon as={FiUser} marginRight="2" />
                Cari User
              </Button>
            </GridItem>
            <GridItem colSpan={3}>
              <Flex
                alignItems={"center"}
                justifyContent="center"
                marginTop={2}
                marginBottom="4"
              >
                <Image src={camp404Logo} boxSize="12" alt="" />
              </Flex>
              <Box padding="4" height={"70%"} overflowY="scroll">
                {[0, 0, 0, 0, 0, 0].map((el) => (
                  <Box
                    border="1px"
                    borderColor={"gray.300"}
                    rounded="lg"
                    width="75%"
                    marginBottom="2"
                    padding={"1"}
                    paddingLeft="2"
                  >
                    <Flex alignItems={"center"} marginBottom="2">
                      <Avatar name="saha we" size="xs" marginRight={"2"} />
                      <Text fontSize={"xs"}>Name Here</Text>
                    </Flex>
                    <Text textAlign={"start"}>Hari ini ada kelas ?</Text>
                  </Box>
                ))}
                <Box
                  bg="cyan.500"
                  color="white"
                  rounded="lg"
                  width="75%"
                  marginLeft={"auto"}
                  marginBottom="2"
                  padding={"1"}
                  paddingRight="2"
                >
                  <Flex alignItems={"center"} marginBottom="2">
                    <Text fontSize={"xs"} marginLeft="auto">
                      Your Name
                    </Text>
                    <Avatar name="saha we" size="xs" marginLeft={"2"} />
                  </Flex>
                  <Text textAlign={"end"}>Engga adaaa :/</Text>
                </Box>
              </Box>
              <InputGroup>
                <Input marginLeft={2} />
                <InputRightElement
                  children={<Icon as={HiPaperAirplane} color="cyan.500" />}
                />
              </InputGroup>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <ModalInfoUser isOpen={isOpenInfoUser} onClose={onCloseInfoUser} />
      <ModalEditUser isOpen={isOpenEditUser} onClose={onCloseEditUser} />
      <ModalBrowseUsers
        isOpen={isOpenBrowseUsers}
        onClose={onCloseBrowseUsers}
        onOpenInfoUser={onOpenInfoUser}
      />
    </>
  );
};

export default ChatPage;

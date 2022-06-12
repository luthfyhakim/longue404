import {
  Box, Button,
  Flex, FormControl,
  FormLabel, Image, Input, Select, Text, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../api/auth";
import camp404Logo from "../assets/camp404_logo.png";

const Register = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/");
  };

  const [inputState, setInputState] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const toast = useToast();

  const handleRegister = async () => {
    const body = {};
    body['username'] = inputState.username;
    body['email'] = inputState.email;
    body['password'] = inputState.password;
    body['gender'] = inputState.gender;

    let response = await register(body);
    if (response.status === "Success") {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })
      goToLoginPage();
    } else {
      toast({
        title: 'Error occured.',
        description: response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  return (
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
        width={"30vw"}
      >
        {/* {JSON.stringify(inputState)} */}
        <Flex alignItems={"center"} justifyContent="center">
          <Image src={camp404Logo} boxSize="12" alt="" />
        </Flex>
        <Text fontSize="md" marginBottom="2">
          Selamat Datang di Longue 404 !
        </Text>
        <Text fontSize="2xl" fontWeight={"bold"} color="cyan.500">
          Register
        </Text>
        <FormControl onSubmit={handleRegister}>
          {/* field username */}
          <FormLabel htmlFor="username">
            Username
          </FormLabel>
          <Input id="username" type="text" placeholder="Enter username" onChange={(event) => {
            setInputState({ ...inputState, username: event.target.value });
          }} />

          {/* field email */}
          <FormLabel htmlFor="email" marginTop={2}>
            Email
          </FormLabel>
          <Input id="email" type="email" placeholder="Enter email" onChange={(event) => {
            setInputState({ ...inputState, email: event.target.value });
          }} />

          {/* field password */}
          <FormLabel htmlFor="password" marginTop={2}>
            Password
          </FormLabel>
          <Input id="password" type="password" placeholder="Enter password" onChange={(event) => {
            setInputState({ ...inputState, password: event.target.value });
          }} />

          {/* field gender */}
          <FormLabel htmlFor="gender" marginTop={2}>
            Gender
          </FormLabel>
          <Select placeholder="Select Option" onChange={(event) => {
            setInputState({ ...inputState, gender: event.target.value });
          }}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Select>

          <Button
            onClick={handleRegister}
            type="submit"
            colorScheme="cyan"
            color="white"
            width="100%"
            rounded={"full"}
            marginTop="4"
          >
            Daftar
          </Button>
          <Text fontSize="sm" color="gray.500" marginTop="4">
            Sudah punya akun ?
            <Text
              marginLeft="2"
              display={"inline-block"}
              color="cyan.500"
              cursor="pointer"
              onClick={goToLoginPage}
            >
              {" "}
              Login
            </Text>
          </Text>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Register;

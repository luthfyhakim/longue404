import {
  Box, Button, Flex, FormControl,
  FormLabel, Image, Input, Text, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import camp404Logo from "../assets/camp404_logo.png";
import { login } from "../api/auth";

const Login = () => {
  const history = useHistory();

  const goToRegisterPage = () => {
    history.push("/register");
  };

  const goToChatPage = () => {
    history.push("/chat");
  }

  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });

  const toast = useToast();

  const handleLogin = async () => {
    const body = {};
    body['email'] = inputState.email;
    body['password'] = inputState.password;

    let response = await login(body);
    if (response.status === "Success") {
      localStorage.setItem("access_token", response.data);
      toast({
        title: 'Welcome To Chat App.',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })
      goToChatPage();
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
          <Flex alignItems={"center"} justifyContent="center">
          <Image src={camp404Logo} boxSize="12" alt="" />
          </Flex>
        <Text fontSize="md" marginBottom="2" marginTop="2">
          Selamat Datang di Longue 404 !
        </Text>
        <Text fontSize="2xl" fontWeight={"bold"} color="cyan.500">
          Login
        </Text>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Enter email" onChange={(event) => {
            setInputState({ ...inputState, email: event.target.value });
          }} />

          <FormLabel htmlFor="password" marginTop={2}>
            Password
          </FormLabel>
          <Input id="password" type="password" placeholder="Enter password" onChange={(event) => {
            setInputState({ ...inputState, password: event.target.value });
          }} />

          <Button
            onClick={handleLogin}
            colorScheme="cyan"
            color="white"
            width="100%"
            rounded={"full"}
            marginTop="4"
          >
            Masuk
          </Button>
          <Text fontSize="sm" color="gray.500" marginTop="4">
            Tidak punya akun ?
            <Text
              marginLeft="2"
              display={"inline-block"}
              color="cyan.500"
              cursor="pointer"
              onClick={goToRegisterPage}
            >
              {" "}
              Register disini
            </Text>
          </Text>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;

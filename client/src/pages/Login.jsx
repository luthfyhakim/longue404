import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  Button,
  Image,
  Flex
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import camp404Logo from '../assets/camp404_logo.png'

const Login = () => {
  const history = useHistory();

  const goToRegisterPage = () => {
    history.push("/register");
  };
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
          <Input id="email" type="email" />
          <FormLabel htmlFor="password" marginTop={2}>
            Password
          </FormLabel>
          <Input id="password" type="password" />
          <Button
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

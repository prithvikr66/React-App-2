import { Container, defineStyle, Heading, Input, VStack ,Button, ButtonGroup,Text} from "@chakra-ui/react"
import React from "react"
import {Link} from "react-router-dom"
function Login(){
    return <Container maxW={"container.xl"}
    h={"100vh"}
    p={"16"}>
    <form>
        <VStack alignItems={"stretch"}
        spacing={"8"}
        w={["full","96"]}
        m={'auto'}
        my={"16"}
        >
        <Heading textAlign={"center"}>Welcome back</Heading>
        <Input placeholder="Email" type={"email"} required
        focusBorderColor="purple.500"></Input>
        <Input placeholder="Password" type={"text"} required
        focusBorderColor="purple.500"></Input>
        <Button variant={"link"}
        alignSelf={'flex-end'}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
        </Button>
        <Button
        colorScheme={"purple"}
        type={"submit"}>Log In</Button>
        <Text textAlign={"right"}>New User?</Text>
        <Button variant={"link"}
        alignSelf={'flex-end'}
        colorScheme={"purple"}>
            <Link to={"/signup"}>Sign Up</Link>
        </Button>


        </VStack>
    </form>

    </Container>
}


export default Login
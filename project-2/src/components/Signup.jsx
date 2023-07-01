import { Container, defineStyle, Heading, Input, VStack ,Button, ButtonGroup,Text, Avatar} from "@chakra-ui/react"
import React from "react"
import Login from "./Login"
import {Link} from "react-router-dom"
function Signup(){
    return <Container maxW={"container.xl"}
    h={"100vh"}
    p={"6"}>
    <form>
        <VStack alignItems={"stretch"}
        spacing={"8"}
        w={["full","96"]}
        m={'auto'}
        my={"16"}
        >
        <Heading textAlign={"center"}>Video Player</Heading>
        <Avatar alignSelf={"center"} boxSize={'32'}></Avatar>
        <Input placeholder="Name" type={"text"} required
        focusBorderColor="purple.500"></Input>
        <Input placeholder="Email" type={"email"} required
        focusBorderColor="purple.500"></Input>
        <Input placeholder="Password" type={"text"} required
        focusBorderColor="purple.500"></Input>
        
        <Button
        colorScheme={"purple"}
        type={"submit"}>Log In</Button>
        <Text textAlign={"right"}>Already a user?</Text>
        <Button variant={"link"}
        alignSelf={'flex-end'}
        colorScheme={"purple"}>
            <Link to={"/login"}>Login</Link>
        </Button>


        </VStack>
    </form>

    </Container>
}





export default Signup
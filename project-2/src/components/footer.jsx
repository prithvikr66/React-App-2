import { Box, Button, CardFooter, Heading, HStack, Input, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import {AiOutlineSend,AiOutlineLinkedin,AiOutlineGithub,
AiOutlineInstagram} from "react-icons/ai"

function Footer (){
    return <Box bgColor={"purple.200"} minH={"40"}
    p={"16"}
    color={"white"}
    >
    <Stack direction={["column","row"]}>
    <VStack w="full">
        <Heading
        fontSize={"25"}
        color={"purple.600"}>Drop a Feedback or report a problem</Heading>
        <HStack
        >
        <Input
        placeholder="Drop your message..."
        border={"none"}
        outline={"none"}
        focusBorderColor="none"
        borderRadius={"none"}>

        </Input>
        <Button
            p={"0"}
            colorScheme={"purple"}
            variant={"ghost"}
            borderRadius={"0 20px 20px 0"}
        ><AiOutlineSend
            size={"20"}
        /></Button>

    </HStack>
    </VStack>
    <VStack w="full"
    borderLeft={["none","1px solid purple"]}>
    <Heading
    color={"purple.600"}
    fontSize={"25"}
    >Ping me on my socials</Heading>
    <HStack>
        <Button type="link"
        p={'0'}
        variant={"link"}
        colorScheme={"purple"}
        
        ><AiOutlineLinkedin
        size={"40px"}

        /></Button>
        <Button type="link"
        p={'0'}
        variant={"link"}
        colorScheme={"purple"}
        
        ><AiOutlineGithub
        size={"40px"}

        />
        </Button>
        
        <Button type="link"
        
        p={'0'}
        variant={"link"}
        colorScheme={"purple"}
        
        ><AiOutlineInstagram
        size={"40px"}

        /></Button>
    </HStack>


    </VStack>
    

    </Stack>
    <Heading
    fontSize={"15"}
    color={"purple.600"}
    textAlign={"center"}

    >Copyright 2023</Heading>
     
    </Box>
}

export default Footer
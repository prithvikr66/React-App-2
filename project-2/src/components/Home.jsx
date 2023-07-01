import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react"
import react from "react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const styles={
    pos:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    p:"4",
    size:"4xl"
    

}

function Home(){
    return <>
        <Box>
            <MyCarousel/>
            <Container minH={"100vh"} maxW="full" p={"16"}>
                <Heading py={"5"}
                w={"fit-content"}
                m={"auto"}
                >Services</Heading>
                <Stack
                h="full"
                p="5"
                alignItems={"center"}
                direction={["column","row"]
                }
                >
                <Image src={img5}
                    filter={"hue-rotate(-130deg)"}
                    h={[40,400]}
                />
                <Text
                letterSpacing={"widest"}
                lineHeight={"250%"}
                pl={["50","150"]}
                fontSize={"20"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi quas quibusdam debitis ratione. At quos ullam quasi id quo illo, fugiat nobis esse dolorum enim consequuntur dignissimos quaerat quod, exercitationem sit ratione reprehenderit dolorem quia? Laboriosam deserunt reprehenderit odio.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi quas quibusdam debitis ratione. At quos ullam quasi id quo illo, fugiat nobis esse dolorum enim consequuntur dignissimos quaerat quod, exercitationem sit ratione reprehenderit dolorem quia? Laboriosam deserunt reprehenderit odio.
                </Text>

                </Stack>
            </Container>
        </Box>
    </>
}


function MyCarousel(){
    return (<Carousel autoPlay 
    infiniteLoop 
    interval={2000} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}>
    <Box w="full" h={"100vh"} >
    <Image src={img1}></Image>
    <Heading bgcolor={"blackAlpha.600"} {...styles}>Watch the future</Heading>

    </Box>
    <Box w="full" h={"100vh"} >
    <Image src={img2}></Image>
    <Heading {...styles}>stream into your favourite gamers</Heading>

    </Box>
    <Box w="full" h={"100vh"} >
    <Image src={img3}></Image>
    <Heading {...styles}>Watch the future</Heading>

    </Box>
    <Box w="full" h={"100vh"} >
    <Image src={img4}></Image>
    <Heading {...styles}>Dive into to world of metaverse</Heading>

    </Box>
    


    </Carousel>)
}

export default Home
import { Box, Image, Heading } from "@chakra-ui/react";

export const CarouselItem = ({ item }) => {
    return (
        <Box color='white' display='inline-flex' alignItems='left' justifyContent='left' w='full'>
            <Box whiteSpace='normal' maxW='450px'>
                <Image src={item.image} alt='' />
            </Box>
        </Box>
    );
};


export const CarouselItemHeader = ({ item }) => {
    return (
        <Box color='white' display='inline-flex' alignItems='left' justifyContent='left' w='full'>
            <Box whiteSpace='normal' maxW='500px'>
                <Heading fontSize='48px'>{item.header}</Heading>
            </Box>
        </Box>
    );
};
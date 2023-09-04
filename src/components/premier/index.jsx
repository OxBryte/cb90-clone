import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import ContainLayout from "../page-layout/container";

export default function Premier() {
    return (
        <Box w='full' py='100px'>
            <ContainLayout>
                <VStack gap='50px'>
                    <Heading maxW='780px' textAlign='center' fontSize={['20px', '30px']}>CB90-Pro: Your Premier Crypto Auto-Trading Solution for Profitable Results</Heading>
                    <Box maxW='880px'>
                        <Image src='./admin_img.png' alt='' />
                    </Box>
                </VStack>
            </ContainLayout>
        </Box>
    )
}

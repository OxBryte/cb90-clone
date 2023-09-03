import { Box, Button, Flex, HStack, Image, Link } from "@chakra-ui/react";
import ContainLayout from "../page-layout/container";
// import { useLocation } from "react-router-dom";

export default function Navbar() {

    // const location = useLocation();
    // const { pathname } = location;
    

    return (
        <Box as='nav' bg='brand.100' w='full'>
            <Box w='full' bg='brand.200' h='24px' />
            <ContainLayout>
                <Flex align='center' justify='space-between' py='16px' >
                    <Link to='/'>
                        <Image src='./cb90_logo.svg' w='100px' alt='CB90-PRO Logo' />
                    </Link>
                    <Flex align='center'>
                        <HStack spacing={10} color='brand.300'>
                            <Box _hover={{ color: 'brand.200' }}  cursor='pointer'>
                                <Box fontSize='14px' as='a' href='/'>Home</Box>
                            </Box>
                            <Box _hover={{ color: 'brand.200' }} cursor='pointer'>
                                <Box fontSize='14px' as='a' href='/about'>About</Box>
                            </Box>
                            <Box _hover={{ color: 'brand.200' }} cursor='pointer'>
                                <Box fontSize='14px' as='a' href='/pricing'>Pricing</Box>
                            </Box>
                            <Box _hover={{ color: 'brand.200' }} cursor='pointer'>
                                <Box fontSize='14px' as='a' href='/faqs'>Faqs</Box>
                            </Box>
                            <Box _hover={{ color: 'brand.200' }} cursor='pointer'>
                                <Box fontSize='14px' as='a' href='/'>Login</Box>
                            </Box>
                            <Button as='a' href='/' fontSize='14px' px='20px' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                                Register
                            </Button>
                        </HStack>

                    </Flex>
                </Flex>
            </ContainLayout>
        </Box>
    )
}

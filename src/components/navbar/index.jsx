import { Box, Button, Flex, HStack, IconButton, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import ContainLayout from "../page-layout/container";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export default function Navbar() {

    const location = useLocation();
    const { pathname } = location;
    const isDesktop = useBreakpointValue({ base: false, lg: true })


    return (
        <Box as='nav' bg='brand.100' w='full'>
            <Box w='full' bg='brand.200' h='24px' />
            <ContainLayout>
                <Flex align='center' justify='space-between' py='16px' >
                    <Link to='/'>
                        <Image src='./cb90_logo.svg' w='100px' alt='CB90-PRO Logo' />
                    </Link>
                    {
                        isDesktop ? (
                            <Flex align='center'>
                                <HStack spacing={10} color='brand.300'>
                                    <Box _hover={{ color: 'brand.200' }} cursor='pointer' color={pathname === '/' && 'brand.200'}>
                                        <Box fontSize='14px' as='a' href='/'>Home</Box>
                                    </Box>
                                    <Box _hover={{ color: 'brand.200' }} cursor='pointer' color={pathname === '/about' && 'brand.200'}>
                                        <Box fontSize='14px' as='a' href='/about'>About</Box>
                                    </Box>
                                    <Box _hover={{ color: 'brand.200' }} cursor='pointer' color={pathname === '/pricing' && 'brand.200'}>
                                        <Box fontSize='14px' as='a' href='/pricing'>Pricing</Box>
                                    </Box>
                                    <Box _hover={{ color: 'brand.200' }} cursor='pointer' color={pathname === '/faqs' && 'brand.200'}>
                                        <Box fontSize='14px' as='a' href='/faqs'>Faqs</Box>
                                    </Box>
                                    <Box _hover={{ color: 'brand.200' }} cursor='pointer' color={pathname === '/login' && 'brand.200'}>
                                        <Box fontSize='14px' as='a' href='/login'>Login</Box>
                                    </Box>
                                    <Button as='a' href='/signup' fontSize='14px' px='20px' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                                        Register
                                    </Button>
                                </HStack>

                            </Flex>
                        ) : (
                            <IconButton
                                variant="ghost"
                                color='white'
                                icon={<FiMenu fontSize="1.5rem" />}
                                aria-label="Open Menu"
                            />
                        )
                    }
                </Flex>
            </ContainLayout>
        </Box>
    )
}

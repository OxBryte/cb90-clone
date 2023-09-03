import { Box, Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Box as='nav' bg='brand.200' w='full' position='fixed' top='0'>
            <Flex justify='space-between' bg=''>
                <Link to='/'>

                </Link>
            </Flex>
        </Box>
    )
}

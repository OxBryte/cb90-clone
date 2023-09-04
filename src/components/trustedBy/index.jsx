import { Box, Heading, Stack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'

export default function TrustedBy() {
    return (
        <Box w='full' py='100px'>
            <ContainLayout>
                <Stack direction={['column', 'row']} justify='space-between' w='full'>
                    <Heading textAlign='center'>We are trusted by</Heading>
                    <h2>Images</h2>
                </Stack>
            </ContainLayout>
        </Box>
    )
}

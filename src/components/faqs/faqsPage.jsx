import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'
import FaqsSingle from './faqsSingle'

export default function FaqsPage() {
    return (
        <Box my='60px' w='full'>
            <ContainLayout>
                <VStack w='full' gap='40px'>
                    <Heading>FAQs</Heading>
                    <Stack direction={['column', 'row']}>
                        <FaqsSingle />
                        <FaqsSingle />
                    </Stack>
                    <Stack direction={['column', 'row']}>
                        <FaqsSingle />
                        <FaqsSingle />
                    </Stack>
                </VStack>
            </ContainLayout>
        </Box>
    )
}

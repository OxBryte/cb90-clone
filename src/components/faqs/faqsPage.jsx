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
                        <VStack w='full' align='left' gap='30px'>
                            <Heading fontSize={28}>Security Verification- SMS/Email/Google </Heading>
                            <FaqsSingle />
                        </VStack>
                        <VStack w='full' align='left' gap='30px'>
                            <Heading fontSize={28}>Account Functions </Heading>
                            <FaqsSingle />
                        </VStack>
                    </Stack>
                    <Stack direction={['column', 'row']}>
                        <VStack w='full' align='left' gap='30px'>
                            <Heading fontSize={28}>Deposits & withdrawals</Heading>
                            <FaqsSingle />
                        </VStack>
                        <VStack w='full' align='left' gap='30px'>
                            <Heading fontSize={28}>Bot Enquiries</Heading>
                            <FaqsSingle />
                        </VStack>
                    </Stack>
                </VStack>
            </ContainLayout>
        </Box>
    )
}

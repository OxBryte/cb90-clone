import { Box, Heading, VStack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'
import TestimonialCard from './carousel'

export default function Testimonial() {
    return (
        <Box w='full' py='130px' bg='brand.500'>
            <ContainLayout>
                <VStack gap='50px' w='full' color='white'>
                    <Heading textAlign='center' fontSize={['20px', '30px']}>User Triumphs: CB90-Pro Testimonials</Heading>
                    <Box px='20px' w='full'>
                    <TestimonialCard />
                    </Box>
                </VStack>
            </ContainLayout>
        </Box>
    )
}

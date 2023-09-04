import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ContainLayout from '../page-layout/container'

export default function Accomplishment() {
    return (
        <Box w='full' bg='brand.300' py='100px'>
            <ContainLayout>
                <VStack gap='40px'>
                    <Heading>Our Bot&apos;s Accomplishment</Heading>
                    <SimpleGrid columns={[1, 2, 4]} justify='space-between' align='center' gap='10px' w='full'>
                        <VStack maxW='274px' p='12px' rounded='16px' border='1px'>
                            <Text fontSize={28} fontWeight='700'>10.5%</Text>
                            <Text fontSize={14}>Average monthly ROI</Text>
                        </VStack>
                        <VStack maxW='274px' p='12px' rounded='16px' border='1px'>
                            <Text fontSize={28} fontWeight='700'>85%</Text>
                            <Text fontSize={14}>Win Rate</Text>
                        </VStack>
                        <VStack maxW='274px' p='12px' rounded='16px' border='1px'>
                            <Text fontSize={28} fontWeight='700'>18%</Text>
                            <Text fontSize={14}>Maximum Drawdown Reduction:</Text>
                        </VStack>
                        <VStack maxW='274px' p='12px' rounded='16px' border='1px'>
                            <Text fontSize={28} fontWeight='700'>3%</Text>
                            <Text fontSize={14}>Diversification</Text>
                        </VStack>
                    </SimpleGrid>
                </VStack>
            </ContainLayout>
        </Box>
    )
}

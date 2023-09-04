import { Box, Button, HStack, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import ContainLayout from '../page-layout/container'

export default function BotTrading() {
    return (
        <Box w='full' py='60px'>
            <ContainLayout>
                <VStack w='full' gap='60px'>
                    <Box>
                        <Heading>Empower Your Portfolio with Our Diverse Bot Trio</Heading>
                    </Box>
                    <Tabs variant='unstyled' w='full' align='center'>
                        <TabList>
                            <Tab _selected={{ color: 'white', bgGradient: 'linear(to-b, brand.200, brand.400)' }}>Day Trading Bot</Tab>
                            <Tab _selected={{ color: 'white', bgGradient: 'linear(to-b, brand.200, brand.400)' }}>Swing Trading Bot</Tab>
                            <Tab _selected={{ color: 'white', bgGradient: 'linear(to-b, brand.200, brand.400)' }}>Long-Term Hold Bot</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Stack direction={['column', 'row']} gap='30px' w='full' align='center' justify='space-between' p='50px'>
                                    <VStack align='left' textAlign='left' gap='40px'>
                                        <VStack align='left' gap='20px'>
                                            <Heading>Day Trading Bot</Heading>
                                            <Text maxW='420px'>The Day Trading Bot excels in quick and frequent trades, leveraging real-time analysis for short-term gains. With dynamic risk management and minute-by-minute insights, it&apos;s ideal for those seeking rapid trading strategies to capitalize on daily market movements.</Text>
                                        </VStack>
                                        <HStack gap='30px'>
                                            <VStack gap='16px' align='left'>
                                                <Text>Average Daily ROI</Text>
                                                <Text>Trade Frequency</Text>
                                                <Text>Win/Loss Ratio</Text>
                                                <Text>Average Holding Time</Text>
                                            </VStack>
                                            <VStack gap='16px' fontWeight={700} color='brand.700' align='left'>
                                                <Text>1.8%</Text>
                                                <Text>35 trades/day</Text>
                                                <Text>80%</Text>
                                                <Text>35 trades/day</Text>
                                            </VStack>
                                        </HStack>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Get Started</Button>
                                    </VStack>
                                    <Box>
                                        <Image src='./dayTrading.png' alt='' maxW='420px' />
                                    </Box>
                                </Stack>
                            </TabPanel>

                            <TabPanel>
                                <Stack direction={['column', 'row']} gap='30px' w='full' align='center' justify='space-between' p='50px'>
                                    <VStack align='left' textAlign='left' gap='40px'>
                                        <VStack align='left' gap='20px'>
                                            <Heading>Swing Trading Bot</Heading>
                                            <Text maxW='420px'>The Swing Trading Bot utilizes medium-term market trends, aiming to hold positions for days to weeks. Through technical analysis and strategic entry points, it offers a balanced approach to capitalize on broader price movements.</Text>
                                        </VStack>
                                        <HStack gap='30px'>
                                            <VStack gap='16px' align='left'>
                                                <Text>Average Daily ROI</Text>
                                                <Text>Trade Frequency</Text>
                                                <Text>Win/Loss Ratio</Text>
                                                <Text>Average Holding Time</Text>
                                            </VStack>
                                            <VStack gap='16px' fontWeight={700} color='brand.700' align='left'>
                                                <Text>1.8%</Text>
                                                <Text>35 trades/day</Text>
                                                <Text>80%</Text>
                                                <Text>35 trades/day</Text>
                                            </VStack>
                                        </HStack>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Get Started</Button>
                                    </VStack>
                                    <Box>
                                        <Image src='./swingTrading.png' alt='' maxW='460px' />
                                    </Box>
                                </Stack>
                            </TabPanel>

                            <TabPanel>
                                <Stack direction={['column', 'row']} gap='30px' w='full' align='center' justify='space-between' p='50px'>
                                    <VStack align='left' textAlign='left' gap='40px'>
                                        <VStack align='left' gap='20px'>
                                            <Heading>Long-Term Hold Bot</Heading>
                                            <Text maxW='420px'>The Long-Term Hold Bot embodies a patient investment approach, aligning with broad market trends. It utilizes fundamental analysis and offers stress-free management for users seeking sustained growth over extended periods.</Text>
                                        </VStack>
                                        <HStack gap='30px'>
                                            <VStack gap='16px' align='left'>
                                                <Text>Average Daily ROI</Text>
                                                <Text>Trade Frequency</Text>
                                                <Text>Win/Loss Ratio</Text>
                                                <Text>Average Holding Time</Text>
                                            </VStack>
                                            <VStack gap='16px' fontWeight={700} color='brand.700' align='left'>
                                                <Text>1.8%</Text>
                                                <Text>35 trades/day</Text>
                                                <Text>80%</Text>
                                                <Text>35 trades/day</Text>
                                            </VStack>
                                        </HStack>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Get Started</Button>
                                    </VStack>
                                    <Box>
                                        <Image src='./longTrading.png' alt='' maxW='453px' />
                                    </Box>
                                </Stack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </ContainLayout>

        </Box>
    )
}

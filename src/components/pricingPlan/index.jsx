import { Box, Button, Flex, HStack, Heading, Image, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList, VStack } from "@chakra-ui/react";
import ContainLayout from '../page-layout/container'

export default function PricingPlan() {
    return (
        <Box w='full' py='60px' bg='brand.300'>
            <ContainLayout>
                <VStack w='full' gap='60px'>
                    <Box>
                        <Heading>Explore Our Pricing Plans</Heading>
                    </Box>
                    <Tabs variant='unstyled' w='full' align='center'>
                        <TabList bg='white' p='8px' rounded='8px' w='fit-content'>
                            <Tab _selected={{ fontWeight: '700', color: 'white', bgGradient: 'linear(to-b, brand.200, brand.400)' }}>Monthly</Tab>
                            <Tab _selected={{ fontWeight: '700', color: 'white', bgGradient: 'linear(to-b, brand.200, brand.400)' }}>Annually</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Stack direction={['column', 'row']} gap='20px' w='full' align='center' justify='space-between' py='30px'>
                                    <VStack gap='24px' bg='white' rounded='16px' p='40px' maxW='356px' h='646px'>
                                        <Heading>Lite +</Heading>
                                        <Text color='brand.600'>Hassle-free automated trading, with trade bots from the Cloud</Text>
                                        <Flex align='baseline'>
                                            <Heading fontSize='48px'>$9</Heading>
                                            <Text color='brand.600'>/month</Text>
                                        </Flex>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='full'>Get Started</Button>
                                        <UnorderedList w='full' spacing='12px' align='left'>
                                            <Text fontWeight='700'>Key benefits of Lite+:</Text>
                                            <ListItem>3 trade bots</ListItem>
                                            <ListItem>15 open orders per bot</ListItem>
                                            <ListItem>1 month backtesting</ListItem>
                                            <ListItem>3 customizable dashboards</ListItem>
                                            <ListItem>10 second tick interval</ListItem>
                                            <ListItem>All exchange integrations</ListItem>
                                        </UnorderedList>
                                    </VStack>
                                    
                                    <VStack gap='24px' bg='white' rounded='16px' p='40px' maxW='356px' h='646px'>
                                        <Heading>Standard</Heading>
                                        <Text color='brand.600'>Take your trading to another level with advanced features</Text>
                                        <Flex align='baseline'>
                                            <Heading fontSize='48px'>$49</Heading>
                                            <Text color='brand.600'>/month</Text>
                                        </Flex>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='full'>Get Started</Button>
                                        <UnorderedList w='full' spacing='12px' align='left'>
                                            <Text fontWeight='700'>All features of Lite+, and:</Text>
                                            <ListItem>10 trade bots</ListItem>
                                            <ListItem>25 open orders per bot</ListItem>
                                            <ListItem>6 month backtesting</ListItem>
                                            <ListItem>10 customizable dashboards</ListItem>
                                            <ListItem>Market Intelligence</ListItem>
                                            <ListItem>Export settings & data</ListItem>
                                            <ListItem>Manual trading</ListItem>
                                        </UnorderedList>
                                    </VStack>
                                    
                                    <VStack gap='24px' bg='white' rounded='16px' p='40px' maxW='356px' h='646px'>
                                        <Heading>Pro</Heading>
                                        <Text color='brand.600'>Expert precision and features to
                                            capitalize on all possible opportunities</Text>
                                        <Flex align='baseline'>
                                            <Heading fontSize='48px'>$99</Heading>
                                            <Text color='brand.600'>/month</Text>
                                        </Flex>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='full'>Get Started</Button>
                                        <UnorderedList w='full' spacing='12px' align='left'>
                                            <Text fontWeight='700'>Comprehensive solution, with:</Text>
                                            <ListItem>25 trade bots</ListItem>
                                            <ListItem>50 open orders per bot</ListItem>
                                            <ListItem>12 month backtesting</ListItem>
                                            <ListItem>25 customizable dashboards</ListItem>
                                            <ListItem>Signal manager</ListItem>
                                        </UnorderedList>
                                    </VStack>
                                </Stack>
                            </TabPanel>

                            <TabPanel>
                                <Stack direction={['column', 'row']} gap='20px' w='full' align='center' justify='space-between' py='30px'>
                                    <VStack gap='24px' bg='white' rounded='16px' p='40px' maxW='356px' h='646px'>
                                        <Heading>Lite +</Heading>
                                        <Text color='brand.600'>Hassle-free automated trading, with trade bots from the Cloud</Text>
                                        <Flex align='baseline'>
                                            <Heading fontSize='48px'>$9</Heading>
                                            <Text color='brand.600'>/month</Text>
                                        </Flex>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='full'>Get Started</Button>
                                        <UnorderedList w='full' spacing='12px' align='left'>
                                            <Text fontWeight='700'>Key benefits of Lite+:</Text>
                                            <ListItem>3 trade bots</ListItem>
                                            <ListItem>15 open orders per bot</ListItem>
                                            <ListItem>1 month backtesting</ListItem>
                                            <ListItem>3 customizable dashboards</ListItem>
                                            <ListItem>10 second tick interval</ListItem>
                                            <ListItem>All exchange integrations</ListItem>
                                        </UnorderedList>
                                    </VStack>

                                    <VStack gap='24px' bg='white' rounded='16px' p='40px' maxW='356px' h='646px'>
                                        <Heading>Standard</Heading>
                                        <Text color='brand.600'>Take your trading to another level with advanced features</Text>
                                        <Flex align='baseline'>
                                            <Heading fontSize='48px'>$49</Heading>
                                            <Text color='brand.600'>/month</Text>
                                        </Flex>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='full'>Get Started</Button>
                                        <UnorderedList w='full' spacing='12px' align='left'>
                                            <Text fontWeight='700'>All features of Lite+, and:</Text>
                                            <ListItem>10 trade bots</ListItem>
                                            <ListItem>25 open orders per bot</ListItem>
                                            <ListItem>6 month backtesting</ListItem>
                                            <ListItem>10 customizable dashboards</ListItem>
                                            <ListItem>Market Intelligence</ListItem>
                                            <ListItem>Export settings & data</ListItem>
                                            <ListItem>Manual trading</ListItem>
                                        </UnorderedList>
                                    </VStack>

                                    <VStack gap='24px' bg='white' rounded='16px' p='40px' maxW='356px' h='646px'>
                                        <Heading>Pro</Heading>
                                        <Text color='brand.600'>Expert precision and features to
                                            capitalize on all possible opportunities</Text>
                                        <Flex align='baseline'>
                                            <Heading fontSize='48px'>$99</Heading>
                                            <Text color='brand.600'>/month</Text>
                                        </Flex>
                                        <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='full'>Get Started</Button>
                                        <UnorderedList w='full' spacing='12px' align='left'>
                                            <Text fontWeight='700'>Comprehensive solution, with:</Text>
                                            <ListItem>25 trade bots</ListItem>
                                            <ListItem>50 open orders per bot</ListItem>
                                            <ListItem>12 month backtesting</ListItem>
                                            <ListItem>25 customizable dashboards</ListItem>
                                            <ListItem>Signal manager</ListItem>
                                        </UnorderedList>
                                    </VStack>
                                </Stack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </ContainLayout>

        </Box>
    )
}

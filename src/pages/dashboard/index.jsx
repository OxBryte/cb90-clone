import { Box, Flex, HStack, Heading, Popover, PopoverContent, PopoverTrigger, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import DashboardLayout from '../../components/page-layout/dashboardLayout'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Dashboard() {
    return (
        <DashboardLayout sidebar={true} dashboardNav={true}>
            <VStack w='full' gap='34px'>
                <SimpleGrid w='full' columns={[1, 1, 3, 3]} justify='space-between' alignItems='center' gap='50px'>
                    <VStack h='240px' align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                        <Box>
                            <PiCurrencyCircleDollar size={30} />
                        </Box>
                        <VStack align='left' gap='16px'>
                            <Heading>$4,243.00</Heading>
                            <Text>Profit/Loss</Text>
                        </VStack>
                    </VStack>
                    <VStack h='240px' align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                        <Box>
                            <PiCurrencyCircleDollar size={30} />
                        </Box>
                        <VStack align='left' gap='16px'>
                            <Heading>$4,243.00</Heading>
                            <Text>Profit/Loss</Text>
                        </VStack>
                    </VStack>
                    <VStack h='240px' align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                        <Box>
                            <PiCurrencyCircleDollar size={30} />
                        </Box>
                        <VStack align='left' gap='16px'>
                            <Heading>$4,243.00</Heading>
                            <Text>Profit/Loss</Text>
                        </VStack>
                    </VStack>
                </SimpleGrid>
                <SimpleGrid w='full' bg='white' p='30px' columns={[1, 2, 4, 4]} justify='space-between' rounded='12px' alignItems='center' gap='50px'>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w='180px' bg='brand.300' p='20px' rounded='8px'>
                            <Text>Login Times</Text>
                        </Flex>
                        <Text fontWeight={700}>000001</Text>
                    </VStack>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w='180px' bg='brand.300' p='20px' rounded='8px'>
                            <Text>Balance</Text>
                        </Flex>
                        <Text fontWeight={700}>$10,000</Text>
                    </VStack>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w='180px' bg='brand.300' p='20px' rounded='8px'>
                            <Text>Funded Plan</Text>
                        </Flex>
                        <Text fontWeight={700}>Starter</Text>
                    </VStack>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w='180px' bg='brand.300' p='20px' rounded='8px'>
                            <Text>Last Login</Text>
                        </Flex>
                        <Text fontWeight={700}>20th Aug, 2023</Text>
                    </VStack>
                </SimpleGrid>
                <VStack w='full' h='500px' bg='white' p='40px' justify='space-between' rounded='12px' align='left' gap='20px'>
                    <VStack align='left' w='full' gap='20px'>
                        <HStack w='full' justify='space-between' align='center'>
                            <Heading>Bot Trading Curve</Heading>
                            <Box>
                                <Popover trigger="hover" placement='bottom-end'>
                                    <PopoverTrigger>
                                        <Flex cursor='pointer' align='center' justify='space-between' w='130px' p='15px' bg='brand.300' rounded='12px' gap='12px'>
                                            This year
                                            <MdKeyboardArrowDown size={25} />
                                        </Flex>
                                    </PopoverTrigger>
                                    <PopoverContent w='130px' border='none' boxShadow='md'>
                                        <VStack bg='white' rounded='12px' w='full' gap='0'>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                                                This month
                                            </Flex>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                                                This week
                                            </Flex>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                                                Today
                                            </Flex>
                                        </VStack>
                                    </PopoverContent>
                                </Popover>
                            </Box>
                        </HStack>
                        <HStack w='full' justify='space-between' align='center'>
                            <Box>
                                <Popover trigger="hover" placement='bottom-end'>
                                    <PopoverTrigger>
                                        <Flex cursor='pointer' align='center' justify='space-between' w='210px' p='15px' bg='brand.300' rounded='12px' gap='12px'>
                                            Day Trading Bot
                                            <MdKeyboardArrowDown size={25} />
                                        </Flex>
                                    </PopoverTrigger>
                                    <PopoverContent w='210px' border='none' boxShadow='md'>
                                        <VStack bg='white' rounded='12px' w='full' gap='0'>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                                                Swing Trading Bot
                                            </Flex>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                                                Long-Term Trading Bot
                                            </Flex>
                                        </VStack>
                                    </PopoverContent>
                                </Popover>
                            </Box>
                            <Flex gap='20px'>
                                <Flex align='center' gap='10px'>
                                    <Box w='24px' h='24px' bg='green' rounded='full' />
                                    <Text>Profit</Text>
                                </Flex>
                                <Flex align='center' gap='10px'>
                                    <Box w='24px' h='24px' bg='red' rounded='full' />
                                    <Text>loss</Text>
                                </Flex>
                            </Flex>
                        </HStack>
                    </VStack>
                </VStack>
            </VStack>
        </DashboardLayout>
    )
}

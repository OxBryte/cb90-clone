import { Box, Flex, HStack, Heading, Popover, PopoverContent, PopoverTrigger, SimpleGrid, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import LineChartComponent from './line';


export default function Overview() {

    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <>
            <VStack w='full' gap='34px'>
                <SimpleGrid w='full' columns={[1, 1, 3, 3]} justify='space-between' alignItems='center' gap='30px'>
                    <VStack h={['auto','180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                        <Box>
                            <PiCurrencyCircleDollar size={30} />
                        </Box>
                        <VStack align='left' gap='16px'>
                            <Heading fontSize={isDesktop ? '34px' : '24px'}>$4,243.00</Heading>
                            <Text>Profit/Loss</Text>
                        </VStack>
                    </VStack>
                    <VStack h={['auto','180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                        <Box>
                            <PiCurrencyCircleDollar size={30} />
                        </Box>
                        <VStack align='left' gap='16px'>
                            <Heading fontSize={isDesktop ? '34px' : '24px'}>$4,000.00</Heading>
                            <Text>Withdrawn</Text>
                        </VStack>
                    </VStack>
                    <VStack h={['auto','180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                        <Box>
                            <PiCurrencyCircleDollar size={30} />
                        </Box>
                        <VStack align='left' gap='16px'>
                            <Heading fontSize={isDesktop ? '34px' : '24px'}>10</Heading>
                            <Text>Bot Trading Days</Text>
                        </VStack>
                    </VStack>
                </SimpleGrid>
                <SimpleGrid w='full' bg='white' p='30px' columns={[2, 2, 2, 4]} justify='space-between' rounded='12px' alignItems='center' gap={['20px','50px']}>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w={['auto','180px']} bg='brand.300' p='20px' rounded='8px'>
                            <Text>Login Times</Text>
                        </Flex>
                        <Text fontWeight={700}>000001</Text>
                    </VStack>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w={['auto','180px']} bg='brand.300' p='20px' rounded='8px'>
                            <Text>Balance</Text>
                        </Flex>
                        <Text fontWeight={700}>$10,000</Text>
                    </VStack>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w={['auto','180px']} bg='brand.300' p='20px' rounded='8px'>
                            <Text>Funded Plan</Text>
                        </Flex>
                        <Text fontWeight={700}>Starter</Text>
                    </VStack>
                    <VStack align='center' gap='20px' >
                        <Flex justify='center' fontWeight={600} w={['auto','180px']} bg='brand.300' p='20px' rounded='8px'>
                            <Text>Last Login</Text>
                        </Flex>
                        <Text fontWeight={700}>20th Aug, 2023</Text>
                    </VStack>
                </SimpleGrid>
                <VStack w='full' bg='white' p='30px' justify='space-between' rounded='12px' align='left' gap='20px'>
                    <VStack align='left' w='full' gap='20px'>
                        <HStack w='full' justify='space-between' align='center'>
                            <Heading fontSize={['16px', '24px', '24px', '34px' ]}>Bot Trading Curve</Heading>
                            <Box fontSize={14}>
                                <Popover trigger="hover" placement='bottom-end'>
                                    <PopoverTrigger>
                                        <Flex cursor='pointer' align='center' justify='space-between' w='130px' p='10px' bg='brand.900' rounded='12px' gap='12px'>
                                            This year
                                            <MdKeyboardArrowDown size={25} />
                                        </Flex>
                                    </PopoverTrigger>
                                    <PopoverContent w='130px' border='none' boxShadow='md'>
                                        <VStack bg='white' rounded='12px' w='full' gap='0'>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                                This month
                                            </Flex>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                                This week
                                            </Flex>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                                Today
                                            </Flex>
                                        </VStack>
                                    </PopoverContent>
                                </Popover>
                            </Box>
                        </HStack>
                        <HStack w='full' justify='space-between' align='center'>
                            <Box fontSize={14}>
                                <Popover trigger="hover" placement='bottom-start'>
                                    <PopoverTrigger>
                                        <Flex cursor='pointer' align='center' justify='space-between' w='160px' p='12px' bg='brand.900' rounded='12px' gap='12px'>
                                            Day Trading Bot
                                            <MdKeyboardArrowDown size={25} />
                                        </Flex>
                                    </PopoverTrigger>
                                    <PopoverContent w='180px' border='none' boxShadow='md'>
                                        <VStack bg='white' rounded='12px' w='full' gap='0'>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                                Swing Trading Bot
                                            </Flex>
                                            <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                                Long-Term Trading Bot
                                            </Flex>
                                        </VStack>
                                    </PopoverContent>
                                </Popover>
                            </Box>
                            <Flex gap='16px'>
                                <Flex align='center' gap='6px'>
                                    <Box w='18px' h='18px' bg='green' rounded='full' />
                                    <Text>Profit</Text>
                                </Flex>
                                <Flex align='center' gap='6px'>
                                    <Box w='18px' h='18px' bg='red' rounded='full' />
                                    <Text>loss</Text>
                                </Flex>
                            </Flex>
                        </HStack>
                    </VStack>
                    <VStack minH='200px' align={'left'}>
                        <LineChartComponent />
                    </VStack>
                </VStack>
            </VStack>
        </>
    )
}

import { Box, Flex, HStack, Image, Popover, PopoverContent, PopoverTrigger, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import LineChartComponent from '../../pages/dashboard/line'

export default function TradingbotCard({ botTitle, item }) {

    const isDesktop = useBreakpointValue({ base: false, lg: true })


    return (
        <>
            <VStack w='full' gap='30px' bg='white' rounded='12px'>
                <HStack align='end' justify='space-between' w='full'>
                    <Box w='220px' color='white' roundedBottomRight='20px' px='30px' py='20px' bg='brand.500'>
                        <Text>{botTitle}</Text>
                    </Box>
                    <Box mr='30px'>
                        <Popover trigger="hover" placement='bottom-end'>
                            <PopoverTrigger>
                                <Flex cursor='pointer' align='center' h='fit-content' justify='space-between' w='130px' p='12px' bg='brand.900' rounded='12px' gap='8px'>
                                    This week
                                    <MdKeyboardArrowDown size={25} />
                                </Flex>
                            </PopoverTrigger>
                            <PopoverContent w='130px' border='none' boxShadow='md'>
                                <VStack bg='white' rounded='12px' w='full' gap='0'>
                                    <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                        This month
                                    </Flex>
                                    <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                        Today
                                    </Flex>
                                </VStack>
                            </PopoverContent>
                        </Popover>
                    </Box>
                </HStack>
                <Stack direction={['column', 'row']} justify='space-between' gap='20px' w='full' p='30px' align='center'>
                    {isDesktop ? (
                        <>
                            <VStack align='left' gap='20px' w='full'>
                                <HStack align='center' gap='20px' bg='white' boxShadow='base' rounded='12px' p='10px' w='240px'>
                                    <Image src='./closed.svg' alt='' />
                                    <VStack align='left'>
                                        <Text>Closed Trades</Text>
                                        <Text fontWeight={700}>{item.closed_trades}</Text>
                                    </VStack>
                                </HStack>
                                <HStack align='center' gap='20px' bg='white' boxShadow='base' rounded='12px' p='10px' w='240px'>
                                    <Image src='./open.svg' alt='' />
                                    <VStack align='left'>
                                        <Text>Open Trades</Text>
                                        <Text fontWeight={700}>{item.open_trades}</Text>
                                    </VStack>
                                </HStack>
                            </VStack>

                            <VStack align='left' gap='20px'>
                                <LineChartComponent />
                            </VStack>
                        </>
                    ) : (
                        <>
                            <VStack w='full'>
                                <Stack direction={['column', 'row']} w='full' justify='space-between'>
                                    <VStack align='left' gap='20px' w='full'>
                                        <HStack align='center' gap='20px' bg='white' boxShadow='base' rounded='12px' p='10px' w='full'>
                                            <Image src='./closed.svg' alt='' />
                                            <VStack align='left'>
                                                <Text>Closed Trades</Text>
                                                <Text fontWeight={700}>{item.closed_trades}</Text>
                                            </VStack>
                                        </HStack>
                                        <HStack align='center' gap='20px' bg='white' boxShadow='base' rounded='12px' p='10px' w='full'>
                                            <Image src='./open.svg' alt='' />
                                            <VStack align='left'>
                                                <Text>Open Trades</Text>
                                                <Text fontWeight={700}>{item.open_trades}</Text>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                </Stack>
                                <VStack align='left' gap='20px'>
                                    <LineChartComponent />
                                </VStack>
                            </VStack>
                        </>

                    )}
                </Stack>
            </VStack>
        </>
    )
}

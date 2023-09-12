import { Box, Flex, HStack, Image, Popover, PopoverContent, PopoverTrigger, Stack, Text, VStack } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function TradingbotCard({ botTitle }) {
    return (
        <VStack w='full' gap='30px' bg='white' rounded='12px'>
            <HStack align='end' justify='space-between' w='full'>
                <Box w='220px' color='white' roundedBottomRight='20px' px='30px' py='20px' bg='brand.500'>
                    <Text>{botTitle}</Text>
                </Box>
                <Box mr='30px'>
                    <Popover trigger="hover" placement='bottom-end'>
                        <PopoverTrigger>
                            <Flex cursor='pointer' align='center' h='fit-content' justify='space-between' w='130px' p='12px' bg='brand.900' rounded='12px' gap='12px'>
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
            <Stack direction={['column', 'row']} justify='space-between' w='full' p='30px' align='center'>
                <VStack align='left' gap='20px'>
                    <HStack align='center' gap='20px'>
                        <Image src='./closed.svg' alt='' />
                        <VStack align='left'>
                            <Text>Closed Trades</Text>
                            <Text fontWeight={700}>5</Text>
                        </VStack>
                    </HStack>
                    <HStack align='center' gap='20px'>
                        <Image src='./open.svg' alt='' />
                        <VStack align='left'>
                            <Text>Open Trades</Text>
                            <Text fontWeight={700}>2</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <VStack align='left' gap='20px'>
                    <HStack align='center' gap='20px'>
                        <Image src='./chartup.svg' alt='' />
                        <VStack align='left'>
                            <Text>Profits</Text>
                            <Text fontWeight={700}>$10,234.00</Text>
                        </VStack>
                    </HStack>
                    <HStack align='center' gap='20px'>
                        <Image src='./chartdown.svg' alt='' />
                        <VStack align='left'>
                            <Text>Loss</Text>
                            <Text fontWeight={700}>$2,566.01</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <VStack align='left' gap='20px'>
                    <h1>chart here</h1>
                </VStack>
            </Stack>
        </VStack>
    )
}

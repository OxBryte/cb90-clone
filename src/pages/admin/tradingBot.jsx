import { Box, Button, Flex, HStack,  Popover, PopoverContent, PopoverTrigger, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import { MdFilterList } from 'react-icons/md'

export default function TradingBot() {
    return (
        <>
        <VStack w='full' align='left' gap='38px'>
            <VStack w='full' gap='30px' bg='white' rounded='12px'>
                <HStack align='end' justify='space-between' w='full'>
                    <Box w='220px' color='white' roundedBottomRight='20px' px='30px' py='20px' bg='brand.500'>
                        <Text>CB90-PRO</Text>
                    </Box>
                    <Box mr='30px'>
                        <Button w='fit-content' size='md' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Set up new</Button>
                    </Box>
                </HStack>
                <TableContainer w='full'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Token</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Profit Margin</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Price Range:</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Take Profit</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Trading Volume</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Action</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>AVAX/USDT</Td>
                                <Td>3%</Td>
                                <Td>$100 - $200</Td>
                                <Td>1%</Td>
                                <Td>2%</Td>
                                <Td>
                                    <Flex align='center' gap='8px'>
                                        <Button w='fit-content' variant='outline' size='sm' _hover={{ bg: 'brand.200', color: 'white' }}>Pause</Button>
                                        <Button w='fit-content' size='sm' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Configure</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>AVAX/USDT</Td>
                                <Td>3%</Td>
                                <Td>$100 - $200</Td>
                                <Td>1%</Td>
                                <Td>2%</Td>
                                <Td>
                                    <Flex align='center' gap='8px'>
                                        <Button w='fit-content' variant='outline' size='sm' _hover={{ bg: 'brand.200', color: 'white' }}>Pause</Button>
                                        <Button w='fit-content' size='sm' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Configure</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
            <VStack w='full' gap='30px' bg='white' rounded='12px'>
                <HStack align='end' justify='space-between' w='full'>
                    <Box w='220px' color='white' roundedBottomRight='20px' px='30px' py='20px' bg='brand.500'>
                        <Text>Futures Contracts</Text>
                    </Box>
                    <Box mr='30px'>
                        <Button w='fit-content' size='md' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Set up new</Button>
                    </Box>
                </HStack>
                <TableContainer w='full'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Token</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Profit Margin</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Price Range:</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Take Profit</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Trading Volume</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Action</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>AVAX/USDT</Td>
                                <Td>3%</Td>
                                <Td>$100 - $200</Td>
                                <Td>1%</Td>
                                <Td>2%</Td>
                                <Td>
                                    <Flex align='center' gap='8px'>
                                        <Button w='fit-content' variant='outline' size='sm' _hover={{ bg: 'brand.200', color: 'white' }}>Pause</Button>
                                        <Button w='fit-content' size='sm' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Configure</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>AVAX/USDT</Td>
                                <Td>3%</Td>
                                <Td>$100 - $200</Td>
                                <Td>1%</Td>
                                <Td>2%</Td>
                                <Td>
                                    <Flex align='center' gap='8px'>
                                        <Button w='fit-content' variant='outline' size='sm' _hover={{ bg: 'brand.200', color: 'white' }}>Pause</Button>
                                        <Button w='fit-content' size='sm' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Configure</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
            <VStack w='full' gap='30px' bg='white' rounded='12px'>
                <HStack align='end' justify='space-between' w='full'>
                    <Box w='220px' color='white' roundedBottomRight='20px' px='30px' py='20px' bg='brand.500'>
                        <Text>Long Term Holdings</Text>
                    </Box>
                    <Box mr='30px'>
                        <Button w='fit-content' size='md' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Set up new</Button>
                    </Box>
                </HStack>
                <TableContainer w='full'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Token</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Profit Margin</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Price Range:</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Take Profit</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Trading Volume</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                                <Th>
                                    <Flex align='center' gap='6px'>
                                        <Text>Action</Text>
                                        <MdFilterList size='20' />
                                    </Flex>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>AVAX/USDT</Td>
                                <Td>3%</Td>
                                <Td>$100 - $200</Td>
                                <Td>1%</Td>
                                <Td>2%</Td>
                                <Td>
                                    <Flex align='center' gap='8px'>
                                        <Button w='fit-content' variant='outline' size='sm' _hover={{ bg: 'brand.200', color: 'white' }}>Pause</Button>
                                        <Button w='fit-content' size='sm' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Configure</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>AVAX/USDT</Td>
                                <Td>3%</Td>
                                <Td>$100 - $200</Td>
                                <Td>1%</Td>
                                <Td>2%</Td>
                                <Td>
                                    <Flex align='center' gap='8px'>
                                        <Button w='fit-content' variant='outline' size='sm' _hover={{ bg: 'brand.200', color: 'white' }}>Pause</Button>
                                        <Button w='fit-content' size='sm' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Configure</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        </VStack>
        </>
    )
}

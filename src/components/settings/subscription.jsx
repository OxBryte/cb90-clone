import { Box, Flex, Heading, PopoverArrow, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgSortAz } from 'react-icons/cg'

export default function Subscription() {
    return (
        <VStack align='left' w='full' gap='30px'>
            <Box>
                <Heading>Subscription</Heading>
            </Box>
            <VStack w='full'>
                <TableContainer w='full'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th><Flex align='center' gap='10px'>Name <CgSortAz size={30} /></Flex></Th>
                                <Th><Flex align='center' gap='10px'>Type <CgSortAz size={30} /></Flex></Th>
                                <Th><Flex align='center' gap='10px'>Cost <CgSortAz size={30} /></Flex></Th>
                                <Th><Flex align='center' gap='10px'>Exp. date <CgSortAz size={30} /></Flex></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Lite</Td>
                                <Td>Trial</Td>
                                <Td>$200</Td>
                                <Td>08-08-2023</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        </VStack>
    )
}

import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'

export default function ViewDetails({ selectedUser }) {
    return (
        <>
            <VStack w='full' align='left' gap='24px'>
                <Box w='full'>
                    <Text fontWeight={600} >Personal Details</Text>
                    <VStack w='full' align='left' mt='12px' gap='16px'>
                        <Box px='12px' py='10px' rounded='8px' bg='gray.100'>
                            <Text fontWeight={700}>Name: <Box as='span' fontWeight={400}> {selectedUser.first_name} {selectedUser.last_name}</Box></Text>
                        </Box>
                        <Box px='12px' py='10px' rounded='8px' bg='gray.100'>
                            <Text fontWeight={700}>Email: <Box as='span' fontWeight={400}> {selectedUser.email}</Box></Text>
                        </Box>
                        <Box px='12px' py='10px' rounded='8px' bg='gray.100'>
                            <Text fontWeight={700}>Country: <Box as='span' fontWeight={400}> {selectedUser.country}</Box></Text>
                        </Box>
                    </VStack>
                </Box>
                <Box w='full'>
                    <Text fontWeight={600} >User Activity</Text>
                    <VStack w='full' align='left' mt='12px' gap='16px'>
                        <Box px='12px' py='10px' rounded='8px' bg='gray.100'>
                            <Text fontWeight={700}>Registration date: <Box as='span' fontWeight={400}> {moment(selectedUser.created_at).format('LLL')}</Box></Text>
                        </Box>
                        <Box px='12px' py='10px' rounded='8px' bg='gray.100'>
                            <Text fontWeight={700}>Updated: <Box as='span' fontWeight={400}> {moment(selectedUser.updated_at).format('LLLL')}</Box></Text>
                        </Box>
                    </VStack>
                </Box>
                <Flex w='full' align='center' gap='24px'>
                    <Button w='full' size='lg' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Edit</Button>
                </Flex>
            </VStack>
        </>
    )
}

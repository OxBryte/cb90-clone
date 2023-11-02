import { Badge, Box, Button, Flex, Grid, GridItem, Input, Text, VStack } from '@chakra-ui/react'
import moment from 'moment'
import { useState } from 'react';

export function ViewDetails({ selectedUser, setUserInfo, setEditUser }) {
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
                        <Box px='12px' py='10px' rounded='8px' >
                            <Text fontWeight={700}>Satus: <Box as='span' ml='4px' fontWeight={400}> {selectedUser.activated === true ? <Badge colorScheme='green'>Active</Badge> : <Badge colorScheme='red'>Inactive</Badge>}</Box></Text>
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
                    <Button w='full' size='lg' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} onClick={() => { setUserInfo(false) }}>Edit</Button>
                </Flex>
            </VStack>
        </>
    )
}


export function EditUserDetails({ selectedUser, setEditUser }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    return (
        <>
            <VStack w='full' align='left' gap='24px'>
                <Box w='full'>
                    <Text fontWeight={600} >Personal Details</Text>
                    <Grid templateColumns='repeat(4, 1fr)' gap={3} mt='24px'>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>First Name</Text>
                                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={selectedUser.first_name} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Last Name</Text>
                                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={selectedUser.last_name} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Email Address</Text>
                                <Input disabled value={email} onChange={(e) => setEmail(e.target.value)} placeholder={selectedUser.email} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Location</Text>
                                <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder={selectedUser.country} type='text' />
                            </Flex>
                        </GridItem>
                    </Grid>
                </Box>
                <Flex w='full' align='center' gap='24px'>
                    <Button w='full' size='lg' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Save Changes</Button>
                </Flex>
            </VStack>
        </>
    )
}
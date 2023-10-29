import { Grid, GridItem, Heading, Input, Flex, Text, VStack, Box, Divider, Stack, HStack, Button, useToast } from '@chakra-ui/react'
import { selectToken, selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useState } from 'react';
import axios from 'axios';

export default function Profile() {

    const user = useSelector(selectUser);
    const toast = useToast();

    const ID = user?.user?.id || '';

    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');

    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    const token = useSelector(selectToken);


    const handleSubmit = async () => {
        setLoading(true)
        const payload = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            country: location,
        };


        try {
            const response = await axios.patch(`${VITE_BASE_URL}/user/${ID}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                // body: JSON.stringify(payload)
            });

            setLoading(false)
            if (response.data?.status) {
                const successMessage = response.data?.message;
                toast({
                    title: successMessage,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });

                setFirstName('')
                setLastName('')
                setLocation('')
                setPhoneNumber('')

            } else {
                const errorMessage = response.data?.message || 'Error updating profile';
                toast({
                    title: errorMessage,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }

        } catch (error) {
            console.error('Error updating profile');
            toast({
                title: 'Error updating profile',
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <VStack align='left' w='full'>
            <Box as='form' onSubmit={handleSubmit} >
                <VStack mb='30px' w='full' align='left' gap='30px'>
                    <VStack align='left'>
                        <Heading>My Profile</Heading>
                        <Text fontSize='22px' fontWeight='600'>Personal Information</Text>
                        <Text color='#4e4e4e'>This is your personal information, make sure you fill it correctly.</Text>
                    </VStack>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>First Name</Text>
                                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={user?.user?.first_name} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Last Name</Text>
                                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={user?.user?.last_name} type='text' />
                            </Flex>
                        </GridItem>
                    </Grid>
                </VStack>
                <VStack mb='30px' w='full' align='left' gap='30px'>
                    <VStack align='left'>
                        <Text fontSize='22px' fontWeight='600'>Contact Information</Text>
                        <Text color='#4e4e4e'></Text>
                    </VStack>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Email Address</Text>
                                <Input disabled value={email} onChange={(e) => setEmail(e.target.value)} placeholder={user?.user?.email} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Phone Number</Text>
                                <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={user?.user?.phone_number} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Location</Text>
                                <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder={user?.user?.country} type='text' />
                            </Flex>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Stack direction={['column', 'column', 'row']} justify='space-between' align={['left', 'left', 'center']}>
                        <Text>This account was created on {`${moment(user?.user?.created_at).format('LLLL')}`}</Text>
                        <HStack>
                            <Button variant='solid' border='1px' borderColor='brand.300' px='26px' bg='none' _hover={{ bg: 'brand.200' }} w='fit-content'>Cancel</Button>
                            <Button onClick={handleSubmit} isLoading={loading} isDisabled={!phoneNumber || !firstName || !lastName} variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Save Changes</Button>
                        </HStack>
                    </Stack>
                </VStack>
            </Box>
        </VStack>
    )
}

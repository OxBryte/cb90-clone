import { Grid, GridItem, Heading, Input, Flex, Text, VStack, Box, Divider, Stack, HStack, Button } from '@chakra-ui/react'
import { selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useState } from 'react';

export default function Profile() {

    const user = useSelector(selectUser);

    const ID = user?.user?.id || '';
    console.log(ID);

    const [firstName, setFirstName] = useState(user?.user?.first_name || '');
    const [lastName, setLastName] = useState(user?.user?.last_name || '');
    const [displayName, setDisplayName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState(user?.user?.email || '');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState(user?.user?.country || '');
    const [currency, setCurrency] = useState('US Dollar ($)'); 

    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    
    const token = useSelector(state => state.token);
    
    const handleSubmit = async () => {
        const payload = {
            first_name: firstName,
            last_name: lastName,
            display_name: displayName,
            user_name: userName,
            email,
            phone_number: phoneNumber,
            location,
            currency
        };

        console.log(payload);
        try {
            const response = await fetch(`${VITE_BASE_URL}/user/${ID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

        } catch (error) {
            console.error('Error updating profile:', error);
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
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Display Name</Text>
                                <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder='Enter display name' type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>User Name</Text>
                                <Input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter user name' type='text' />
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
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={user?.user?.email} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Phone Number</Text>
                                <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Enter phone number' type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Location</Text>
                                <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder={user?.user?.country} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Currency</Text>
                                <Input value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder='US Dolllar ($)' type='text' />
                            </Flex>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Stack direction={['column', 'row']} justify='space-between' align='center'>
                        <Text>This account was created on {`${moment(user?.user?.created_at).format('LLLL')}`}</Text>
                        <HStack>
                            <Button variant='solid' border='1px' borderColor='brand.300' px='26px' bg='none' _hover={{ bg: 'brand.200' }} w='fit-content'>Cancel</Button>
                            <Button onClick={handleSubmit} variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Save Changes</Button>
                        </HStack>
                    </Stack>
                </VStack>
            </Box>
        </VStack>
    )
}

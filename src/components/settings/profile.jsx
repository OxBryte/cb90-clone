import { Grid, GridItem, Heading, Input, Flex, Text, VStack, Box, Divider, Stack, HStack, Button } from '@chakra-ui/react'
import { selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';

export default function Profile() {

    const user = useSelector(selectUser);

    return (
        <VStack align='left' w='full'>
            <Box as='form' >
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
                                <Input placeholder={`${user.user.first_name}`} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Last Name</Text>
                                <Input placeholder={`${user.user.last_name}`} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Display Name</Text>
                                <Input placeholder='Enter display name' type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>User Name</Text>
                                <Input placeholder='Enter user name' type='text' />
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
                                <Input placeholder={`${user.user.email}`} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Phone Number</Text>
                                <Input placeholder='Enter phone number' type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Location</Text>
                                <Input placeholder={`${user.user.country}`} type='text' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Currency</Text>
                                <Input placeholder='US Dolllar ($)' type='text' />
                            </Flex>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Stack direction={['column', 'row']} justify='space-between' align='center'>
                        <Text>This account was created on {`${moment(user.user.created_at).format('LLLL')}`}</Text>
                        <HStack>
                            <Button variant='solid' border='1px' borderColor='brand.300' px='26px' bg='none' _hover={{ bg: 'brand.200' }} w='fit-content'>Cancel</Button>
                            <Button variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Save Changes</Button>
                        </HStack>
                    </Stack>
                </VStack>
            </Box>
        </VStack>
    )
}

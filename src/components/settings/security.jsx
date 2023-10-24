import { Grid, GridItem, Heading, Input, Flex, Text, VStack, Divider, Stack, HStack, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/userSlice';

export default function Security() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState('');
    const toast = useToast()

    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    const token = useSelector(selectToken);

    const handleChangePassword = async () => {
        if (newPassword !== reenteredPassword) {
            toast({
                title: 'New password does not match',
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        const payload = {
            old_password: oldPassword,
            new_password: newPassword
        };

        try {
            const response = await axios.post(`${VITE_BASE_URL}/change_password`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                // body: JSON.stringify(payload)
            });

            if (response.data?.status) {
                const successMessage = response.data?.message;
                toast({
                    title: successMessage,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                const errorMessage = response.data?.message ;
                toast({
                    title: errorMessage,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }

            setNewPassword('')
            setOldPassword('')
            setReenteredPassword('')

        } catch (error) {
            console.error('error')
        }
    };

    return (
        <VStack align='left' w='full'>
            <VStack mb='30px' w='full' align='left' gap='30px'>
                <Heading>Security</Heading>
                <VStack mb='30px' w='full' align='left' gap='30px'>
                    <VStack align='left'>
                        <Text fontSize='22px' fontWeight='600'>Passwrod</Text>
                        <Text color='#4e4e4e'>Set a unique password to protect your personal account.</Text>
                    </VStack>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem colSpan={4}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Old Password</Text>
                                <Input value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder='Enter old password' type='password' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>New Password</Text>
                                <Input value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder='Enter new password' type='password' />
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex flexDir='column' gap={2}>
                                <Text>Re-enter Password</Text>
                                <Input value={reenteredPassword} onChange={e => setReenteredPassword(e.target.value)} placeholder='Re-enter new password' type='password' />
                            </Flex>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Stack direction={['column', 'row']} justify='space-between' align='center'>
                        <Text>To ensure your account is well protected, please use 8 or more characters with a mix of letters, numbers & symbols.</Text>
                        <HStack>
                            <Button onClick={handleChangePassword} isDisabled={!oldPassword || !newPassword || !reenteredPassword} variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Save Changes</Button>
                        </HStack>
                    </Stack>
                </VStack>
            </VStack>
        </VStack>
    )
}

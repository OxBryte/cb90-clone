import { Grid, GridItem, Heading, Input, Flex, Text, VStack, Divider, Stack, HStack, Button, Image } from '@chakra-ui/react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Security() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState('');

    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    const token = useSelector(state => state.token);

    const handleChangePassword = async () => {
        if (newPassword !== reenteredPassword) {
            alert("Passwords don't match");
            return;
        }
        const payload = {
            oldPassword,
            newPassword
        };

        try {
            const response = await fetch(`${VITE_BASE_URL}/change_password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const data = await response.json();
                alert(data.message || "Error updating password");
            } else {
                alert("Password updated successfully");
            }

        } catch (error) {
            console.error('Error updating password:', error);
            alert("There was an error updating your password. Please try again.");
        }
    };

    return (
        <VStack align='left' w='full'>
            <VStack mb='30px' w='full' align='left' gap='30px'>
                <Heading>Security</Heading>
                <VStack align='left' gap='20px'>
                    <HStack justify='space-between' align='center'>
                        <HStack align='center' gap='20px'>
                            <Image src='./mail.svg' alt='' />
                            <VStack align='left' gap='0'>
                                <Text fontSize='22px' fontWeight='600'>Email Authentication</Text>
                                <Text color='#4e4e4e'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.</Text>
                            </VStack>
                        </HStack>
                        <Button w='160px' size='lg' variant='solid' border='1px' borderColor='brand.300' px='26px' bg='none' _hover={{ bg: 'brand.200' }}>Disable</Button>
                    </HStack>
                    <HStack justify='space-between' align='center'>
                        <HStack align='center' gap='20px'>
                            <Image src='./sms.svg' alt='' />
                            <VStack align='left' gap='0'>
                                <Text fontSize='22px' fontWeight='600'>SMS Authentication</Text>
                                <Text color='#4e4e4e'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.</Text>
                            </VStack>
                        </HStack>
                        <Button w='160px' size='lg' variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Enable</Button>
                    </HStack>
                    <HStack justify='space-between' align='center'>
                        <HStack align='center' gap='20px'>
                            <Image src='./google.svg' alt='' />
                            <VStack align='left' gap='0'>
                                <Text fontSize='22px' fontWeight='600'>Google Authentication</Text>
                                <Text color='#4e4e4e'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.</Text>
                            </VStack>
                        </HStack>
                        <Button w='160px' size='lg' variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }}>Enable</Button>
                    </HStack>
                </VStack>

            </VStack>
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
                        <Button onClick={handleChangePassword} variant='solid' px='26px' bgGradient='linear(to-b, brand.200, brand.400)' color='white' _hover={{ bg: 'brand.200' }} w='fit-content'>Save Changes</Button>
                    </HStack>
                </Stack>
            </VStack>
        </VStack>
    )
}

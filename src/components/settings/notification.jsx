import { Heading, Text, VStack, HStack, Image, Switch } from '@chakra-ui/react'

export default function Notification() {
    return (
        <VStack align='left' w='full'>
            <VStack mb='30px' w='full' align='left' gap='30px'>
                <HStack align='center' justify='space-between'>
                    <Heading>Notification Preferences</Heading>
                    <HStack fontWeight={500} gap='50px'>
                        <Text>Email</Text>
                    </HStack>
                </HStack>
                <VStack align='left' gap='40px'>
                    <HStack justify='space-between' align='center'>
                        <HStack align='center' gap='20px'>
                            <Image src='./google.svg' alt='' />
                            <VStack align='left' gap='0'>
                                <Text fontSize='22px' fontWeight='600'>Email Notification</Text>
                                <Text color='#4e4e4e'>Receive email notifications for important updates and messages related to your account.</Text>
                            </VStack>
                        </HStack>
                        <HStack gap='30px'>
                            <Switch colorScheme='teal' size='lg' />
                        </HStack>
                    </HStack>
                    <HStack justify='space-between' align='center'>
                        <HStack align='center' gap='20px'>
                            <Image src='./google.svg' alt='' />
                            <VStack align='left' gap='0'>
                                <Text fontSize='22px' fontWeight='600'>Device Login Alerts</Text>
                                <Text color='#4e4e4e'>Get alerts when a new device is used to log in to your account for added security.</Text>
                            </VStack>
                        </HStack>
                        <HStack gap='30px'>
                            <Switch colorScheme='teal' size='lg' />
                        </HStack>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    )
}

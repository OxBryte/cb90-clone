import { Heading, Text, HStack, VStack, Avatar } from "@chakra-ui/react";

export default function TeamCard() {
    return (
        <HStack maxW='460px' align='top' gap='30px' >
            <VStack align='left'>
                <Avatar size='lg' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                <Text>LinkedIn</Text>
            </VStack>
            <VStack align='left'>
                <Heading>Team Name</Heading>
                <Text>Team role</Text>
                <Text>A visionary leader with a deep-rooted passion for technology and finance, [CEO&apos;s Name] is the driving force behind CB90-Pro. With a wealth of experience in both the cryptocurrency and trading sectors, [CEO&apos;s Name] has dedicated their career to simplifying and revolutionizing the way individuals engage with digital assets.</Text>
            </VStack>
        </HStack>
    )
}

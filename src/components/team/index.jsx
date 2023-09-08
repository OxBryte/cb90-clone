import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ContainLayout from "../page-layout/container";
import TeamCard from "./teamCard";

export default function Team() {
    return (
        <Box w='full' py='30px'>
            <ContainLayout>
                <VStack align='center' w='full' gap='50px'>
                    <VStack gap='20px'>
                        <Heading>Meet the CB90-Pro Team</Heading>
                        <Text maxW='860px' textAlign='center' color='brand.600'>At CB90-Pro, our strength lies in the diverse and passionate individuals who make up our team. We are united by a common goal: to revolutionize the world of crypto trading and empower individuals with the tools they need to succeed.</Text>
                    </VStack>
                    <SimpleGrid columns={[1, 2]} justify='space-between' w='full' gap='30px'>
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </SimpleGrid>
                </VStack>
            </ContainLayout>
        </Box>
    )
}

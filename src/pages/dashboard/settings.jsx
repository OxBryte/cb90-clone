import { Box, Divider, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import Profile from '../../components/settings/profile'
import Security from '../../components/settings/security'
import Notification from '../../components/settings/notification'

export default function Settings() {
    return (
        <>
            <VStack w='full' gap='50px'>
                <Box bg='white' w='full' p='30px' rounded='16px'>
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            <Tab>Profile</Tab>
                            <Tab>Security</Tab>
                            <Tab>Subscription</Tab>
                            <Tab>Notification</Tab>
                        </TabList>
                        <Divider my='20px' />
                        <TabPanels>
                            <TabPanel>
                                <Profile />
                            </TabPanel>
                            <TabPanel>
                                <Security />
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                            <TabPanel>
                                <Notification />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </VStack>
        </>
    )
}

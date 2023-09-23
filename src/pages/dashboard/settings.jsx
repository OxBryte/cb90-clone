import { Box, Divider, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import Profile from '../../components/settings/profile'
import Security from '../../components/settings/security'
import Notification from '../../components/settings/notification'
import Subscription from '../../components/settings/subscription'

export default function Settings() {
    return (
        <>
            <VStack w='full' gap='50px'>
                <Box bg='white' w='full' p='30px' rounded='16px'>
                    <Tabs variant='soft-rounded'>
                        <TabList>
                            <Tab _selected={{ bg: '#E6F8F8' }}>Profile</Tab>
                            <Tab _selected={{ bg: '#E6F8F8' }}>Security</Tab>
                            <Tab _selected={{ bg: '#E6F8F8' }}>Subscription</Tab>
                            <Tab _selected={{ bg: '#E6F8F8' }}>Notification</Tab>
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
                                <Subscription />
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

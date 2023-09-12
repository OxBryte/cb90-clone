import { Box, HStack, Image, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import { FiSettings, FiCpu } from 'react-icons/fi'
import { PiNotification, PiTrendUpFill } from 'react-icons/pi'
import { RiExchangeFundsFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { IoHeadsetOutline } from 'react-icons/io5'
import { TbLogout2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SidebarData = [
    {
        title: 'Overview',
        icon: <RxDashboard />,
        link: '/dashboard'
    },
    {
        title: 'Trading Bots',
        icon: <FiCpu />,
        link: '/'
    },
    {
        title: 'Alerts',
        icon: <PiNotification />,
        link: '/'
    },
    {
        title: 'Market trends ',
        icon: <PiTrendUpFill />,
        link: '/'
    },
    {
        title: 'Exchanges',
        icon: <RiExchangeFundsFill />,
        link: '/'
    },
    {
        title: 'Settings',
        icon: <FiSettings />,
        link: '/'
    },
]

const SidebarData2 = [
    {
        title: 'Support',
        icon: <IoHeadsetOutline />,
        link: '/'
    },
    {
        title: 'Logout',
        icon: <TbLogout2 />,
        link: '/'
    },
]

export default function Sidebar() {
    return (
        <VStack maxW='260px' justify='space-between' align='left' bg='brand.500' color='white' fontWeight='600' pl='40px' py='50px' h='100vh'>
            <VStack gap='50px' w='full' align='left'>
                <Box>
                    <Link to='/'>
                        <Image src='./cb90_logo_white.svg' w='120px' alt='CB90-PRO Logo' />
                    </Link>
                </Box>
                <UnorderedList m='0' listStyleType='none' spacing='10px'>
                    {SidebarData.map((item, index) => {
                        return (
                            <ListItem p='12px' roundedTopLeft='6px' roundedBottomLeft='6px' w='full' _hover={{ bg: 'white', color: 'brand.100' }} bg={window.location.pathname === item.link ? 'white' : ''} key={index} color={window.location.pathname === item.link ? 'brand.100' : ''} onClick={() => { window.location.pathname = item.link }}>
                                <HStack>
                                    {item.icon}
                                    <Box>{item.title}</Box>
                                </HStack>
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </VStack>
            <UnorderedList m='0' listStyleType='none' spacing='10px' justifyContent='end'>
                {SidebarData2.map((item, index) => {
                    return (
                        <ListItem p='12px' roundedTopLeft='6px' roundedBottomLeft='6px' w='full' _hover={{ bg: 'white', color: 'brand.100' }} bg={window.location.pathname === item.link ? 'white' : ''} key={index} color={window.location.pathname === item.link ? 'brand.100' : ''} onClick={() => { window.location.pathname = item.link }}>
                            <HStack>
                                {item.icon}
                                <Box>{item.title}</Box>
                            </HStack>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </VStack>
    )
}

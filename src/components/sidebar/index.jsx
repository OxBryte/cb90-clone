import { Box, HStack, Image, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import { FiSettings, FiCpu } from 'react-icons/fi'
import { PiNotification, PiTrendUpFill } from 'react-icons/pi'
import { RiExchangeFundsFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { IoHeadsetOutline } from 'react-icons/io5'
import { TbLogout2 } from 'react-icons/tb'
import { Link, NavLink, useParams } from 'react-router-dom'

const SidebarData = [
    {
        title: 'Overview',
        icon: <RxDashboard />,
        link: '/dashboard',
        id: 'dashboard'
    },
    {
        title: 'Trading Bots',
        icon: <FiCpu />,
        link: '/tradingbot',
        id: 'tradingbot'
    },
    {
        title: 'Alerts',
        icon: <PiNotification />,
        link: '/alert',
        id: 'alerts'
    },
    {
        title: 'Market trends ',
        icon: <PiTrendUpFill />,
        link: '/market-trend',
        id: 'market-trend'
    },
    {
        title: 'Exchanges',
        icon: <RiExchangeFundsFill />,
        link: '/exchange',
        id: 'exchange'
    },
    {
        title: 'Settings',
        icon: <FiSettings />,
        link: '/setting',
        id: 'settings'
    },
]

const SidebarData2 = [
    {
        title: 'Support',
        icon: <IoHeadsetOutline />,
        link: '/support',
        id: 'support'
    },
    {
        title: 'Logout',
        icon: <TbLogout2 />,
        link: '/logout',
        id: 'logout'
    },
]

export default function Sidebar() {

    const { id } = useParams()

    return (
        <VStack justify='space-between' align='left' bg='brand.500' color='white' fontWeight='600' pl='70px' py='50px' h='100vh' position='sticky' top='0'>
            <VStack gap='50px' w='full' align='left'>
                <Box>
                    <Link to='/'>
                        <Image src='./cb90_logo_white.svg' w='120px' alt='CB90-PRO Logo' />
                    </Link>
                </Box>
                <UnorderedList m='0' listStyleType='none' spacing='10px'>
                    {SidebarData.map((item, i) => {
                        return (
                            <NavLink to={item.link} key={i}>
                                <ListItem my='10px' p='12px' roundedTopLeft='6px' roundedBottomLeft='6px' w='full' _hover={{ bg: 'brand.900', color: 'brand.100' }} bg={id === item.id && 'brand.900'} color={id === item.id ? 'brand.100' : ''}>
                                    <HStack>
                                        {item.icon}
                                        <Box>{item.title}</Box>
                                    </HStack>
                                </ListItem>
                            </NavLink>
                        )
                    })}
                </UnorderedList>
            </VStack>
            <UnorderedList m='0' listStyleType='none' spacing='10px' justifyContent='end'>
                {SidebarData2.map((item, i) => {
                    return (
                        <NavLink to={item.link} key={i}>
                            <ListItem p='12px' roundedTopLeft='6px' roundedBottomLeft='6px' w='full' _hover={{ bg: 'brand.900', color: 'brand.100' }} bg={id === item.id && 'brand.900'} color={id === item.id ? 'brand.100' : ''}>
                                <HStack color={item.title === 'Logout' && 'red.400'}>
                                    {item.icon}
                                    <Box>{item.title}</Box>
                                </HStack>
                            </ListItem>
                        </NavLink>
                    )
                })}
            </UnorderedList>
        </VStack>
    )
}

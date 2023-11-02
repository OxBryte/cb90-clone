import { Box, HStack, Image, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import { FiSettings, FiCpu } from 'react-icons/fi'
import { PiDesktop, PiTrendUpFill } from 'react-icons/pi'
import { RiExchangeFundsFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { IoHeadsetOutline } from 'react-icons/io5'
import { TbLogout2 } from 'react-icons/tb'
import { Link, NavLink, useParams } from 'react-router-dom'
import { selectUser } from '../../redux/userSlice'
import { useSelector } from 'react-redux'

export const SidebarData = [
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
    // {
    //     title: 'Alerts',
    //     icon: <PiNotification />,
    //     link: '/alerts',
    //     id: 'alerts'
    // },
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
        link: '/settings',
        id: 'settings'
    },
]

export const SidebarData2 = [
    {
        title: 'Back Office',
        icon: <PiDesktop />,
        link: '/admin/dashboard',
        id: 'back-office'
    },
    {
        title: 'Support',
        icon: <IoHeadsetOutline />,
        link: 'mailto: abc@example.com',
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

    const user = useSelector(selectUser);

    const userRole = user?.user?.role_id


    const { id } = useParams()

    return (
        <VStack justify='space-between' align='right' bg='brand.500' color='white' fontWeight='600' pl='50px' py='50px' h='100vh' position='sticky' top='0'>
            <VStack gap='50px' w='full'>
                <HStack w='full' align='left'>
                    <Link to='/'>
                        <Image src='/cb90_logo_white.svg' w='120px' alt='CB90-PRO Logo' />
                    </Link>
                </HStack>
                <UnorderedList m='0' listStyleType='none' spacing='10px' w='full'>
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
                {SidebarData2.map((item, idx) => {
                    if (item.title === 'Back Office' && userRole === '1') {
                        return null;  // returning null will not render anything
                    }
                    return (
                        <NavLink to={item.link} key={idx}>
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

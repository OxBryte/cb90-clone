import { Box, HStack, Image, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import { FiCpu } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { IoHeadsetOutline, IoNotificationsOutline } from 'react-icons/io5'
import { TbLogout2 } from 'react-icons/tb'
import { Link, NavLink, useParams } from 'react-router-dom'

export const AdminSidebarData = [
    {
        title: 'Overview',
        icon: <RxDashboard />,
        link: '/admin/dashboard',
        id: 'dashboard'
    },
    {
        title: 'Trading Bots',
        icon: <FiCpu />,
        link: '/admin/tradingbot',
        id: 'tradingbot'
    },
    {
        title: 'Alerts',
        icon: <IoNotificationsOutline />,
        link: '/admin/alerts',
        id: 'alerts'
    },
]

export const AdminSidebarData2 = [
    {
        title: 'User panel',
        icon: <IoHeadsetOutline />,
        link: '/admin/user-panel',
        id: 'support'
    },
    {
        title: 'Logout',
        icon: <TbLogout2 />,
        link: '/logout',
        id: 'logout'
    },
]

export default function AdminSidebar() {

    const { id } = useParams()

    return (
        <VStack justify='space-between' align='right' bg='brand.500' color='white' fontWeight='600' pl='50px' py='50px' h='100vh' position='sticky' top='0'>
            <VStack gap='50px' w='full'>
                <HStack w='full' align='left'>
                    <Link to='/'>
                        <Image src='cb90_logo_white.svg' w='120px' alt='CB90-PRO Logo' />
                    </Link>
                </HStack>
                <UnorderedList m='0' listStyleType='none' spacing='10px' w='full'>
                    {AdminSidebarData.map((admin, i) => {
                        return (
                            <NavLink to={admin.link} key={i}>
                                <ListItem my='10px' p='12px' roundedTopLeft='6px' roundedBottomLeft='6px' w='full' _hover={{ bg: 'brand.900', color: 'brand.100' }} bg={id === admin.id && 'brand.900'} color={id === admin.id ? 'brand.100' : ''}>
                                    <HStack>
                                        {admin.icon}
                                        <Box>{admin.title}</Box>
                                    </HStack>
                                </ListItem>
                            </NavLink>
                        )
                    })}
                </UnorderedList>
            </VStack>
            <UnorderedList m='0' listStyleType='none' spacing='10px' justifyContent='end'>
                {AdminSidebarData2.map((admin, idx) => {
                    return (
                        <NavLink to={admin.link} key={idx}>
                            <ListItem p='12px' roundedTopLeft='6px' roundedBottomLeft='6px' w='full' _hover={{ bg: 'brand.900', color: 'brand.100' }} bg={id === admin.id && 'brand.900'} color={id === admin.id ? 'brand.100' : ''}>
                                <HStack color={admin.title === 'Logout' && 'red.400'}>
                                    {admin.icon}
                                    <Box>{admin.title}</Box>
                                </HStack>
                            </ListItem>
                        </NavLink>
                    )
                })}
            </UnorderedList>
        </VStack>
    )
}

import { Avatar, Box, Flex, HStack, Image, Popover, PopoverContent, PopoverTrigger, Text, VStack, useBreakpointValue, useDisclosure, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, DrawerCloseButton, UnorderedList, ListItem } from '@chakra-ui/react'
import { FiBell, FiUser } from 'react-icons/fi'
import { TbLogout2 } from 'react-icons/tb'
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { selectUser } from '../../redux/userSlice';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SidebarData, SidebarData2 } from '../sidebar';
import { getInitials } from '../../utils';

export default function DashboardNavbar() {

  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams()
  const user = useSelector(selectUser);

  const firstName = user?.user?.first_name || '';
  const lastName = user?.user?.last_name || '';



  return (
    <HStack bg='white' justify='space-between' align='center' px={['10px', '30px']} py='16px' w='full' boxShadow='sm' m='0'>
      {!isDesktop &&
        <Link to='/'>
          <Image src='/cb90_logo_black.svg' w='120px' alt='CB90-PRO Logo' />
        </Link>
      }
      <Text fontSize='20px' fontWeight='700' color='brand.100'>{pathname === '/dashboard' && 'Overview' || pathname === '/tradingbot' && 'Trading Bot' || pathname === '/alerts' && 'Alerts & Reports' || pathname === '/exchange' && 'Exchanges' || pathname === '/settings' && 'Settings' || pathname === '/support' && 'Help and Support' || pathname === '/market-trend' && 'Market Trend'}</Text>
      <Flex align='center' gap='16px'>
        <FiBell size={22} />
        {isDesktop ? (
          <Popover trigger='hover' placement='bottom-end' >
            <PopoverTrigger>
              <Flex align='center' gap='10px'>
                <Text fontWeight='600'>
                  {firstName}
                </Text>
                <Avatar size='sm' name={`${firstName} + ${lastName}`} src={getInitials(`${firstName} + ${lastName}`)} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent w='fit-contnet'>
              <VStack bg='white' rounded='12px' gap='0'>
                <Link to='/settings'>
                  <Flex cursor='pointer' align='center' w='full' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                    <FiUser />
                    My Profile
                  </Flex>
                </Link>
                <Flex cursor='pointer' color='red.400' align='center' w='full' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                  <TbLogout2 />
                  Logout
                </Flex>
              </VStack>
            </PopoverContent>
          </Popover>
        ) : (
          <Box onClick={() => onOpen()}>
            <RxHamburgerMenu size={25} />
          </Box>
        )}
      </Flex>
      {!isDesktop && (
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
          <DrawerOverlay />
          <DrawerContent bg='brand.500'>
            <DrawerCloseButton />
            <DrawerHeader>
              <Link to='/'>
                <Image src='./cb90_logo_white.svg' w='120px' alt='CB90-PRO Logo' />
              </Link>
            </DrawerHeader>
            <DrawerBody color='white'>
              <VStack h='full' justify='space-between' align='left'>
                <UnorderedList m='0' listStyleType='none' spacing='10px' w='full'>
                  {SidebarData.map((item, i) => {
                    return (
                      <NavLink to={item.link} key={i}>
                        <ListItem my='10px' p='12px' rounded='6px' w='full' _hover={{ bg: 'brand.900', color: 'brand.100' }} bg={id === item.id && 'brand.900'} color={id === item.id ? 'brand.100' : ''}>
                          <HStack>
                            {item.icon}
                            <Box>{item.title}</Box>
                          </HStack>
                        </ListItem>
                      </NavLink>
                    )
                  })}
                </UnorderedList>
                <UnorderedList m='0' listStyleType='none' spacing='10px' justifyContent='end'>
                  {SidebarData2.map((item, idx) => {
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </HStack>
  )
}

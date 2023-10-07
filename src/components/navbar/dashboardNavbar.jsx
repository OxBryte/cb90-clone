import { Avatar, Flex, HStack, Popover, PopoverContent, PopoverTrigger, Text, VStack } from '@chakra-ui/react'
import { FiBell, FiUser } from 'react-icons/fi'
import { TbLogout2 } from 'react-icons/tb'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function DashboardNavbar() {

  const location = useLocation();
  const { pathname } = location;
  const user = useSelector((state) => state.user.user);
  console.log(user, 'this');

  return (
    <HStack bg='white' justify='space-between' align='center' px='30px' py='16px' w='full' boxShadow='sm' m='0'>
      <Text fontSize='20px' fontWeight='700' color='brand.100'>{pathname === '/dashboard' && 'Overview' || pathname === '/tradingbot' && 'Trading Bot' || pathname === '/alerts' && 'Alerts & Reports' || pathname === '/exchange' && 'Exchanges' || pathname === '/settings' && 'Settings' || pathname === '/support' && 'Help and Support' || pathname === '/market-trend' && 'Market Trend'}</Text>
      <Flex align='center' gap='16px'>
        <FiBell size={22} />
        <Popover trigger='hover' placement='bottom-end' >
          <PopoverTrigger>
            <Flex items='center' gap='10px'>
              <Text>
                {user.user.first_name}
              </Text>
              <Avatar size='sm' name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </Flex>
          </PopoverTrigger>
          <PopoverContent w='fit-contnet'>
            <VStack bg='white' rounded='12px' gap='0'>
              <Flex cursor='pointer' align='center' w='full' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                <FiUser />
                My Profile
              </Flex>
              <Flex cursor='pointer' color='red.400' align='center' w='full' p='15px' rounded='12px' _hover={{ bg: 'brand.300', rounded: 'none' }} gap='12px'>
                <TbLogout2 />
                Logout
              </Flex>
            </VStack>
          </PopoverContent>
        </Popover>
      </Flex>
    </HStack>
  )
}

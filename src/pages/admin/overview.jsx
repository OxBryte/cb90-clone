import { SimpleGrid, VStack, Box, Heading, Text, useBreakpointValue, Flex, Image, Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import AllUsers from './allUsers'
import { useSelector } from 'react-redux'
import { selectToken } from '../../redux/userSlice'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

export default function AdminOverview() {

    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    const token = useSelector(selectToken);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get(`${VITE_BASE_URL}/admin/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setUsers(response.data.data);
                    console.log(response.data)
                    setLoading(false);
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error);
                setLoading(false);
            }
        }
        fetchUser();
    }, [token, VITE_BASE_URL]);

    const usersLast24Hours = users.filter(user => moment().diff(moment(user.created_at), 'hours') < 24).length;
    const percentageChange = ((usersLast24Hours / users.length) * 100);



    return (
        <>
            <SimpleGrid w='full' columns={[1, 1, 2, 3]} justify='space-between' alignItems='center' gap='20px'>
                <VStack h={['auto', '180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                    <Box p='10px' bg='brand.300' w='fit-content' rounded='14px'>
                        <PiCurrencyCircleDollar size={30} />
                    </Box>
                    <VStack align='left' gap='16px'>
                        <Heading fontSize={isDesktop ? '34px' : '24px'}>$0</Heading>
                        <Text>Profit/Loss</Text>
                    </VStack>
                </VStack>
                <VStack h={['auto', '180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                    <Box p='10px' bg='brand.300' w='fit-content' rounded='14px'>
                        <PiCurrencyCircleDollar size={30} />
                    </Box>
                    <VStack align='left' gap='16px'>
                        <Heading fontSize={isDesktop ? '34px' : '24px'}>$4,000.00</Heading>
                        <Text>Withdrawn</Text>
                    </VStack>
                </VStack>
                <VStack h={['auto', '180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                    <Box p='10px' bg='brand.300' w='fit-content' rounded='14px'>
                        <PiCurrencyCircleDollar size={30} />
                    </Box>
                    <VStack align='left' gap='16px'>
                        <Heading fontSize={isDesktop ? '34px' : '24px'}>$4,000.00</Heading>
                        <Text>Withdrawn</Text>
                    </VStack>
                </VStack>
            </SimpleGrid>
            <VStack bg='white' gap='30px' rounded='16px' px='16px' py='12px' w='full' my='24px'>
                <Flex w='full' align='center' justify='space-between'>
                    <Image src='/userGroup.png' alt='' />
                    <Box>
                        <Popover trigger="hover" placement='bottom-end'>
                            <PopoverTrigger>
                                <Flex cursor='pointer' fontSize='14px' align='center' h='fit-content' justify='space-between' w='130px' p='10px' bg='brand.900' rounded='12px' gap='8px'>
                                    This week
                                    <MdKeyboardArrowDown size={25} />
                                </Flex>
                            </PopoverTrigger>
                            <PopoverContent w='130px' border='none' boxShadow='md'>
                                <VStack bg='white' rounded='12px' w='full' gap='0'>
                                    <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                        This month
                                    </Flex>
                                    <Flex cursor='pointer' align='left' w='full' justify='space-between' p='12px' rounded='12px' _hover={{ bg: 'brand.900', rounded: 'none' }} gap='12px'>
                                        Today
                                    </Flex>
                                </VStack>
                            </PopoverContent>
                        </Popover>
                    </Box>
                </Flex>
                <Flex w='full' justify='space-between' align='flex-start'>
                    <VStack align='left' gap='0'>
                        <Text fontSize='14px' fontWeight={400} color='#636363'>All Users</Text>
                        <Text fontSize='20px' fontWeight={700} color='#222222' >{users.length} <Box as='span' color={percentageChange > 0 ? '#00B200' : '#FF0909'} fontWeight={500} fontSize={14}>{percentageChange.toFixed(2)}%</Box> </Text>
                    </VStack>
                    <VStack align='left' gap='0'>
                        <Text fontSize='14px' fontWeight={400} color='#636363'>Active Users</Text>
                        <Text fontSize='20px' fontWeight={700} color='#222222' >0<Box as='span' color='#00B200' fontWeight={500} fontSize={14}>+0%</Box> </Text>
                    </VStack>
                    <VStack align='left' gap='0'>
                        <Text fontSize='14px' fontWeight={400} color='#636363'>Pending Verification</Text>
                        <Text fontSize='20px' fontWeight={700} color='#222222' >0 </Text>
                    </VStack>
                    <VStack align='left' gap='0'>
                        <Text fontSize='14px' fontWeight={400} color='#636363'>Deactivated</Text>
                        <Text fontSize='20px' fontWeight={700} color='#222222' >0<Box as='span' color='#FF0909' fontWeight={500} fontSize={14}>+0%</Box> </Text>
                    </VStack>
                </Flex>
            </VStack>
            <VStack my='24px' w='full'>
                <AllUsers loading={loading} users={users} error={error} />
            </VStack>
        </>
    )
}

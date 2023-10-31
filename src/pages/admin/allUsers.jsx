import { useEffect, useState } from 'react';
import { selectToken } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Table, Thead, Tr, Th, Tbody, Td, Box, VStack, HStack, Text, Flex, Input, Stack, Skeleton, TableContainer } from '@chakra-ui/react';
import moment from 'moment';
import { BeatLoader } from 'react-spinners';

export default function AllUsers() {

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

  return (
    <>
      <Box bg='white' p='16px' rounded='16px' w='full'>
        <HStack align='center' justify='space-between' w='full' mb='20px'>
          <Text px='12px' py='8px' bg='blackAlpha.200' rounded='lg'>Existing users</Text>
          <Flex>
            <Input type='search' placeholder='Search users' size='sm' w='260px' />
          </Flex>
        </HStack>
        {loading ? (
          <Flex w='full' h='200px' align='center' justify='center' mt='20px'>
            <BeatLoader size={20} color='gray' />
          </Flex>
        ) : (
          <TableContainer w='full'>
            <Table variant="striped" w='full'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Registration Date</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.first_name} {user.last_name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{moment(user.created_at).format('LL')}</Td>
                    <Td>null</Td>
                    <Td>...</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  )
}

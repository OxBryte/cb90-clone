import { useEffect, useState } from 'react';
import { selectToken } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Table, Thead, Tr, Th, Tbody, Td, Box, HStack, Text, Flex, Input, TableContainer } from '@chakra-ui/react';
import moment from 'moment';
import { BeatLoader } from 'react-spinners';
import { CgMore } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md';

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
          <Text px='12px' py='8px' bg='brand.300' fontWeight={400} rounded='lg'>Existing users</Text>
          <Flex>
            <Input type='search' placeholder='Search users' size='sm' w='260px' />
          </Flex>
        </HStack>
        {loading ? (
          <Flex w='full' h='200px' align='center' justify='center' mt='20px'>
            <BeatLoader size={20} color='#018083' />
          </Flex>
        ) : error ? (
          <>
            <Text>An Error occured</Text>
          </>
        ) : (
          <TableContainer w='full'>
            <Table variant="striped" w='full'>
              <Thead>
                <Tr>
                  <Th>
                    <Flex align='center' gap='6px'>
                      <Text>Name</Text>
                      <MdFilterList size='20' />
                    </Flex>
                  </Th>
                  <Th>
                    <Flex align='center' gap='6px'>
                      <Text>Email</Text>
                      <MdFilterList size='20' />
                    </Flex>
                  </Th>
                  <Th>
                    <Flex align='center' gap='6px'>
                      <Text>Registration date</Text>
                      <MdFilterList size='20' />
                    </Flex>
                  </Th>
                  <Th>
                    <Flex align='center' gap='6px'>
                      <Text>Status</Text>
                      <MdFilterList size='20' />
                    </Flex>
                  </Th>
                  <Th>
                    <Flex align='center' gap='6px'>
                      <Text>Action</Text>
                      <MdFilterList size='20' />
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.first_name} {user.last_name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{moment(user.created_at).format('LL')}</Td>
                    <Td>null</Td>
                    <Td><CgMore size={25} /></Td>
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

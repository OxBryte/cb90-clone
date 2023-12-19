import { Table, Thead, Tr, Th, Tbody, Td, Box, Text, Flex, Input, TableContainer, useToast, MenuButton, MenuList, MenuItem, Button, Menu, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, Badge } from '@chakra-ui/react';
import moment from 'moment';
import { BeatLoader } from 'react-spinners';
import { CgMore, } from 'react-icons/cg'
import { LiaToggleOnSolid, LiaToggleOffSolid } from 'react-icons/lia'
import { MdFilterList } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { BiEditAlt, BiUserCircle } from 'react-icons/bi';
import { GoTrash } from 'react-icons/go';
import { useState } from 'react';
import { ViewDetails, EditUserDetails } from '../../components/modal';
import { selectToken } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AllUsers({ loading, error, users, updateUserStatusInState }) {

  const [userInfo, setUserInfo] = useState(false)
  const [editUser, setEditUser] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null);
  const toast = useToast();
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = useSelector(selectToken);

  console.log(users)

  // Copy to clipboard function
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.innerText = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    toast({
      title: "Copied",
      description: `${text} copied.`,
      status: "success",
      duration: 2000,
      isClosable: true,
      size: 'sm'
    });
  }

  // Search function
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const filteredData = users.filter((user) => {
    const { email, first_name, last_name } = user;

    if (!inputText) return true;

    return (
      email.toLowerCase().includes(inputText) ||
      first_name.toLowerCase().includes(inputText) ||
      last_name.toLowerCase().includes(inputText)
    );
  });

  // Activate User
  const handleSubmit = async (ID) => {
    // setLoading(true)
    const payload = {
      id: ID
    };

    try {
      const response = await axios.post(`${VITE_BASE_URL}/admin/activate`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      // setLoading(false)
      if (response.data?.status) {
        updateUserStatusInState(ID, true);
        const successMessage = response.data?.message;
        toast({
          title: successMessage,
          description: 'Congratulations! You have successfully activated the user account.',
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(payload);

      } else {
        const errorMessage = response?.message || 'User not found';
        toast({
          title: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

    } catch (error) {
      console.error('User not found');
      toast({
        title: 'User not found',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Deactivate
  const handleDeactivate = async (ID) => {
    // setLoading(true)
    const payload = {
      id: ID
    };

    try {
      const response = await axios.post(`${VITE_BASE_URL}/admin/deactivate`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      // setLoading(false)
      if (response.data?.status) {
        updateUserStatusInState(ID, true);
        const successMessage = response.data?.message;
        toast({
          title: successMessage,
          description: 'Congratulations! You have successfully deactivated the user account.',
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(payload);

      } else {
        const errorMessage = response?.message || 'User not found';
        toast({
          title: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

    } catch (error) {
      console.error('User not found');
      toast({
        title: 'User not found',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <>
      <Box bg='white' p='16px' rounded='16px' w='full'>
        <Flex flexWrap='wrap' gap='8px' align='center' justify='space-between' w='full' mb='20px'>
          <Text px='12px' py='8px' bg='brand.300' fontWeight={400} rounded='lg'>Existing users</Text>
          <Flex>
            <Input type='search' value={inputText} onChange={inputHandler} placeholder='Search users' size='sm' w='260px' minW='full' />
          </Flex>
        </Flex>
        <Box>
          {inputText.length > 0 && filteredData.length >= 0 && (
            <Text>Search: Found {filteredData.length} </Text>
          )}
        </Box>
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
                {filteredData.length === 0 ? (
                  <Tr>
                    <Td colSpan={5} py="30px" textAlign="center">
                      Not found
                    </Td>
                  </Tr>
                ) : (
                  <>
                    {filteredData.map((user, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{user.first_name} {user.last_name}</Td>
                          <Td>
                            <Flex cursor='pointer' align='center' gap='4px' onClick={() => copyToClipboard(user.email)}>
                              {user.email}
                              <FiCopy />
                            </Flex>
                          </Td>
                          <Td>{moment(user.created_at).format('LL')}</Td>
                          <Td>{user.activated === true ? <Badge colorScheme='green'>Active</Badge> : <Badge colorScheme='red'>Inactive</Badge>} {user.role_id === '2' && <Badge colorScheme='blue'>Admin</Badge>}</Td>
                          <Td>
                            <Menu>
                              <MenuButton as={Button} bg='none'>
                                <CgMore size={20} />
                              </MenuButton>
                              <MenuList p='0' rounded='18px' overflow='hidden'>
                                <MenuItem onClick={() => { setUserInfo(true); setSelectedUser(user); }}>
                                  <Flex align='center' py='12px' gap='12px'>
                                    <BiUserCircle size={20} />
                                    <Text>View details</Text>
                                  </Flex>
                                </MenuItem>
                                <MenuItem onClick={() => { setSelectedUser(user); setEditUser(true); }}>
                                  <Flex align='center' py='12px' gap='12px' >
                                    <BiEditAlt size={20} />
                                    <Text>Edit</Text>
                                  </Flex>
                                </MenuItem>
                                {user.activated === true ? (
                                  <MenuItem onClick={() => { user.activated === false ? '' : handleDeactivate(user.id) }}>
                                    <Flex align='center' py='12px' gap='12px'>
                                      <LiaToggleOnSolid size={20} />
                                      <Text>Deactivate</Text>
                                    </Flex>
                                  </MenuItem>
                                ) : (
                                  <MenuItem onClick={() => { user.activated === true ? '' : handleSubmit(user.id) }}>
                                    <Flex align='center' py='12px' gap='12px'>
                                      <LiaToggleOffSolid size={20} />
                                      <Text>Activate</Text>
                                    </Flex>
                                  </MenuItem>
                                )}
                                <MenuItem>
                                  <Flex align='center' py='12px' gap='12px'>
                                    <GoTrash size={20} />
                                    <Text>Delete</Text>
                                  </Flex>
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </Td>
                        </Tr>
                      )
                    }
                    )}
                  </>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
      {userInfo && (
        <>
          <Modal isOpen={setUserInfo} onClose={() => setUserInfo(false)}>
            <ModalOverlay />
            <ModalContent justify='center'>
              <ModalCloseButton />
              <ModalHeader>
                User Details
              </ModalHeader>
              <ModalBody>
                <ViewDetails selectedUser={selectedUser} setUserInfo={setUserInfo} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
      {editUser && (
        <>
          <Modal isOpen={setEditUser} onClose={() => setEditUser(false)}>
            <ModalOverlay />
            <ModalContent justify='center'>
              <ModalCloseButton />
              <ModalHeader>
                Edit User Details
              </ModalHeader>
              <ModalBody>
                <EditUserDetails selectedUser={selectedUser} setEditUser={setEditUser} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  )
}

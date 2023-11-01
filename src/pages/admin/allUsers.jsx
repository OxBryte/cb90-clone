import { Table, Thead, Tr, Th, Tbody, Td, Box, HStack, Text, Flex, Input, TableContainer, useToast, MenuButton, MenuList, MenuItem, Button, Menu, VStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import moment from 'moment';
import { BeatLoader } from 'react-spinners';
import { CgMore, CgToggleOn } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { BiEditAlt, BiUserCircle } from 'react-icons/bi';
import { GoTrash } from 'react-icons/go';
import { useState } from 'react';
import ViewDetails from '../../components/modal';

export default function AllUsers({ loading, error, users }) {

  const [useInfo, setUserInfo] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null);
  const toast = useToast();

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


  return (
    <>
      <Box bg='white' p='16px' rounded='16px' w='full'>
        <HStack align='center' justify='space-between' w='full' mb='20px'>
          <Text px='12px' py='8px' bg='brand.300' fontWeight={400} rounded='lg'>Existing users</Text>
          <Flex>
            <Input type='search' value={inputText} onChange={inputHandler} placeholder='Search users' size='sm' w='260px' minW='full' />
          </Flex>
        </HStack>
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
                          <Td>null</Td>
                          <Td>
                            <Menu>
                              <MenuButton as={Button} bg='none'>
                                <CgMore size={20} />
                              </MenuButton>
                              <MenuList p='0' rounded='18px' overflow='hidden'>
                                <MenuItem>
                                  <Flex align='center' py='12px' gap='12px' onClick={() => { setUserInfo(true); setSelectedUser(user); }}>
                                    <BiUserCircle size={20} />
                                    <Text>View details</Text>
                                  </Flex>
                                </MenuItem>
                                <MenuItem>
                                  <Flex align='center' py='12px' gap='12px'>
                                    <BiEditAlt size={20} />
                                    <Text>Edit</Text>
                                  </Flex>
                                </MenuItem>
                                <MenuItem>
                                  <Flex align='center' py='12px' gap='12px'>
                                    <CgToggleOn size={20} />
                                    <Text>Activate</Text>
                                  </Flex>
                                </MenuItem>
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
      {useInfo && (
        <>
          <Modal isOpen={setUserInfo} onClose={() => setUserInfo(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box maxW='500px' h='500px' boxShadow='xl' bg='white' rounded='30px' p='30px'>
                  hi
                  <ViewDetails selectedUser={selectedUser} />
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  )
}

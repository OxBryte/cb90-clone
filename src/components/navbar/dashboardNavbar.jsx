import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'
import { FiBell } from 'react-icons/fi'

export default function DashboardNavbar() {
  return (
    <HStack bg='white' justify='space-between' align='center' px='20px' py='16px' w='full' boxShadow='sm' m='0'>
      <Text fontSize='20px' fontWeight='600' color='brand.100'>Overview</Text>
      <Flex align='center' gap='16px'>
        <FiBell />
        <Avatar size='sm' name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </Flex>
    </HStack>
  )
}

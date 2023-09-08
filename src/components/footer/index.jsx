import { Box, Divider, Flex, Image, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import ContainLayout from '../page-layout/container'
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <Box w='full' bg='brand.500' pt='80px' pb='30px'>
      <ContainLayout>
        <VStack w='full' align='left' gap='20px'>
          <Stack direction={['column', 'row']} color='brand.300' align='top' justify='space-between' w='full' gap='20px'>
            <VStack align='left' gap='16px'>
              <Image src='./cb90_logo_white.svg' w='120px' alt='CB90-PRO Logo' />
              <Text maxW='340px' fontSize='14px'>Leave market swings to our integrated auto-trading bots, which help you buy low sell high automatically 24/7 while you spend time doing the things you love with the people you love.</Text>
            </VStack>
            <UnorderedList ml='0' fontSize='14px' listStyleType='none' spacing='12px'>
              <ListItem mb='8px' color='white' fontWeight='700'>Platform</ListItem>
              <ListItem>Features</ListItem>
              <ListItem>DCA Bot</ListItem>
              <ListItem>Smart Trade</ListItem>
              <ListItem>GRID Bot</ListItem>
              <ListItem>Smart Bot</ListItem>
              <ListItem>Options Bot</ListItem>
            </UnorderedList>
            <UnorderedList ml='0' fontSize='14px' listStyleType='none' spacing='12px'>
              <ListItem mb='8px' color='white' fontWeight='700'>Trading Bots</ListItem>
              <ListItem>Binance</ListItem>
              <ListItem>Coinbase</ListItem>
            </UnorderedList>
            <UnorderedList ml='0' fontSize='14px' listStyleType='none' spacing='12px'>
              <ListItem mb='8px' color='white' fontWeight='700'>Company</ListItem>
              <ListItem>About Us</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Knowledge Base</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Reviews</ListItem>
            </UnorderedList>
            <UnorderedList ml='0' fontSize='14px' listStyleType='none' spacing='12px'>
              <ListItem mb='8px' color='white' fontWeight='700'>Plans</ListItem>
              <ListItem>For Enterprises</ListItem>
              <ListItem>Business Partners</ListItem>
              <ListItem>Price Charts</ListItem>
              <ListItem>Sitemap</ListItem>
              <ListItem>Security</ListItem>
            </UnorderedList>
          </Stack>
          <VStack align='left'>
            <Text color='white' fontWeight='700'>Contacts</Text>
            <Stack direction={['column', 'row']} gap='30px' align='top'>
              <VStack align='left' color='brand.300' gap='6px'>
                <Text fontSize='14px'>support@cb90.com</Text>
                <Text fontSize='14px'>Live Chat</Text>
                <Text fontSize='14px'>Messenger</Text>
              </VStack>
              <Flex gap='16px'>
                <Box bg='white' color='brand.100' p='12px' border='1px' h='fit-content' rounded='full'>
                  <FiYoutube size={20} />
                </Box>
                <Box bg='white' color='brand.100' p='12px' border='1px' h='fit-content' rounded='full'>
                  <FiFacebook size={20} />
                </Box>
                <Box bg='white' color='brand.100' p='12px' border='1px' h='fit-content' rounded='full'>
                  <FiTwitter size={20} />
                </Box>
                <Box bg='white' color='brand.100' p='12px' border='1px' h='fit-content' rounded='full'>
                  <FiLinkedin size={20} />
                </Box>
              </Flex>
            </Stack>
          </VStack>
        </VStack>
      </ContainLayout>
      <VStack mt='50px' color='brand.300' gap='24px'>
        <Divider />
        <Text>© 2023 CB90- PRO. All Rights Reserved.</Text>
      </VStack>
    </Box>
  )
}

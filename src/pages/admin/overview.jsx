import { SimpleGrid, VStack, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { PiCurrencyCircleDollar } from 'react-icons/pi'

export default function AdminOverview() {

    const isDesktop = useBreakpointValue({ base: false, lg: true })

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
              <VStack h={['auto', '180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                  <Box p='10px' bg='brand.300' w='fit-content' rounded='14px'>
                      <PiCurrencyCircleDollar size={30} />
                  </Box>
                  <VStack align='left' gap='16px'>
                      <Heading fontSize={isDesktop ? '34px' : '24px'}>0</Heading>
                      <Text>Bot Trading Days</Text>
                  </VStack>
              </VStack>
              <VStack h={['auto', '180px']} align='left' bg='white' rounded='20px' justify='space-between' px='25px' py='30px'>
                  <Box p='10px' bg='brand.300' w='fit-content' rounded='14px'>
                      <PiCurrencyCircleDollar size={30} />
                  </Box>
                  <VStack align='left' gap='16px'>
                      <Heading fontSize={isDesktop ? '34px' : '24px'}>0</Heading>
                      <Text>Total Trades</Text>
                  </VStack>
              </VStack>
          </SimpleGrid>
    </>
  )
}

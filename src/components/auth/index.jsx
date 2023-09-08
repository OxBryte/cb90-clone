import { Box, Button, Divider, Checkbox, HStack, Input, SimpleGrid, Text, VStack, FormControl, Select, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

export function LoginComp() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <VStack gap='20px' align='left'>
                {/* <HStack gap='30px'>
                        <Button px='30px' variant='outline' align='center' gap='10px'><FcGoogle size={25} /> Login with Google</Button>
                        <Button px='30px' variant='outline'>Login with Facebook</Button>
                    </HStack> */}
                <Button px='30px' variant='outline' align='center' gap='10px'><FcGoogle size={25} /> Login with Google</Button>
                <HStack gap='20px'>
                    <Divider borderColor='brand.100' />
                    <Text>OR</Text>
                    <Divider borderColor='brand.100' />
                </HStack>
                <FormControl>
                    <VStack gap='20px' align='left'>
                        <Box>
                            <Text mb='8px'>Email address</Text>
                            <Input placeholder='Enter valid email address' type='email' size='md' />
                        </Box>
                        <Box>
                            <Text mb='8px'>Password</Text>
                            <InputGroup>
                                <Input placeholder='Enter your passoword' size='md' type={visible ? 'text' : 'password'} />
                                {
                                    visible ? (
                                        <InputRightElement onClick={() => setVisible(false)} cursor='pointer'><HiEyeSlash /></InputRightElement>
                                    ) : (
                                        <InputRightElement onClick={() => setVisible(true)} cursor='pointer'><HiEye /></InputRightElement>
                                    )
                                }
                            </InputGroup>
                        </Box>
                        <Box as='a' href='/recover' cursor='pointer' bgClip='text' bgGradient='linear(to-b, brand.200, brand.400)' fontWeight={600}>Forget password?</Box>
                        <Button as='a' href='/' fontSize='14px' px='74px' w='fit-content' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                            Login
                        </Button>
                        <Text>Don&apos;t have an account? <Box as='a' href='/signup' cursor='pointer' fontWeight='600' bgGradient='linear(to-b, brand.200, brand.400)' bgClip='text'>Register now</Box></Text>
                    </VStack>
                </FormControl>
            </VStack>
        </>
    )
}

export function SignupComp() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <VStack gap='20px' align='left'>
                {/* <HStack gap='30px'>
                        <Button px='30px' variant='outline' align='center' gap='10px'><FcGoogle size={25} /> Login with Google</Button>
                        <Button px='30px' variant='outline'>Login with Facebook</Button>
                    </HStack> */}
                <Button px='30px' variant='outline' align='center' gap='10px'><FcGoogle size={25} /> Login with Google</Button>
                <HStack gap='20px'>
                    <Divider borderColor='brand.100' />
                    <Text>OR</Text>
                    <Divider borderColor='brand.100' />
                </HStack>
                <FormControl>
                    <VStack gap='20px' align='left'>
                        <SimpleGrid columns={[1, 2]} w='full' gap='20px'>
                            <Box>
                                <Text mb='8px'>First Name address</Text>
                                <Input placeholder='Enter first name' size='md' />
                            </Box>
                            <Box>
                                <Text mb='8px'>Last Name</Text>
                                <Input placeholder='Enter last name' size='md' />
                            </Box>
                            <Box>
                                <Text mb='8px'>Email address</Text>
                                <Input type='email' placeholder='Enter valid email address' size='md' />
                            </Box>
                            <Box>
                                <Text mb='8px'>Country</Text>
                                <Select color='gray.500' placeholder='Select Country'>
                                    <option value="">default</option>
                                    <option value="">default</option>
                                    <option value="">default</option>
                                </Select>
                            </Box>
                            <Box>
                                <Text mb='8px'>Password</Text>
                                <InputGroup>
                                    <Input placeholder='Enter a secure password' size='md' type={visible ? 'text' : 'password'} />
                                    {
                                        visible ? (
                                            <InputRightElement onClick={() => setVisible(false)} cursor='pointer'><HiEyeSlash /></InputRightElement>
                                        ) : (
                                            <InputRightElement onClick={() => setVisible(true)} cursor='pointer'><HiEye /></InputRightElement>
                                        )
                                    }
                                </InputGroup>
                            </Box>
                            <Box>
                                <Text mb='8px'>Confirm Password</Text>
                                <InputGroup>
                                    <Input placeholder='Confirm your password' size='md' type={visible ? 'text' : 'password'} />
                                    {
                                        visible ? (
                                            <InputRightElement onClick={() => setVisible(false)} cursor='pointer'><HiEyeSlash /></InputRightElement>
                                        ) : (
                                            <InputRightElement onClick={() => setVisible(true)} cursor='pointer'><HiEye /></InputRightElement>
                                        )
                                    }
                                </InputGroup>
                            </Box>
                        </SimpleGrid>
                        <VStack align='left' w='full'>
                            <Checkbox>
                                <Text color='brand.600' fontSize='13px' ml='10px'>
                                    I agree to the processing of personal data according to Privacy Policy
                                </Text>
                            </Checkbox>
                            <Checkbox>
                                <Text color='brand.600' fontSize='13px' ml='10px'>
                                    I acknowledge my name is correct and corresponds to the government issued identification
                                </Text>
                            </Checkbox>
                        </VStack>
                        <Button as='a' href='/' fontSize='14px' px='74px' w='fit-content' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                            Register
                        </Button>
                        <Text>Already have an account? <Box as='a' href='/login' cursor='pointer' fontWeight='600' bgGradient='linear(to-b, brand.200, brand.400)' bgClip='text'>Login now</Box></Text>
                    </VStack>
                </FormControl>
            </VStack>
        </>
    )
}



export function ForgottenPasswordComp() {
    return (
        <>
            <FormControl w='530px'>
                <VStack gap='20px' align='left'>
                    <Box>
                        <Text mb='8px'>Email address</Text>
                        <Input placeholder='Enter valid email address' type='email' size='md' />
                    </Box>
                    <Button as='a' href='/' fontSize='14px' px='74px' w='fit-content' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                        Send reset email
                    </Button>
                    <Text>Don&apos;t forget password? <Box as='a' href='/login' cursor='pointer' fontWeight='600' bgGradient='linear(to-b, brand.200, brand.400)' bgClip='text'>Login now</Box></Text>
                </VStack>
            </FormControl>
        </>
    )
}

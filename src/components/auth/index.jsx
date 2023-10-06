import { Box, Button, Divider, Checkbox, HStack, Input, SimpleGrid, Text, VStack, FormControl, Select, InputGroup, InputRightElement, Toast } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
                        <Button as='a' href='/dashboard' fontSize='14px' px='74px' w='fit-content' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
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

    const navigate = useNavigate();
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        password: "",
        confirmPassword: "",

    });

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        password: "",
        confirmPassword: "",
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
        validateInput(e);
    };

    const validateInput = (e) => {
        let { name, value } = e.target;
        setError((prev) => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "firstname":
                    if (!value) {
                        stateObj[name] = "Please enter Firstname.";
                    }
                    break;
                case "lastname":
                    if (!value) {
                        stateObj[name] = "Please enter Lastname.";
                    }
                    break;


                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter valid email.";
                    }
                    break;

                case "country":
                    if (!value) {
                        stateObj[name] = "Please select country.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] =
                            "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword
                            ? ""
                            : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        for (const entry in input) {
            formData.append(entry, input[entry]);
        }

        axios
            .post("https://cb90-pro-5925c5e641ac.herokuapp.com/api/register", input,
                { headers: { 'content-type': 'application/json' } })
            .then((res) => {
                if (res.status === 200) {
                    Toast.fire({
                        icon: "success",
                        title: "Signed in successfully",
                    });
                    navigate("/dashboard");
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "Something might be wrong",
                    });
                }

            })
            .catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: "Something might be wrong",
                });

            });
    };

    return (
        <>
            <VStack w='full' gap='20px' align='left'>
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
                <FormControl as='form' w='full' onSubmit={handleSubmit}>
                    <VStack gap='20px' w='full' align='left'>
                        <SimpleGrid columns={[1, 2]} w='full' gap='20px'>
                            <Box>
                                <Text mb='8px'>First Name</Text>
                                <Input type='text' placeholder='Enter first name' size='md' name='firstname' value={input.firstname} onChange={onInputChange} onBlur={validateInput} />
                                {error.firstname && <Text as='span' color='red.500'>{error.firstname}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Last Name</Text>
                                <Input type='text' placeholder='Enter last name' size='md' name='lastname' value={input.lastname} onChange={onInputChange} onBlur={validateInput} />
                                {error.lastname && <Text as='span' color='red.500'>{error.lastname}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Email address</Text>
                                <Input type='email' placeholder='Enter valid email address' name='email' size='md' value={input.email} onChange={onInputChange} onBlur={validateInput} />
                                {error.email && <Text as='span' color='red.500'>{error.email}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Country</Text>
                                <Select color='gray.500' placeholder='Select Country'>
                                    <option value="">default</option>
                                    <option value="">default</option>
                                    <option value="">default</option>
                                </Select>
                                {error.country && <Text as='span' color='red.500'>{error.country}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Password</Text>
                                <InputGroup>
                                    <Input placeholder='Enter a secure password' size='md' name='password' type={visible ? 'text' : 'password'} value={input.password} onChange={onInputChange} onBlur={validateInput} />
                                    {
                                        visible ? (
                                            <InputRightElement onClick={() => setVisible(false)} cursor='pointer'><HiEyeSlash /></InputRightElement>
                                        ) : (
                                            <InputRightElement onClick={() => setVisible(true)} cursor='pointer'><HiEye /></InputRightElement>
                                        )
                                    }
                                </InputGroup>
                                {error.password && <Text as='span' color='red.500'>{error.password}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Confirm Password</Text>
                                <InputGroup>
                                    <Input placeholder='Confirm your password' size='md' name='confirmPassword' type={visible ? 'text' : 'password'} value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput} />
                                    {
                                        visible ? (
                                            <InputRightElement onClick={() => setVisible(false)} cursor='pointer'><HiEyeSlash /></InputRightElement>
                                        ) : (
                                            <InputRightElement onClick={() => setVisible(true)} cursor='pointer'><HiEye /></InputRightElement>
                                        )
                                    }
                                </InputGroup>
                                {error.confirmPassword && <Text as='span' color='red.500'>{error.confirmPassword}</Text>}
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
                        <Button
                        onClick={handleSubmit}
                            fontSize='14px'
                            px='74px'
                            w='fit-content'
                            bgGradient={!input.firstname ||
                                !input.lastname ||
                                // !input.country ||
                                !input.email ||
                                !input.password ||
                                !input.confirmPassword ? 'linear(to-b, brand.800, brand.800)' : 'linear(to-b, brand.200, brand.400)'}
                            color="white"
                            _hover={{ bg: 'brand.200', color: 'white' }}
                            cursor={!input.firstname ||
                                !input.lastname ||
                                // !input.country ||
                                !input.email ||
                                !input.password ||
                                !input.confirmPassword ? 'not-allowed' : 'pointer'}
                            disabled={
                                !input.firstname ||
                                !input.lastname ||
                                // !input.country ||
                                !input.email ||
                                !input.password ||
                                !input.confirmPassword
                            }>
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

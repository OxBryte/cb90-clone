import { Box, Button, Checkbox, Input, SimpleGrid, Text, VStack, FormControl, Select, InputGroup, InputRightElement, useToast, Spinner, Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { getNames } from 'country-list'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../../redux/userSlice'

export function LoginComp() {

    const [isLoading, setIsLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()
    const navigate = useNavigate()

    const loginEndpoint = import.meta.env.VITE_LOGIN_URL;
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true)
        axios
            .post(loginEndpoint, {
                email: email,
                password: password,
            })
            .then((res) => {
                if (res.status === 200) {
                    const successMessage = res.data?.message;
                    toast({
                        title: successMessage,
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });

                    const { token, ...userData } = res.data;
                    localStorage.setItem("token", token);
                    dispatch(setToken(token));
                    setIsLoading(false);
                    dispatch(setUser(userData));
                    navigate("/dashboard");

                    // const token = localStorage.getItem("token");
                } else {
                    const errorMessage = res.data?.message || 'Something went wrong';
                    toast({
                        title: errorMessage,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                    setIsLoading(false)
                }
            })
            .catch((res) => {
                const errorMessage = res.data?.message || 'Email & Password does not match.';
                toast({
                    title: errorMessage,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                setIsLoading(false)
            });
    };


    return (
        <>
            <VStack w='full' gap='20px' align='left'>
                <FormControl as='form' w='full' onSubmit={handleSubmit}>
                    <VStack gap='20px' w='full' align='left'>
                        <Box>
                            <Text mb='8px'>Email address</Text>
                            <Input autoComplete="off" w='full' placeholder='Enter valid email address' type='email' size='md' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                        <Box>
                            <Text mb='8px'>Password</Text>
                            <InputGroup>
                                <Input autoComplete="off" w='full' placeholder='Enter your passoword' size='md' type={visible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
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
                        <Button onClick={handleSubmit} fontSize='14px' px='74px' w='fit-content' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                            {isLoading ? <Spinner size='md' /> : 'Login'}
                        </Button>
                        <Text>Don&apos;t have an account? <Box as='a' href='/signup' cursor='pointer' fontWeight='600' bgGradient='linear(to-b, brand.200, brand.400)' bgClip='text'>Register now</Box></Text>
                    </VStack>
                </FormControl>
            </VStack>
        </>
    )
}

export function SignupComp() {

    const [modal, setModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const toast = useToast();
    // const navigate = useNavigate();
    const [country, setCountry] = useState('');

    const registerEndpoint = import.meta.env.VITE_REGISTER_URL;


    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const countryNames = getNames();
    const countryOptions = countryNames.map((name) => (
        <option key={name} value={name}>
            {name}
        </option>
    ));

    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        country: '',
        password: "",
        confirmPassword: "",

    });

    const [error, setError] = useState({
        first_name: "",
        last_name: "",
        email: "",
        country: '',
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
                case "first_name":
                    if (!value) {
                        stateObj[name] = "Please enter Firstname.";
                    }
                    break;
                case "last_name":
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
                    } else if (value.length < 8) { // Checking for password length
                        stateObj[name] = "Password should be at least 8 characters.";
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
                    } else if (value.length < 8) { // Checking for confirm password length
                        stateObj[name] = "Confirm Password should be at least 8 characters.";
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

        const combinedInput = {
            ...input,
            // name: `${input.firstname} ${input.lastname}`,
            country: country
        };

        // Remove firstname, lastname, and confirmPassword from the data to be sent
        delete combinedInput.confirmPassword;
        setIsLoading(true)

        axios
            .post(registerEndpoint, combinedInput,
                { headers: { 'content-type': 'application/json' } })
            .then((res) => {
                if (res.status === 200 && res.data && res.data.status === true) {
                    const successMessage = res.data?.message;
                    toast({
                        title: successMessage,
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });

                    setInput({
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        country: "",
                    });

                    setModal(true)
                    setIsLoading(false)
                    // navigate("/dashboard");
                } else {
                    const errorMessage = res.data?.message;
                    toast({
                        title: errorMessage,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                    setIsLoading(false)
                }
            })
            .catch((err) => {
                const errorMessage = err.response?.data?.message;
                toast({
                    title: errorMessage,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                setIsLoading(false)
            });
    };

    return (
        <>
            {modal && (
                <>
                    <Flex align='center' justify='center' position='fixed' top='0' left='0' zIndex='100' bgColor='blackAlpha.300' backdropFilter='blur(5px)' p='30px' w='100%' h='100vh' overflow='hidden'>
                        <Box w='100%' h='100%' top='0' left='0' position='fixed' onClick={() => setModal(false)} />
                        <Box zIndex={100} position='relative'>
                            <Box maxW='500px' boxShadow='xl' bg='white' rounded='30px' p='30px'>
                                <VStack gap='40px'>
                                    <Heading>Congratulations</Heading>
                                    <Text textAlign='center'>Your account has been created successfully, you will receive a notification once your account has been reviewed and activated.</Text>
                                    <Button as='a' href='/login' fontSize='14px' px='40px' py='26px' w='fit-content' bgGradient='linear(to-b, brand.200, brand.400)' color="white" _hover={{ bg: 'brand.200', color: 'white' }}>
                                        Go to Login
                                    </Button>
                                </VStack>
                            </Box>
                        </Box>
                    </Flex>
                </>
            )}
            <VStack w='full' gap='20px' align='left'>
                <FormControl as='form' w='full' onSubmit={handleSubmit}>
                    <VStack gap='20px' w='full' align='left'>
                        <SimpleGrid columns={[1, 2]} w='full' gap='20px'>
                            <Box>
                                <Text mb='8px'>First Name</Text>
                                <Input type='text' autoComplete="off" w='full' placeholder='Enter first name' size='md' name='first_name' value={input.first_name} onChange={onInputChange} onBlur={validateInput} />
                                {error.first_name && <Text as='span' color='red.500'>{error.first_name}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Last Name</Text>
                                <Input type='text' autoComplete="off" w='full' placeholder='Enter last name' size='md' name='last_name' value={input.last_name} onChange={onInputChange} onBlur={validateInput} />
                                {error.last_name && <Text as='span' color='red.500'>{error.last_name}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Email address</Text>
                                <Input type='email' autoComplete="off" w='full' placeholder='Enter valid email address' name='email' size='md' value={input.email} onChange={onInputChange} onBlur={validateInput} />
                                {error.email && <Text as='span' color='red.500'>{error.email}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Country</Text>
                                <Select color='gray.500' autoComplete="off" w='full' placeholder='Select Country' value={country} onChange={handleCountryChange} >
                                    {countryOptions}
                                </Select>
                                {error.country && <Text as='span' color='red.500'>{error.country}</Text>}
                            </Box>
                            <Box>
                                <Text mb='8px'>Password</Text>
                                <InputGroup>
                                    <Input autoComplete="off" w='full' placeholder='Enter a secure password' size='md' name='password' type={visible ? 'text' : 'password'} value={input.password} onChange={onInputChange} onBlur={validateInput} />
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
                                    <Input autoComplete="off" w='full' placeholder='Confirm your password' size='md' name='confirmPassword' type={visible ? 'text' : 'password'} value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput} />
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
                            onClick={
                                !input.first_name ||
                                    !input.last_name ||
                                    !country ||
                                    !input.email ||
                                    !input.password ||
                                    !input.confirmPassword ? '' : handleSubmit}
                            fontSize='14px'
                            px='74px'
                            w='fit-content'
                            bgGradient={
                                !input.first_name ||
                                    !input.last_name ||
                                    !country ||
                                    !input.email ||
                                    !input.password ||
                                    !input.confirmPassword ? 'linear(to-b, brand.800, brand.800)' : 'linear(to-b, brand.200, brand.400)'}
                            color="white"
                            _hover={{ bg: 'brand.200', color: 'white' }}
                            cursor={
                                !input.first_name ||
                                    !input.last_name ||
                                    !country ||
                                    !input.email ||
                                    !input.password ||
                                    !input.confirmPassword ? 'not-allowed' : 'pointer'}
                            disabled={
                                !input.first_name ||
                                !input.last_name ||
                                !country ||
                                !input.email ||
                                !input.password ||
                                !input.confirmPassword
                            }>
                            {isLoading ? <Spinner size='md' /> : 'Register'}
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
                        <Input autoComplete="off" w='full' placeholder='Enter valid email address' type='email' size='md' />
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

import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";

export default class TestimonialCard extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Box color='white' w='full'>
                <Slider {...settings}>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>As a newcomer to the crypto world, CB90-Pro has been a revelation. The tailored alerts and informative blog have kept me informed and empowered. It&apos;s like having a crypto mentor at my fingertips.</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>CB90-Pro is more than a platform – it&apos;s a strategic partner. The advanced customization options, combined with responsive customer support, have elevated my trading game. The results speak for themselves</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                    <VStack align='left' maxW='360px' px='20px'>
                        <Text fontSize='18px' fontWeight='400'>Trading with CB90-Pro feels like having a seasoned expert by my side. The user-friendly dashboard, real-time insights, and seamless trades through Coinbase and Binance have simplified my crypto journey. Highly recommended!</Text>
                        <Flex gap='20px' align='center' color='white' mt='16px'>
                            <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <VStack align='left' gap='0'>
                                <Text fontWeight={600}>Jake P.</Text>
                                <Text fontWeight={400}>SourceForge</Text>
                            </VStack>
                        </Flex>
                    </VStack>
                </Slider>
            </Box>
        );
    }
}
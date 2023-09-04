import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

export default class Carousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 1,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 4000,
        };
        return (
            <Box color='white'>
                <Slider {...settings}>
                    <Box>
                        <Image src='./Slide1.png' alt='' />
                    </Box>
                    <Box>
                        <Image src='./Slide2.png' alt='' />
                    </Box>
                    <Box>
                        <Image src='./Slide3.png' alt='' />
                    </Box>
                </Slider>
            </Box>
        );
    }
}
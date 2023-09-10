import { useEffect, useState } from "react";
import { CarouselItem, CarouselItemHeader } from "./item";
import { Box, HStack, VStack } from "@chakra-ui/react";
export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            image: './slider.png',
            header: 'Performance Insights at a Glance'
        },
        {
            image: './slider2.png',
            header: 'Instant Alerts and Notifications'
        },
        {
            image: './slider3.png',
            header: 'Multi-Exchange Integration'
        },
    ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            // Calculate the next index (cyclically)
            const nextIndex = (activeIndex + 1) % items.length;
            updateIndex(nextIndex);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(timer); // Clean up the interval when component unmounts
    }, [activeIndex, items.length]);

    return (
        <VStack gap='40px' align='left' w='full' overflow='hidden' justify='center' >
            <Box whiteSpace='nowrap' transition='transform 0.5s ease-in-out' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item) => {
                    return <CarouselItem item={item} key={item} />;
                })}
            </Box>

            <HStack gap='20px' align='center'>
                {/* <Box w='50px' h='20px' bg='brand.300' onClick={() => { updateIndex(activeIndex - 1); }} /> */}
                {items.map((item, index) => {
                    return (
                        <Box w='60px' h='10px' transition='transform 0.5s ease-in-out' bg={`${index === activeIndex ? "white" : "whiteAlpha.300"}`} key={item} onClick={() => { updateIndex(index); }} />
                    );
                })}
                {/* <Box w='50px' h='20px' bg='brand.300' onClick={() => { updateIndex(activeIndex + 1); }} /> */}
            </HStack>

            <Box whiteSpace='nowrap' mt='40px' transition='transform 0.5s ease-in-out' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item) => {
                    return <CarouselItemHeader
                        item={item}
                        key={item}
                        style={{
                            opacity: item === activeIndex ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                        }}
                    />;
                })}
            </Box>
        </VStack>
    );
};
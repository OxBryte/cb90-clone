import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'


export default function FaqsSingle() {
    return (
        <>
            <Accordion w='full' defaultIndex={[0]} maxW='740px'>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                What is CB90-Pro?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                How do I get started?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                Can I monitor my bot&apos;s performance?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                Is my data secure?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                Can I customize my bot strategy?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                What exchanges are supported?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border='1px' borderColor='brand.800' rounded='8px' mb='20px'>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontWeight='700'>
                                Do I need trading experience?
                            </Box>
                            <AccordionIcon color='brand.200' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' color='brand.600'>
                        CB90-Pro is a cutting-edge crypto trading bot platform that automates trading strategies for optimal profit generation. It offers a range of trading bot options tailored to different investment preferences.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

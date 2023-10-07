import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"

export default function ModalUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et quasi, cumque rem est illum nisi repellat ratione dolore, fugiat corrupti earum ipsum autem molestiae nihil, aperiam placeat nobis officiis?
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
import { Box } from "@chakra-ui/react"

const ContainLayout = ({ children }) => {
  return (
    <Box mx="auto" maxW='1340px' px={{ base: '4', md: '8', lg: '24' }}>
      {children}
    </Box>
  )
}

export default ContainLayout
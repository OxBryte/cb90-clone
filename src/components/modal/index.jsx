import { Text } from '@chakra-ui/react'
import React from 'react'

export default function ViewDetails({ selectedUser }) {
    return (
        <>
            <Text>{selectedUser.email}</Text>
            <Text>{selectedUser.first_name}</Text>
            <Text>{selectedUser.last_name}</Text>
        </>
    )
}

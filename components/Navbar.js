import React from 'react'
import { 
    Flex, 
    Avatar, 
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon
} from '@chakra-ui/react'

import {BiChevronDown} from 'react-icons/bi'

function Navbar() {
    return (
        <Flex 
            flexDir="row" 
            justifyContent="flex-end" 
            alignItems="center" 
            p="20px" 
            w="100%" 
            h="80px"
            boxShadow="12px 0 12px 0 rgba(0, 0, 0, 0.05)"
            mb={5}
        >
            <Menu>
                <MenuButton as="button">
                    <Flex align="center">
                        <Avatar size="sm" src="avatar-1.jpg" />
                        <Text mx={3}>Sylwia Weller</Text>
                        <Icon as={BiChevronDown} size="sm" />
                    </Flex>
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                </MenuList>
            </Menu>
                
        </Flex>
    )
}

export default Navbar
import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'

import {BiChevronDown, BiChevronRight} from 'react-icons/bi'

export default function NavItem({ icon, title, active, navSize }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex align="center" flexDir="row" justify="space-between">
                            <Flex alignItems="center">
                                <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                            </Flex>
                            <Icon as={BiChevronRight} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Link>
            </Menu>
        </Flex>
    )
}
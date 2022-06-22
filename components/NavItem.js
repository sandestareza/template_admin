import React, { useState } from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Box
} from '@chakra-ui/react'

import {BiChevronDown, BiChevronRight} from 'react-icons/bi'

export default function NavItem({ icon, title, active, navSize, subMenu }) {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const handleClickSubMenu = () => {
        setShowSubMenu(!showSubMenu)
    }
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
                    <MenuButton w="100%" onClick={handleClickSubMenu}>
                        <Flex align="center" flexDir="row" justify="space-between">
                            <Flex alignItems="center">
                                <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                            </Flex>
                            <Icon as={ !showSubMenu ? BiChevronRight : BiChevronDown} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
            {
                showSubMenu &&
                <Flex
                    justifyContent="cemter"
                    flexDir="column"
                    alignItems="center"                    
                    mt={3}
                    backgroundColor={navSize == "large" ? "none" : "#fff"}
                    boxShadow={navSize == "large" ? "none" : "12px 0 12px 0 rgba(0, 0, 0, 0.05)"}
                    borderRadius={8} 
                    minW="100%"
                >
                    <Link
                        p={3}
                        borderRadius={8}
                        _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                        w="100%"
                    >   
                        <Text align="center">{subMenu}</Text>
                    </Link>
                </Flex>
            }
        </Flex>
    )
}
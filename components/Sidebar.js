import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Box
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiSettings
} from 'react-icons/fi'
import { RiPagesLine } from 'react-icons/ri'
import { CgComponents } from 'react-icons/cg'
import NavItem from './NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="100vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius="10px" 
            w={navSize == "small" ? "75px" : "300px"}
            flexDir="column"
            justifyContent="flex-start"
        >
            <Flex
                px='5%'
                flexDir="row"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mt={4}
                justifyContent={navSize == "small" ? "center" : "space-between"}
            >
                <Flex mb={4} align="center" flexDir='column' ml={navSize == "small" ? 0 : 6}>
                    <Avatar size="2xl" src="avatar-1.jpg" mb='20px' display={navSize == "small" ? "none" : "flex"} />
                    <Flex flexDir="column" align='center' display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>                
                <IconButton
                    background="none"
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
            </Flex>

            <Divider display={navSize == "small" ? "none" : "flex"} />

            <Flex
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
                px='10%'
            >
                
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active/>
                <NavItem navSize={navSize} icon={CgComponents} title="Components" />
                <NavItem navSize={navSize} icon={RiPagesLine} title="Page" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />

            </Flex>

            <Box my={4} position='fixed' left={navSize == "small" ? 2 : 5} bottom={0}>

                <Divider mb={5} display={navSize == "small" ? "none" : "flex"} />

                <Flex flexDir="row">
                    <Text color="gray" >&copy; 2022 </Text>
                    <Text color="gray" ml={3} display={navSize == "small" ? "none" : "flex"} >Template Dashboard Admin </Text>
                </Flex>
            </Box> 
            
        </Flex>
    )
}
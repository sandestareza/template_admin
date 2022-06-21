import Sidebar from './Sidebar'
import { Flex } from '@chakra-ui/react'
import BreadCrumb from './BreadCrumb'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
	<Flex 
		maxW="2000px" 
		h="100vh" 
		flexDir="row"
		overflow="hidden"
	>
		<Flex>
			<Sidebar />
		</Flex>

		<Flex 
			w="100%"
			flexDir="column"
			overflow="hidden"
			minH="100vh"
			pl={5}
		>
			<Navbar/>
			<BreadCrumb />

            { children }
			
			
		</Flex>
		 
    </Flex>
  )
}

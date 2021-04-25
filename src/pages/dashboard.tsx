import { Flex } from '@chakra-ui/react'
import { Header, Sidebar } from '../components'

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      height="100vh"
    >
      <Header />

      <Flex
        width="100%"
        maginY="6"
        maxWidth="1480px"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar></Sidebar>
      </Flex>
    </Flex>
  )
}
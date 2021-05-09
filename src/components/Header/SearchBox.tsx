import { Flex, Input, Icon } from '@chakra-ui/react'
import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth="400px"
      alignSelf="center"
      color="gray.200"
      position="relative"
      background="gray.800"
      borderRadius="full"
    >
      <Input
        ref={searchInputRef}
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}
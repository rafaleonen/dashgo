import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex alignItems="center">

      { showProfileData &&
        <Box marginRight="4" textAlign="right" >
          <Text>Rafael Leonen</Text>
          <Text color="gray.300" fontSize="small">
            rafah.sclt@gmail.com
        </Text>
        </Box>
      }

      <Avatar size="md" name="Rafael Leonen" src="https://github.com/rafahsclt.png" />
    </Flex>
  )
}
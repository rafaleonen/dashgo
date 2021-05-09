import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

interface NavSectionprops {
  title: string
  children: React.ReactNode
}

export function NavSection({ title, children }: NavSectionprops) {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
      >
        {title}
      </Text>

      <Stack
        spacing="4"
        marginTop="8"
        alignItems="stretch"
      >
        {children}
      </Stack>

    </Box>
  )
}
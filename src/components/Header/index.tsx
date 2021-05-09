import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { NotificationsNav } from './NotificationsNav'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { useSiderbarDrawer } from '../../hooks/sidebarDrawer'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen } = useSiderbarDrawer()

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1480px"
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      { !isWideVersion &&
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        >
        </IconButton>
      }
      <Logo />
      { isWideVersion && <SearchBox />}
      <NotificationsNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}
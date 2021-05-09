import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureProps

const SiderbarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SiderbarDrawerProvider({ children}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SiderbarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderbarDrawerContext.Provider>
  )
}

export function useSiderbarDrawer() {
  const context = useContext(SiderbarDrawerContext)

  if(!context) {
    throw new Error('useSiderbarDrawer must be used within an Provider')
  }

  return context
}
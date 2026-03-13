// import { HStack, useDisclosure, useUpdateEffect } from '@chakra-ui/react'
// import { useScrollSpy } from 'hooks/use-scrollspy'
// import { usePathname } from 'next/navigation'
// import * as React from 'react'

// import { MobileNavButton, MobileNavContent } from '#components/mobile-nav'
// import { NavLink } from '#components/nav-link'
// import siteConfig from '#data/config'
// import ThemeToggle from './theme-toggle'

// const Navigation: React.FC = () => {
//   const mobileNav = useDisclosure()
//   const path = usePathname()

//   const activeId = useScrollSpy(
//     siteConfig.header.links
//       .filter(({ id }) => id)
//       .map(({ id }) => `[id="${id}"]`),
//     { threshold: 0.75 }
//   )

//   const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null)

//   useUpdateEffect(() => {
//     mobileNavBtnRef.current?.focus()
//   }, [mobileNav.isOpen])

//   return (
//     <HStack spacing="3" flexShrink={0}>
      
//       {/* Desktop Links */}
//       {siteConfig.header.links.map(({ href, id, ...props }, i) => (
//         <NavLink
//           key={i}
     
//           display={{ base: 'none', md: 'block' }}
//           href={href || `/#${id}`}
//           isActive={
//             !!(
//               (id && activeId === id) ||
//               (href && path?.match(new RegExp(href)))
//             )
//           }
//           {...props}
//         >
//           {props.label}
//         </NavLink>
//       ))}

//       {/* Theme Toggle */}
//       <ThemeToggle />

//       {/* Mobile Menu Button */}
//       <MobileNavButton
//         ref={mobileNavBtnRef}
//         aria-label="Open Menu"
//         display={{ base: 'flex', md: 'none' }}
//         onClick={mobileNav.onOpen}
//       />

//       {/* Mobile Menu */}
//       <MobileNavContent
//         isOpen={mobileNav.isOpen}
//         onClose={mobileNav.onClose}
//       />
//     </HStack>
//   )
// }

// export default Navigation
// ////////////////////////////////

import {
  HStack,
  VStack,
  Box,
  useDisclosure,
  useUpdateEffect,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'
import ThemeToggle from './theme-toggle'

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const path = usePathname()
  const activeId = useScrollSpy(
    siteConfig.header.links.filter(({ id }) => id).map(({ id }) => `[id="${id}"]`),
    { threshold: 0.75 }
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null)

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  // Colors for light/dark mode
  const mobileBg = useColorModeValue('white', 'gray.800')
  const mobileText = useColorModeValue('gray.800', 'white')
  const mobileHoverBg = useColorModeValue('purple.50', 'purple.600')

  return (
    <HStack spacing="3" flexShrink={0} position="relative">
      {/* Desktop Links */}
      {siteConfig.header.links.map(({ href, id, ...props }, i) => (
        <NavLink
          key={i}
          display={{ base: 'none', md: 'block' }}
          href={href || `/#${id}`}
          isActive={!!((id && activeId === id) || (href && path?.match(new RegExp(href))))}
          {...props}
        >
          {props.label}
        </NavLink>
      ))}

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Mobile Menu Button */}
      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        display={{ base: 'flex', md: 'none' }}
        onClick={mobileNav.onToggle}
      />

      {/* Mobile Menu */}
      {mobileNav.isOpen && (
        <VStack
          spacing={4}
          align="start"
          bg={mobileBg}
          color={mobileText}
          p={4}
          position="absolute"
          top="100%"
          left={0}
          right={0}
          shadow="lg"
          rounded="xl"
          zIndex="overlay"
          display={{ base: 'flex', md: 'none' }}
        >
          {/* Close button */}
          <Box w="full" textAlign="right">
            <button
              onClick={mobileNav.onClose}
              style={{
                fontSize: '18px',
                padding: '4px 8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </Box>

          {/* Links */}
          {siteConfig.header.links.map(({ href, id, label }, i) => (
            <NavLink
              key={i}
              href={href || `/#${id}`}
              onClick={mobileNav.onClose} // closes menu on click
              w="full"
              py={2}
              px={3}
              rounded="md"
              _hover={{ bg: mobileHoverBg }}
              fontWeight="medium"
              textAlign="center"
            >
              {label}
            </NavLink>
          ))}
        </VStack>
      )}
    </HStack>
  )
}

export default Navigation



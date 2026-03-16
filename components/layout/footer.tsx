// import {
//   Box,
//   BoxProps,
//   Container,
//   Flex,
//   HStack,
//   SimpleGrid,
//   Stack,
//   Text,
// } from '@chakra-ui/react'
// import { Link, LinkProps } from '@saas-ui/react'

// import siteConfig from '#data/config'

// export interface FooterProps extends BoxProps {
//   columns?: number
// }

// export const Footer: React.FC<FooterProps> = (props) => {
//   const { columns = 2, ...rest } = props
//   return (
//     <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
//       <Container maxW="container.2xl" px="8" py="8">
//         <SimpleGrid columns={columns}>
//           <Stack spacing="8">
//             <Stack alignItems="flex-start">
//               <Flex>
//                 <Box as={siteConfig.logo} flex="1" height="32px" />
//               </Flex>
//               <Text fontSize="md" color="muted">
//                 {siteConfig.seo.description}
//               </Text>
//             </Stack>
//             <Copyright>{siteConfig.footer.copyright}</Copyright>
//           </Stack>
//           <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
//             {siteConfig.footer?.links?.map(({ href, label }) => (
//               <FooterLink key={href} href={href}>
//                 {label}
//               </FooterLink>
//             ))}
//           </HStack>
//         </SimpleGrid>
//       </Container>
//     </Box>
//   )
// }

// export interface CopyrightProps {
//   title?: React.ReactNode
//   children: React.ReactNode
// }

// export const Copyright: React.FC<CopyrightProps> = ({
//   title,
//   children,
// }: CopyrightProps) => {
//   let content
//   if (title && !children) {
//     content = `&copy; ${new Date().getFullYear()} - ${title}`
//   }
//   return (
//     <Text color="muted" fontSize="sm">
//       {content || children}
//     </Text>
//   )
// }

// export const FooterLink: React.FC<LinkProps> = (props) => {
//   const { children, ...rest } = props
//   return (
//     <Link
//       color="muted"
//       fontSize="sm"
//       textDecoration="none"
//       _hover={{
//         color: 'white',
//         transition: 'color .2s ease-in',
//       }}
//       {...rest}
//     >
//       {children}
//     </Link>
//   )
// }
///////////////////////////////
'use client'

import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Image

} from '@chakra-ui/react'
// At the top of your file, import from react-icons/si
import { SiYoutube, SiTiktok, SiLinkedin, SiTelegram, SiThreads } from "react-icons/si";



import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMusic,
  FiMessageCircle,
  FiSend,
  FiYoutube,
  FiPhone,
  FiMapPin,
  FiMail,
} from 'react-icons/fi'

export const Footer = () => {
  return (
    <Box
      position="relative"
      width="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      bgImage="url('images/ima1.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="blackAlpha.800"
        backdropFilter="blur(6px)"
      />

      {/* Animated Gradient */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-r, purple.600, blue.500, teal.400)"
        opacity="0.25"
        animation="pulse 8s ease-in-out infinite"
      />

      <Container maxW="container.xl" position="relative" zIndex="2" py="20">
        <SimpleGrid columns={[1, 2, 4]} spacing="12">
          
          {/* Company Info */}
          <Stack spacing="4">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Haris Pharmaceuticals Import
            </Text>
            <Text color="whiteAlpha.800">
             Delivering quality medicines, healthcare products, pharmacy services, 
             and wellness solutions. Committed to improving community health, 
             supporting patients with trusted care, and providing reliable medical supplies.
              Dedicated to excellence in healthcare distribution,
              service, and patient well-being across the region.
            </Text>
          </Stack>

          {/* Services */}
          <Stack spacing="4">
            <Text fontSize="lg" fontWeight="bold" color="white">
              Our Services
            </Text>
             <Text fontSize="lg" fontWeight="bold" color="white">
                 Pharmaceutical Import            </Text>

     
          
<Text color="whiteAlpha.700">medicine import</Text>
<Text color="whiteAlpha.700">medical equipment import</Text>
<Text color="whiteAlpha.700">laboratory reagent import</Text>
<Text color="whiteAlpha.700">vitamin and suplement import</Text>

          </Stack>

          {/* Contact */}
         <Stack spacing="4">
  <Text fontSize="lg" fontWeight="bold" color="white">
    Contact Us
  </Text>

  <HStack>
    <Icon as={FiMapPin} color="teal.300" />
    <Text color="whiteAlpha.700">Ethiopia</Text>
  </HStack>

  <HStack>
    <Icon as={FiPhone} color="teal.300" />
    <Text color="whiteAlpha.700">+251 911419083</Text>
  </HStack>
  <HStack>
    <Icon as={FiPhone} color="teal.300" />
    <Text color="whiteAlpha.700">+251 91 272 2600</Text>
  </HStack>

  <HStack>
    <Icon as={FiMail} color="teal.300" />
    <Text color="whiteAlpha.700">info@haris-group.com</Text>
  </HStack>


</Stack>

          {/* Social */}
          <Stack spacing="4">
            <Text fontSize="lg" fontWeight="bold" color="white">
              Follow Us
            </Text>
<HStack spacing="5">
  <Link href="#" aria-label="Facebook">
    <Icon
      as={FiFacebook}
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'blue.400', transform: 'scale(1.2)' }}
    />
  </Link>

  <Link href="#" aria-label="Instagram">
    <Icon
      as={FiInstagram}
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'pink.400', transform: 'scale(1.2)' }}
    />
  </Link>

  <Link href="#" aria-label="Twitter">
    <Icon
      as={FiTwitter}
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'cyan.400', transform: 'scale(1.2)' }}
    />
  </Link>

  <Link href="#" aria-label="YouTube">
    <Icon
      as={FiYoutube}
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'red.500', transform: 'scale(1.2)' }}
    />
  </Link>

  <Link href="#" aria-label="TikTok">
    <Icon
         as={SiTiktok} // Use a TikTok-like icon or import one from react-icons/si
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'black', transform: 'scale(1.2)' }}
    />
  </Link>

  <Link href="#" aria-label="LinkedIn">
    <Icon
      as={FiLinkedin}
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'blue.600', transform: 'scale(1.2)' }}
    />
  </Link>



  <Link href="#" aria-label="Telegram">
    <Icon
      as={SiTelegram} // You can replace with a Telegram-specific icon if using react-icons/si
      boxSize="6"
      color="whiteAlpha.700"
      transition="all .3s"
      _hover={{ color: 'cyan.500', transform: 'scale(1.2)' }}
    />
  </Link>
</HStack>
              <Image
    src="/images/ima2.jfif"   // put your image path here
    alt="Company Image"
    borderRadius="md"
    mt={4}
    objectFit="cover"
    mx="auto"
  opacity={0.6}
  _hover={{ opacity: 1 }}
  transition="0.3s"
  />
          </Stack>
        </SimpleGrid>

        {/* Bottom Line */}
        <Flex
          mt="20"
          pt="6"
          borderTop="1px solid"
          borderColor="whiteAlpha.300"
          justify="space-between"
          flexWrap="wrap"
        >
          <Text color="whiteAlpha.600" fontSize="sm">
            © {new Date().getFullYear()} Haris Group. All rights reserved.
          </Text>

          <Text color="whiteAlpha.600" fontSize="sm">
            Designed & Developed by Haris Group
          </Text>
        </Flex>
      </Container>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.35; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </Box>
  )
}


'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiShield,
  FiPackage,
  FiTruck,
  FiShoppingCart,
  FiHeadphones,
  FiDollarSign,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, BlueLogo,NewLogo,CombinedLogo,BannerLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'



export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <AboutSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
     
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Hlina Pharmacy 
                <Br /><span style={{ color: '#c2d6d6' }}>
  Precision Care Personal Touch
</span>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
              
              <Em>Hlina Pharmacy </Em> is a leading importer of genuine medicines, 
               bringing trusted healthcare solutions directly to our community while ensuring safety,
                quality, and reliability in every product we provide.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
               <ChakraLogo height="20px" /> <BannerLogo height="20px"/> <CombinedLogo height="20px"/><BlueLogo height="20px"/><NewLogo height="20px" /> 
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

{/* #Features  export const Feature: React.FC<FeatureProps> = (props) => {
*/}

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
  {
    title: 'Certified & Trusted Medicines',
    icon: FiShield,
    description:
      'We import high-quality pharmaceutical products from trusted international manufacturers, ensuring safety and reliability.',
    iconPosition: 'left',
    delay: 0.2,
  },
  {
    title: 'Wide Range of Products',
    icon: FiPackage,
    description:
      'From prescription drugs to medical supplies and hospital equipment, we provide a complete pharmaceutical solution.',
    iconPosition: 'left',
    delay: 0.4,
  },
  {
    title: 'Fast & Reliable Delivery',
    icon: FiTruck,
    description:
      'Efficient nationwide distribution across Ethiopia, serving hospitals, clinics, pharmacies, and individual customers.',
    iconPosition: 'left',
    delay: 0.6,
  },
  {
    title: 'Online Ordering System',
    icon: FiShoppingCart,
    description:
      'Place your orders easily through our secure online platform with multiple payment options.',
    iconPosition: 'left',
    delay: 0.8,
  },
  {
    title: 'Professional Customer Support',
    icon: FiHeadphones,
    description:
      'Our dedicated team is ready to assist you with product inquiries, bulk orders, and partnership opportunities.',
    iconPosition: 'left',
    delay: 1,
  },
  {
    title: 'Competitive Wholesale Pricing',
    icon: FiDollarSign,
    description:
      'Affordable pricing for pharmacies, clinics, and hospitals without compromising product quality.',
    iconPosition: 'left',
    delay: 1.2,
  },
]}

        reveal={FallInPlace}
      />
 


    </Box>
  )
}
//////////////////////////////////###############################
const AboutSection = () => {
  return (
    <Highlights>
      {/* Main Company Overview */}
      <HighlightsItem colSpan={[1, null, 2]} title="About Our Company">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            We are a trusted pharmaceutical import company based in Ethiopia,
            dedicated to supplying high-quality medicines, medical equipment,
            and healthcare supplies to hospitals, clinics, pharmacies, and
            individual customers.
          </Text>

          <Text color="muted" fontSize="lg">
            Our mission is to improve healthcare access by importing reliable,
            safe, and internationally certified pharmaceutical products at
            competitive prices.
          </Text>
        </VStack>
      </HighlightsItem>

      {/* Mission */}
      <HighlightsItem title="Our Mission">
        <Text color="muted" fontSize="lg">
          To deliver safe, affordable, and high-quality pharmaceutical products
          across Ethiopia while maintaining strong partnerships with global
          manufacturers and local healthcare providers.
        </Text>
      </HighlightsItem>

      {/* Testimonial */}
      <HighlightsTestimonialItem
        name="Trusted Healthcare Partner"
        description="Serving Ethiopia"
        avatar="/static/images/pharmacy-team.jpg"
        gradient={['blue.200', 'green.400']}
      >
        “Our commitment is to ensure that every hospital, clinic, and pharmacy
        we serve receives genuine, quality-assured medicines with reliable
        delivery and professional support.”
      </HighlightsTestimonialItem>

      {/* Why Choose Us */}
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Why Choose Us"
      >
        <Text color="muted" fontSize="lg">
          We combine global sourcing expertise with local market knowledge to
          provide a complete pharmaceutical supply solution.
        </Text>

        <Wrap mt="8">
          {[
            'Internationally sourced medicines',
            'Nationwide distribution',
            'Online ordering system',
            'Bulk & wholesale supply',
            'Professional customer support',
            'Reliable delivery service',
            'Competitive pricing',
            'Long-term healthcare partnerships',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="blue"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

////////////////////////////////////////////////
const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
    
    <HighlightsItem colSpan={[1, null, 2]} title="Our Import & Quality Process">
  <Text color="muted" fontSize="lg">
    Every product we import goes through strict verification and quality
    inspection before distribution. We work only with trusted international
    manufacturers to ensure safety, authenticity, and compliance with
    healthcare standards.
  </Text>

  <Wrap mt="8">
    {[
      'Global manufacturer sourcing',
      'Product authenticity verification',
      'Secure transportation',
      'Warehouse quality control',
      'Safe distribution system',
    ].map((value) => (
      <Tag
        key={value}
        variant="subtle"
        colorScheme="green"
        rounded="full"
        px="3"
      >
        {value}
      </Tag>
    ))}
  </Wrap>
</HighlightsItem>
 
<HighlightsItem colSpan={[1, null, 2]}>
  <Box
    position="relative"
    p={{ base: 10, md: 16 }}
    rounded="3xl"
    bgGradient="linear(to-r, blue.500, teal.400)"
    boxShadow="xl"
    overflow="hidden"
  >
    {/* Soft Light Effect */}
    <Box
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="whiteAlpha.100"
      backdropFilter="blur(6px)"
    />

    <VStack
      spacing="6"
      textAlign="center"
      position="relative"
      zIndex="1"
      color="white"
    >
      <Text
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
      >
        Our Vision
      </Text>

      <Text
        fontSize={{ base: "lg", md: "xl" }}
        maxW="2xl"
        opacity={0.95}
      >
        To become one of Ethiopia’s leading pharmaceutical import companies,
        expanding access to safe and high-quality medicines while building
        long-term partnerships with healthcare institutions nationwide.
      </Text>
    </VStack>
  </Box>
</HighlightsItem>
<HighlightsItem title="Our Goal">
  <Box
    p="6"
    rounded="2xl"
    bg="blue.50"
    _dark={{ bg: "blue.900" }}
    border="1px solid"
    borderColor="blue.100"
    _dark={{ borderColor: "blue.700" }}
    transition="all 0.3s ease"
    _hover={{
      transform: "translateY(-5px)",
      boxShadow: "xl",
    }}
  >
    <VStack align="start" spacing="4">
      <Text fontSize="lg" fontWeight="bold" color="blue.600">
        Building Strong Healthcare Networks
      </Text>

      <Text
        fontSize="md"
        color="gray.600"
        _dark={{ color: "gray.300" }}
      >
        Our goal is to expand pharmaceutical access across Ethiopia by
        strengthening partnerships with hospitals, clinics, and pharmacies
        while ensuring safe and affordable medicines.
      </Text>
    </VStack>
  </Box>
</HighlightsItem>



</Highlights>

    // <Highlights>
    //   <HighlightsItem colSpan={[1, null, 2]} title="Core components">
    //     <VStack alignItems="flex-start" spacing="8">
    //       <Text color="muted" fontSize="xl">
    //         Get started for free with <Em>30+ open source components</Em>.
    //         Including authentication screens with Clerk, Supabase and Magic.
    //         Fully functional forms with React Hook Form. Data tables with React
    //         Table.
    //       </Text>

    //       <Flex
    //         rounded="full"
    //         borderWidth="1px"
    //         flexDirection="row"
    //         alignItems="center"
    //         py="1"
    //         ps="8"
    //         pe="2"
    //         bg="primary.900"
    //         _dark={{ bg: 'gray.900' }}
    //       >
    //         <Box>
    //           <Text color="yellow.400" display="inline">
    //             yarn add
    //           </Text>{' '}
    //           <Text color="cyan.300" display="inline">
    //             @saas-ui/react
    //           </Text>
    //         </Box>
    //         <IconButton
    //           icon={hasCopied ? <FiCheck /> : <FiCopy />}
    //           aria-label="Copy install command"
    //           onClick={onCopy}
    //           variant="ghost"
    //           ms="4"
    //           isRound
    //           color="white"
    //         />
    //       </Flex>
    //     </VStack>
    //   </HighlightsItem>
    //   <HighlightsItem title="Solid foundations">
    //     <Text color="muted" fontSize="lg">
    //       We don&apos;t like to re-invent the wheel, neither should you. We
    //       selected the most productive and established tools in the scene and
    //       build Saas UI on top of it.
    //     </Text>
    //   </HighlightsItem>
    //   <HighlightsTestimonialItem
    //     name="Renata Alink"
    //     description="Founder"
    //     avatar="/static/images/avatar.jpg"
    //     gradient={['pink.200', 'purple.500']}
    //   >
    //     “Saas UI helped us set up a beautiful modern UI in no time. It saved us
    //     hundreds of hours in development time and allowed us to focus on
    //     business logic for our specific use-case from the start.”
    //   </HighlightsTestimonialItem>
    //   <HighlightsItem
    //     colSpan={[1, null, 2]}
    //     title="Start your next idea two steps ahead"
    //   >
    //     <Text color="muted" fontSize="lg">
    //       We took care of all your basic frontend needs, so you can start
    //       building functionality that makes your product unique.
    //     </Text>
    //     <Wrap mt="8">
    //       {[
    //         'authentication',
    //         'navigation',
    //         'crud',
    //         'settings',
    //         'multi-tenancy',
    //         'layouts',
    //         'billing',
    //         'a11y testing',
    //         'server-side rendering',
    //         'documentation',
    //         'onboarding',
    //         'storybooks',
    //         'theming',
    //         'upselling',
    //         'unit testing',
    //         'feature flags',
    //         'responsiveness',
    //       ].map((value) => (
    //         <Tag
    //           key={value}
    //           variant="subtle"
    //           colorScheme="purple"
    //           rounded="full"
    //           px="3"
    //         >
    //           {value}
    //         </Tag>
    //       ))}
    //     </Wrap>
    //   </HighlightsItem>
    // </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '#components.',
          icon: FiBox,
          description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
          variant: 'inline',
        },
        {
          title: 'Starterkits.',
          icon: FiLock,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Documentation.',
          icon: FiSearch,
          description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
          variant: 'inline',
        },
        {
          title: 'Onboarding.',
          icon: FiUserPlus,
          description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
          variant: 'inline',
        },
        {
          title: 'Feature flags.',
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: 'inline',
        },
        {
          title: 'Upselling.',
          icon: FiTrendingUp,
          description:
            '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
          variant: 'inline',
        },
        {
          title: 'Themes.',
          icon: FiToggleLeft,
          description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
          variant: 'inline',
        },
        {
          title: 'Generators.',
          icon: FiTerminal,
          description:
            'Extend your design system while maintaininig code quality and consistency with built-in generators.',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home

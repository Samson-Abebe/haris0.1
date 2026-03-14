'use client'

import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  Icon,
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
  
  FiShield,
  FiPackage,
  FiTruck,
 
  FiHeadphones,

   FiAlertCircle,
   FiBookOpen,
   
   FiUserCheck,

 
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiGlobe,
  FiClock,
  FiCheckCircle,
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



// export const meta: Metadata = {
//   title: 'Saas UI Landingspage',
//   description: 'Free SaaS landingspage starter kit',
// }


 
  const AboutUs = () => (
    <Box   id="about" textAlign="center" py={{ base: 10, md: 16, lg: 20 }}> {/* reduced padding */}
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} // responsive font size
        color="purple.600"
        lineHeight={{ base: "1.2", md: "1.1" }}
        letterSpacing={{ base: "tight", md: "normal" }}
      >
        Haris pharmaceuticals import
      </Heading>
    </Box>
  )
const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection1 />
      <AboutUs />
      <AboutSection />
   
      

      <HighlightsSection />
     < ServicesSection />
  

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
                Haris pharmaceuticals import samson
                <Br /><span style={{ color: '#c2d6d6' }}>
  Precision Care Personal Touch
</span>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
              
              <Em>Haris pharmaceuticals import</Em> is a leading importer of genuine medicines, 
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



const HeroSection1: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">

      {/* Background Gradient */}
      <BackgroundGradient height="100%" zIndex="-1" />

      <Container maxW="container.xl" pt={{ base: 28, md: 36, lg: 60 }} pb={{ base: 16, lg: 40 }}>
        
        {/* HERO SECTION */}
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
          spacing={{ base: 12, lg: 20 }}
        >

          {/* TEXT CONTENT */}
          <Box flex="1" textAlign={{ base: "center", lg: "left" }}>
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                <FallInPlace>
                Haris pharmaceuticals import

                  <Br />
                  <span style={{ color: "#c2d6d6" }}>
                    Precision Care Personal Touch
                  </span>
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4} fontWeight="medium">
                  <Em>Haris pharmaceuticals import</Em> is a leading importer of genuine medicines,
                  bringing trusted healthcare solutions directly to our community while ensuring
                  safety, quality, and reliability in every product we provide.
                </FallInPlace>
              }
            />

            {/* Logos */}
            <FallInPlace delay={0.8}>
              <HStack
                pt={4}
                pb={8}
                spacing={4}
                justify={{ base: "center", lg: "flex-start" }}
                wrap="wrap"
              >
                <ChakraLogo height="20px" />
                <BannerLogo height="20px" />
                <CombinedLogo height="20px" />
                <BlueLogo height="20px" />
                <NewLogo height="20px" />
              </HStack>

              {/* Buttons */}
              
            </FallInPlace>
          </Box>

          {/* IMAGE */}
          <Box flex="1" maxW={{ base: "100%", md: "500px", lg: "600px" }} mb={{ base: 8, lg: 0 }}>
            <FallInPlace delay={1}>
              <Box overflow="hidden" borderRadius="12px">
                <Image
                  src="/static/screenshots/ima.jpg"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage"
                  style={{ width: "100%", height: "auto" }}
                  quality={75}
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>

        </Stack>

        {/* FEATURES SECTION */}
        <Features
          id="benefits"
          columns={{ base: 1, md: 2, lg: 4 }}
          iconSize={4}
          innerWidth="container.xl"
          pt={20}
          features={[
            {
              title: "Certified & Trusted Medicines",
              icon: FiShield,
              description:
                "We import high-quality pharmaceutical products from trusted international manufacturers, ensuring safety and reliability.",
              iconPosition: "left",
              delay: 0.2,
            },
            {
              title: "Wide Range of Products",
              icon: FiPackage,
              description:
                "From prescription drugs to medical supplies and hospital equipment, we provide a complete pharmaceutical solution.",
              iconPosition: "left",
              delay: 0.4,
            },
            {
              title: "Fast & Reliable Delivery",
              icon: FiTruck,
              description:
                "Efficient nationwide distribution across Ethiopia, serving hospitals, clinics, pharmacies, and individual customers.",
              iconPosition: "left",
              delay: 0.6,
            },
            {
              title: "Online Ordering System",
              icon: FiShoppingCart,
              description:
                "Place your orders easily through our secure online platform with multiple payment options.",
              iconPosition: "left",
              delay: 0.8,
            },
            {
              title: "Professional Customer Support",
              icon: FiHeadphones,
              description:
                "Our dedicated team is ready to assist you with product inquiries, bulk orders, and partnership opportunities.",
              iconPosition: "left",
              delay: 1,
            },
            {
              title: "Competitive Wholesale Pricing",
              icon: FiDollarSign,
              description:
                "Affordable pricing for pharmacies, clinics, and hospitals without compromising product quality.",
              iconPosition: "left",
              delay: 1.2,
            },
          ]}
          reveal={FallInPlace}
        />

      </Container>
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
  title="Trusted Healthcare Partner"
  description="Serving Ethiopia"
  image="/images/image1.jpg"
  gradient={['blue.600', 'green.500']}
>
  Our commitment is to ensure that every hospital, clinic, and pharmacy
  receives genuine, quality-assured medicines with reliable delivery.
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

<HighlightsItem title="Our Goal">
  <Box
    p="6"
    rounded="2xl"
    bg="blue.50"
    
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

const ServicesSection = () => {
  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Our Core Services
          <Br /> Tailored for Healthcare
        </Heading>
      }
      description={
        <>
          We provide a full range of pharmaceutical services to hospitals,
          clinics, pharmacies, and individuals, ensuring quality, safety, and
          reliability.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={5}
      features={[
        {
          title: 'Medicine Import',
          icon: FiPackage,
          description:
            'Importing high-quality medicines from trusted international manufacturers.',
          variant: 'inline',
        },
        {
          title: 'Bulk Supply & Distribution',
          icon: FiTruck,
          description:
            'Delivering medicines and medical supplies efficiently across Ethiopia.',
          variant: 'inline',
        },
        {
          title: 'Online Ordering Platform',
          icon: FiShoppingCart,
          description:
            'Secure, easy-to-use platform for hospitals, clinics, and pharmacies to place orders.',
          variant: 'inline',
        },
        {
          title: 'Cold Chain Logistics',
          icon: FiClock,
          description:
            'Special handling for temperature-sensitive medicines to maintain quality.',
          variant: 'inline',
        },
        {
          title: 'Pharmacist Consultation',
          icon: FiUsers,
          description:
            'Professional guidance for healthcare partners on medicine usage and handling.',
          variant: 'inline',
        },
        {
          title: 'Emergency & Priority Orders',
          icon: FiAlertCircle,
          description:
            'Fast processing for urgent orders to ensure critical medicines reach on time.',
          variant: 'inline',
        },
        {
          title: 'Custom Packaging',
          icon: FiBox,
          description:
            'Tailored packaging solutions for easy storage and distribution in hospitals and pharmacies.',
          variant: 'inline',
        },
        {
          title: 'Training & Support',
          icon: FiBookOpen,
          description:
            'Workshops and guidance for healthcare providers about new products and safe handling.',
          variant: 'inline',
        },
        {
          title: 'Healthcare Partnerships',
          icon: FiUserCheck,
          description:
            'Long-term collaboration with hospitals, clinics, and pharmacies for better healthcare service.',
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
     <Pricing id="pricing" {...pricing}>
    
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}





  // Function expression to render full About Us title section
  
export default Home

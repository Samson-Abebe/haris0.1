'use client'

import {
  Box,
  HStack,
  Heading,
  Icon,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'
import React, { useRef, useState } from 'react'

import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section, SectionProps, SectionTitle } from '#components/section'

/* =========================
   Interfaces
========================= */

export interface PricingPlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  features: Array<PricingFeatureProps | null>
  image?: string
  isRecommended?: boolean
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode
  plans: Array<PricingPlan>
}

/* =========================
   Main Component
========================= */

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props

  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return

    const scrollLeft = scrollRef.current.scrollLeft
    const cardWidth = 306 // card width + spacing
    const index = Math.round(scrollLeft / cardWidth)

    setActiveIndex(index)
  }

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />

      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description} />

        {/* Scroll Container */}
        <Box position="relative">
          <Box
            ref={scrollRef}
            onScroll={handleScroll}
            overflowX="auto"
            pb="4"
            px="4"
            sx={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <HStack spacing="6" align="stretch">
              {plans?.map((plan) => (
                <PricingBox
                  key={plan.id}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  image={plan.image}
                  w="300px"
                  flex="0 0 auto"
                  scrollSnapAlign="start"
                  borderColor={
                    plan.isRecommended ? 'primary.500' : 'gray.300'
                  }
                >
                  <PricingFeatures>
                    {plan.features.map((feature, i) =>
                      feature ? (
                        <PricingFeature key={i} {...feature} />
                      ) : (
                        <Box key={i} h="3" />
                      ),
                    )}
                  </PricingFeatures>
                </PricingBox>
              ))}
            </HStack>
          </Box>

          {/* Fade Indicator */}
          <Box
            position="absolute"
            right="0"
            top="0"
            h="100%"
            w="80px"
            pointerEvents="none"
            bgGradient="linear(to-l, white, transparent)"
            _dark={{
              bgGradient: 'linear(to-l, #0f172a, transparent)',
            }}
          />
        </Box>

        {/* Scroll Indicators */}
        <HStack justify="center" mt="6" spacing="2">
          {plans.map((_, i) => (
            <Box
              key={i}
              w={activeIndex === i ? '10px' : '8px'}
              h={activeIndex === i ? '10px' : '8px'}
              borderRadius="full"
              bg={activeIndex === i ? 'primary.500' : 'gray.400'}
              transition="all 0.2s"
            />
          ))}
        </HStack>

        {children}
      </Box>
    </Section>
  )
}

/* =========================
   Features Wrapper
========================= */

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack align="stretch" spacing="4" mb="6" flex="1">
      {children}
    </VStack>
  )
}

/* =========================
   Single Feature
========================= */

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const PricingFeature: React.FC<PricingFeatureProps> = ({
  title,
  iconColor = 'primary.500',
}) => {
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

/* =========================
   Pricing Card
========================= */

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  image?: string
  
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, image, children, ...rest } = props

  return (
    <VStack
      bg="whiteAlpha.700"
      borderRadius="lg"
      overflow="hidden"
      border="1px solid"
      alignItems="stretch"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-6px)',
        shadow: 'lg',
      }}
      _dark={{
        bg: 'blackAlpha.400',
        borderColor: 'gray.700',
      }}
      
      {...rest}
    >
      <VStack p="6" align="stretch" spacing="4" flex="1">
        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Box color="muted">{description}</Box>

        <Box fontSize="2xl" fontWeight="bold">
          {price}
        </Box>

        {children}
      </VStack>

      {image && (
        <Box w="100%" h="145px" overflow="hidden">
          <Box
            as="img"
            src={image}
            alt="plan image"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      )}
    </VStack>
  )
}
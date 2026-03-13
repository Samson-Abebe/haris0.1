import {
  Box,
  Card,
  CardProps,
  Grid,
  GridItem,
  GridItemProps,
  
  
  
  Heading,
  Text,
  useTheme
} from '@chakra-ui/react'
import { transparentize  } from '@chakra-ui/theme-tools'


//import { HighlightsItem } from "./HighlightsItem"  // ← check this path

import { Section, SectionProps } from '#components/section'
import { Testimonial, TestimonialProps } from '#components/testimonials'

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardProps, 'title'> {}

export const HighlightsItem: React.FC<HighlightBoxProps> = (props) => {
  const { children, title, ...rest } = props
  return (
    <GridItem
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      overflow="hidden"
      position="relative"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      {...rest}
    >
      {title && (
        <Heading fontSize="3xl" mb="8">
          {title}
        </Heading>
      )}
      {children}
    </GridItem>
  )
}
export const HighlightsTestimonialItem: React.FC<
  HighlightBoxProps & {
    title: string
    description: string
    image: string
    gradient?: [string, string]
    children?: React.ReactNode
  }
> = (props) => {
  const {
    title,
    description,
    image,
    gradient = ['primary.500', 'secondary.500'],
    children,
    ...rest
  } = props

  const theme = useTheme()

  return (
    <HighlightsItem
      position="relative"
      overflow="hidden"
      borderRadius="xl"
      p="0"
      {...rest}
    >
      {/* Background Image */}
      <Box
        position="relative"
        w="100%"
        minH={{ base: "260px", md: "320px" }}
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="flex-end"
        p={{ base: 4, md: 6 }}
        color="white"
      >
        {/* Gradient Overlay */}
        <Box
          position="absolute"
          inset="0"
          bgGradient={`linear(to-br, ${transparentize(
            gradient[0],
            0.7,
          )(theme)}, ${transparentize(gradient[1], 0.7)(theme)})`}
          zIndex="0"
        />

        {/* Content */}
        <Box position="relative" zIndex="1">
          <Heading size="md">{title}</Heading>

          <Text fontSize="sm" opacity={0.9}>
            {description}
          </Text>

          {children && (
            <Text mt={3} fontSize="sm">
              {children}
            </Text>
          )}
        </Box>
      </Box>
    </HighlightsItem>
  )
}

export const Highlights: React.FC<SectionProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        position="relative"
      >
        {children}
      </Grid>
    </Section>
  )
}

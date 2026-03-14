'use client'

import { NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'
import { Pricing } from '#components/pricing/pricing'
import pricing from '#data/pris'
import pricing1 from '#data/pris1'

const Home: NextPage = () => {
  return (
    <Box>
      <PricingSection />
    </Box>
  )
}

const PricingSection = () => {
  return (
    <Pricing id="pr" {...pricing}>
      <Text p="8" textAlign="center" color="muted">
       
      </Text>
      <Pricing id="pr1" {...pricing1}></Pricing>
    </Pricing>
  )
}

export default Home

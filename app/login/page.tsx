"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  Card,
  CardBody,
  useColorModeValue
} from "@chakra-ui/react"

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactPage() {
  const bg = useColorModeValue("gray.50", "gray.900")
  const cardBg = useColorModeValue("white", "gray.700")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const iconColor = useColorModeValue("purple.500", "purple.300")

  return (
    <Box bg={bg} minH="100vh" py={20}>

      <Container maxW="6xl">

        {/* Title */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl">
            Haris Pharmaceuticals Import
          </Heading>

          <Text color={textColor} maxW="600px">
            Have questions about medicines or prescriptions?
            Our team is ready to assist you anytime.
          </Text>
        </VStack>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>

          {/* CONTACT FORM */}
          <GridItem>

            <Card shadow="lg" borderRadius="xl" bg={cardBg}>
              <CardBody>

                <VStack spacing={6}>

                  <Input
                    placeholder="Full Name"
                    size="lg"
                  />

                  <Input
                    placeholder="Email Address"
                    size="lg"
                    type="email"
                  />

                  <Textarea
                    placeholder="Your Message"
                    size="lg"
                    rows={5}
                  />

                  <Button
                    colorScheme="purple"
                    size="lg"
                    width="full"
                  >
                    Send Message
                  </Button>

                </VStack>

              </CardBody>
            </Card>

          </GridItem>

          {/* CONTACT INFO */}
          <GridItem>

            <VStack spacing={6}>

              <Card w="full" shadow="md" bg={cardBg}>
                <CardBody>
                  <HStack spacing={4}>
                    <Icon as={FaMapMarkerAlt} boxSize={6} color={iconColor}/>
                    <Box>
                      <Heading size="md">Address</Heading>
                      <Text color={textColor}>
                        Addis Ababa, Ethiopia
                      </Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>

              <Card w="full" shadow="md" bg={cardBg}>
                <CardBody>
                  <HStack spacing={4}>
                    <Icon as={FaPhone} boxSize={6} color={iconColor}/>
                    <Box>
                      <Heading size="md">Phone</Heading>
                      <Text color={textColor}>
                        +25191 272 2600
                      </Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>

              <Card w="full" shadow="md" bg={cardBg}>
                <CardBody>
                  <HStack spacing={4}>
                    <Icon as={FaEnvelope} boxSize={6} color={iconColor}/>
                    <Box>
                      <Heading size="md">Email</Heading>
                      <Text color={textColor}>
                        info@haris-group.com
                      </Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>

            </VStack>

          </GridItem>

        </Grid>

      </Container>
    </Box>
  )
}

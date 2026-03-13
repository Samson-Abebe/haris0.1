// import {
//   Avatar,
//   Card,
//   CardBody,
//   CardHeader,
//   CardProps,
//   Heading,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { Link } from "@saas-ui/react";
// import { FaTwitter } from "react-icons/fa";

// export interface TestimonialProps extends CardProps {
//   name: string;
//   description: React.ReactNode;
//   avatar: string;
//   href?: string;
//   children?: React.ReactNode;
// }

// export const Testimonial = ({
//   name,
//   description,
//   avatar,
//   href,
//   children,
//   ...rest
// }: TestimonialProps) => {
//   return (
//     <Card position="relative" {...rest}>
//       <CardHeader display="flex" flexDirection="row" alignItems="center">
//         <Avatar name={name} src={avatar} size="sm" bg="transparent" />
//         <Stack spacing="1" ms="4">
//           <Heading size="sm">{name}</Heading>
//           <Text color="muted" size="xs">
//             {description}
//           </Text>
//         </Stack>
//       </CardHeader>
//       <CardBody>
//         {children}

//         {href && (
//           <Link href={href} position="absolute" top="4" right="4">
//             <FaTwitter />
//           </Link>
//         )}
//       </CardBody>
//     </Card>
//   );
// };
import {
  Box,
  Card,
  CardBody,
  CardProps,
  Heading,
  Text,
  Badge,
  Stack,
} from "@chakra-ui/react"

export interface PharmaCardProps extends CardProps {
  title: string
  description: string
  image: string
  info?: string
}

export const Testimonial = ({
  title,
  description,
  image,
  info,
  ...rest
}: PharmaCardProps) => {
  return (
    <Card
      minW="320px"
      maxW="420px"
      w="100%"
      h="420px" // keep fixed height
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      transition="all 0.4s ease"
      _hover={{
        transform: "translateY(-10px) scale(1.02)",
        boxShadow: "2xl",
      }}
      {...rest}
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-t, blackAlpha.800, blackAlpha.400)"
      />

      <CardBody
        position="relative"
        zIndex="1"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        h="100%"
        p="6"
      >
        <Stack spacing="3">
          {info && (
            <Badge
              colorScheme="green"
              width="fit-content"
              fontSize="0.7rem"
              px="3"
              py="1"
              borderRadius="full"
              maxW="90%"
              noOfLines={2} // prevents long text overflow
            >
              {info}
            </Badge>
          )}

          <Heading size="md">{title}</Heading>

          <Text fontSize="sm" opacity={0.9} noOfLines={3}>
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}
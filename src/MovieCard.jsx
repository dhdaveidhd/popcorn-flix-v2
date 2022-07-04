import React from 'react'
import {
  Button,
  VStack,
  Spacer,
  Box,
  Center,
  Image,
  Text,
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'

const MovieCard = ({ movie }) => {
  return (
    <Box
      borderRadius="30px"
      bgGradient="linear( gray.300, yellow.400, pink.200)"
      _hover={{
        background: 'white',
        color: 'teal.500',
      }}
      position="relative"
      boxShadow="xl"
      p="6"
      rounded="md"
    >
      <Center>
        <Text
          color="black"
          fontSize="20pt"
          fontWeight="extrabold"
          marginLeft="7px"
        >
          {movie.Year}
        </Text>
      </Center>

      <Center>
        <Image
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt=""
        ></Image>
      </Center>
      <Center>
        <Text
          color="grey"
          fontSize="15pt"
          fontWeight="extrabold"
          marginLeft="7px"
        >
          {movie.Type}
        </Text>
      </Center>
      <Center>
        <Text
          color="black"
          fontSize="25pt"
          fontWeight="extrabold"
          marginLeft="15px"
        >
          {movie.Title}
        </Text>
      </Center>
    </Box>
  )
}

export default MovieCard

import React, { useState } from 'react'
import { useEffect } from 'react'

import MovieCard from './MovieCard'

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
//f779b49e

const API = 'http://www.omdbapi.com/?apikey=f779b49e&'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const moviesList = async (name) => {
    const res = await fetch(`${API}&s=${name}`)
    const movieData = await res.json()

    setMovies(movieData.Search)
  }

  useEffect(() => {
    moviesList('')
  }, [])

  return (
    <>
      <Box w="100%" h="1000000px" bgGradient="linear(to-l, #7928CA, #FF0080)">
        <Center>
          <Text color="white" fontSize="6xl" fontWeight="extrabold">
            Welcome to Popcorn Flix V2
          </Text>
        </Center>

        <br></br>

        <Box width={'50%'} margin="auto">
          <InputGroup size="md" marginRight="3px">
            <Input
              pr="20rem"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for popcorn flix"
              color="black"
              border="1px"
              borderColor="gray.200"
              bgColor="white"
              marginRight="3px"
            />
            <Button
              alt="search"
              onClick={() => moviesList(search)}
              colorScheme="messenger"
            >
              Search
            </Button>
          </InputGroup>
        </Box>

        <br></br>
        <br></br>

        <Box>
          {movies?.length > 0 ? (
            <SimpleGrid columns={4} spacing={5}>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </SimpleGrid>
          ) : (
            <Text fontSize="20pt" color="white">
              No movies found
            </Text>
          )}
        </Box>
      </Box>
    </>
  )
}

export default App

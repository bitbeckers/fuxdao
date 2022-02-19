import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Heading fontSize='8xl'>
            🍆🖕🍑
          </Heading>
          <Text fontSize="4xl">How many FUX can you give?</Text>
          <Box>
            <Text fontSize="md" as="cite">
              “You and everyone you know are going to be dead soon. And in the
              short amount of time between here and there, you have a limited
              amount of fucks to give. Very few, in fact. And if you go around
              giving a fuck about everything and everyone without conscious
              thought or choice—well, then you’re going to get fucked.”
            </Text>
            <Text fontSize="sm" fontWeight='bold'>
              Mark Manson, The Subtle Art of Not Giving a F*ck: A
              Counterintuitive Approach to Living a Good Life
            </Text>
          </Box>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

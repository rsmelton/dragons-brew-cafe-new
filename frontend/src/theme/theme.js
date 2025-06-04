import { extendTheme } from '@chakra-ui/react';

// Figured I would overwrite Chakra's default color instead of 
// writing an inline style everywhere or using a class everywhere
// If I decide to move away from using Chakra, I can simply
// add color: white to the body tag in my css

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white", // <-- default text color
      },
    },
  },
});

export default theme;
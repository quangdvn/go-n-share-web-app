import { Box, Stack, Container } from '@chakra-ui/react';
import { Copyright } from './copy-right/copy-right';
import { Logo } from './logo/logo';
import { SocialMediaLinks } from './social-media-link/social-media-link';

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    py="12"
    px={{ base: '4', md: '8' }}
    boxShadow="rgba(0, 0, 0, 0.05) 0px -5px 6px"
    mt={10}
  >
    <Container maxW="7xl">
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <Logo />
          <SocialMediaLinks />
        </Stack>
        <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
      </Stack>
    </Container>
  </Box>
);

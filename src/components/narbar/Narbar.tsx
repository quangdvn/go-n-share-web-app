import { Box, Flex, HStack, Container } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <Box boxShadow="rgba(0, 0, 0, 0.05) 0px 3px 5px" px={4}>
        <Container maxW="7xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <HStack spacing={8} alignItems="center">
              <Box cursor="pointer">
                <Link href="/">
                  <Image
                    src="/Light-Logo.svg"
                    alt="Picture of the author"
                    width={60}
                    height={66}
                  />
                </Link>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

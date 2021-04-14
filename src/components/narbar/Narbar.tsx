import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Container,
} from '@chakra-ui/react';
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
            <Flex alignItems="center">
              <Menu>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                >
                  <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Image,
  Flex,
  Center,
  Text,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import BookingForm from '../booking-form/booking-form';

export default function CoachBox() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Trung Thành Limousine',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxWidth={700}
      maxHeight="auto"
    >
      <Flex>
        <Center>
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            maxWidth={250}
            maxHeight={250}
          />
        </Center>

        <Box p="6" width="100%">
          <Flex justifyContent="space-between">
            <Box>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Badge
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                Limousine 11 chỗ
              </Badge>
            </Box>
            <Center>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Center>
          </Flex>
          <Flex justifyContent="space-between" mt={2}>
            <Box>
              <Flex alignItems="center">
                <Text fontWeight="extrabold" lineHeight="tight">
                  22:00 &bull;
                </Text>
                <Center fontSize="small">Văn phòng Hà Nội</Center>
              </Flex>
              <Box fontSize="sm" ml={2}>
                2h40m
              </Box>
              <Flex alignItems="center">
                <Text fontWeight="extrabold" lineHeight="tight">
                  00:40 &bull;
                </Text>
                <Center fontSize="small">Ngã ba Cửa Ông</Center>
              </Flex>
            </Box>
            <Box color="blue" fontSize={20} fontWeight="bold">
              410.000đ
            </Box>
          </Flex>

          <Grid
            templateColumns="auto auto auto"
            columnGap="6px"
            rowGap="6px"
            mt={2}
          >
            {[1, 2, 3, 4, 5].map((data, index) => (
              <GridItem key={index}>
                <Center
                  bg="#f28636"
                  fontSize={12}
                  color="#fff"
                  borderRadius={5}
                >
                  Tiện nghi
                </Center>
              </GridItem>
            ))}
          </Grid>

          <Flex mt={3} justifyContent="flex-end">
            <Button
              rightIcon={<BsFillCaretDownFill />}
              colorScheme="blue"
              variant="outline"
              size="sm"
            >
              Thông tin chi tiêt
            </Button>
            <Button
              colorScheme="pink"
              variant="solid"
              size="sm"
              ml={1}
              onClick={() => {
                setShowBookingForm(!showBookingForm);
              }}
            >
              {showBookingForm ? 'Đóng' : 'Đặt vé'}
            </Button>
          </Flex>
        </Box>
      </Flex>
      {showBookingForm && <BookingForm />}
    </Box>
  );
}

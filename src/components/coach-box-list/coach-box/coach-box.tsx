/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { useState, useMemo } from 'react';
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
import { amenities } from 'src/constants/amenities';
import BookingForm from '../../booking-form/booking-form';

interface CoachBoxProps {
  key: number;
}

export default function CoachBox({ key }: CoachBoxProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const property = useMemo(() => {
    const resData = {
      id: key,
      imageUrl: `/image/${Math.floor(Math.random() * 15 + 1)}.jpeg`,
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Trung Thành Limousine',
      formattedPrice: '$1,900.00',
      reviewCount: Math.floor(Math.random() * 35 + 10),
      rating: Math.floor(Math.random() * 5 + 1),
      vip: Math.floor(Math.random() * 2 + 1),
      amenities: amenities[Math.floor(Math.random() * 5)],
    };
    return resData;
  }, []);
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxWidth={722}
      maxHeight="auto"
      margin="0 auto"
      paddingLeft="15px"
      marginTop="15px"
    >
      <Flex>
        <Center>
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            width={250}
            height={185}
          />
        </Center>

        <Box p="6" width="100%">
          <Flex justifyContent="space-between">
            <Flex justifyContent="flex-start">
              {property.vip === 1 && (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  VIP
                </Badge>
              )}
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
            </Flex>

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
                <Center fontSize="sm" marginLeft={2}>
                  Văn phòng Hà Nội
                </Center>
              </Flex>
              <Box fontSize="sm" ml={2}>
                2h40m
              </Box>
              <Flex alignItems="center">
                <Text fontWeight="extrabold" lineHeight="tight">
                  00:40 &bull;
                </Text>
                <Center fontSize="sm" marginLeft={2}>
                  Ngã ba Cửa Ông
                </Center>
              </Flex>
            </Box>
            <Box color="accentColor" fontSize={22} fontWeight="bold">
              410.000đ
            </Box>
          </Flex>

          <Grid
            templateColumns="auto auto auto"
            columnGap="6px"
            rowGap="6px"
            mt={2}
            width="250px"
          >
            {property.amenities.map((data, index) => (
              <GridItem key={index}>
                <Center
                  bg="#e0992b"
                  color="white"
                  fontWeight="500"
                  fontSize={12}
                  borderRadius={5}
                >
                  {data}
                </Center>
              </GridItem>
            ))}
          </Grid>

          <Flex mt={3} justifyContent="flex-end">
            {/* <Button
              rightIcon={<BsFillCaretDownFill />}
              bg="primaryColor"
              color="black"
              variant="outline"
              size="sm"
            >
              Thông tin chi tiêt
            </Button> */}
            <Button
              colorScheme="teal"
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

/* eslint-disable import/no-cycle */
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
import BookingForm from '../../../booking-form/booking-form';
import { Trip } from '../../coach-box-list';

interface TripProps {
  trip: Trip;
  seatNumber: number;
  numberPlate: number;
  departureTerminal: string;
  arriveTerminal: string;
  basePrice: number;
}

export default function TripComponent({
  trip,
  seatNumber,
  numberPlate,
  departureTerminal,
  arriveTerminal,
  basePrice,
}: TripProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const imageRandom = useMemo(
    () => `/image/${Math.floor(Math.random() * 15 + 1)}.jpeg`,
    []
  );
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
            src={imageRandom}
            alt="Rear view of modern home with pool"
            width={250}
            height={185}
          />
        </Center>

        <Box p="6" width="100%">
          <Flex justifyContent="space-between">
            <Flex justifyContent="flex-start">
              {Math.floor(Math.random() * 2 + 1) === 1 && (
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
                Xe khách {seatNumber} chỗ
              </Badge>
            </Flex>

            <Center>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={
                      i < Math.floor(Math.random() * 5 + 1)
                        ? 'teal.500'
                        : 'gray.300'
                    }
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {Math.floor(Math.random() * 35 + 10)} reviews
              </Box>
            </Center>
          </Flex>
          <Box mt={2}>Biển số: {numberPlate}</Box>
          <Flex justifyContent="space-between" mt={2}>
            <Box>
              <Flex alignItems="center">
                <Text fontWeight="extrabold" lineHeight="tight">
                  {trip.departureTime}:00 &bull;
                </Text>
                <Center fontSize="sm" marginLeft={2}>
                  Bến xe {departureTerminal}
                </Center>
              </Flex>
              <Box fontSize="sm" ml={2}>
                {trip.arriveTime - trip.departureTime}h
              </Box>
              <Flex alignItems="center">
                <Text fontWeight="extrabold" lineHeight="tight">
                  {trip.arriveTime}:00 &bull;
                </Text>
                <Center fontSize="sm" marginLeft={2}>
                  Bến xe {arriveTerminal}
                </Center>
              </Flex>
            </Box>
            <Box color="accentColor" fontSize={22} fontWeight="bold">
              {basePrice}đ
            </Box>
          </Flex>

          <Grid
            templateColumns="auto auto auto"
            columnGap="6px"
            rowGap="6px"
            mt={2}
            width="250px"
          >
            {amenities[Math.floor(Math.random() * 5)].map((data, id) => (
              <GridItem key={id}>
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
      {showBookingForm && (
        <BookingForm
          departureTerminal={departureTerminal}
          arriveTerminal={arriveTerminal}
          basePrice={basePrice}
          tripId={trip.id}
        />
      )}
    </Box>
  );
}

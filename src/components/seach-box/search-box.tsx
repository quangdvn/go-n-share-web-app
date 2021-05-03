/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState, useEffect } from 'react';
import {
  Select,
  Button,
  Box,
  Flex,
  Icon,
  Center,
  Spinner,
} from '@chakra-ui/react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { cities } from 'src/constants/city-district';
import { FaExchangeAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { searchTrip } from '../../api/action';

export interface FormData {
  date: moment.Moment | null;
  departureId: string;
  arrivalId: string;
}

export default function SearchBox() {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    date: router.query.departureDate
      ? moment(router.query.departureDate)
      : moment(),
    departureId: '',
    arrivalId: '',
  });
  useEffect(() => {
    if (router.query.departureDate) {
      setFormData({ ...formData, date: moment(router.query.departureDate) });
    }
  }, [router.query]);

  const handleSearchTrip = async () => {
    const reqBody = {
      departure: formData.departureId,
      arrive: formData.arrivalId,
      departureDate: formData.date?.format('YYYY/MM/DD'),
    };
    setLoading(true);
    const res = await searchTrip(reqBody);
    if (res) {
      router.push({
        pathname: '/result-search',
        query: reqBody,
      });
    }
  };
  return (
    <Flex
      justify={router.pathname === '/result-search' ? 'flex-start' : 'center'}
      height="80%"
      alignItems="center"
    >
      <Box maxW="3xs">
        <Select
          colorScheme="teal"
          variant="outline"
          placeholder="Tỉnh, thành phố nơi đi"
          size="md"
          isFullWidth
          onChange={e => {
            setFormData({
              ...formData,
              departureId: e.target.value,
            });
          }}
          isRequired
        >
          <option value="" disabled style={{ fontWeight: 'bold' }}>
            Tỉnh và Thành phố
          </option>
          {cities.map((city, index) => (
            <option
              value={city.sub_name}
              key={index}
              selected={
                formData.departureId === city.sub_name ||
                (router.query && router.query.departure === city.sub_name)
              }
            >
              {city.name}
            </option>
          ))}
        </Select>
      </Box>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setFormData({
            ...formData,
            departureId: formData.arrivalId,
            arrivalId: formData.departureId,
          });
        }}
      >
        <Center>
          <Icon as={FaExchangeAlt} />
        </Center>
      </Button>

      <Box maxW="3xs">
        <Select
          colorScheme="teal"
          variant="outline"
          placeholder="Tỉnh, thành phố nơi đến"
          size="md"
          isFullWidth
          onChange={e => {
            setFormData({
              ...formData,
              arrivalId: e.target.value,
            });
          }}
        >
          <option value="" disabled style={{ fontWeight: 'bold' }}>
            Tỉnh và Thành phố
          </option>
          {cities.map((city, index) => (
            <option
              value={city.sub_name}
              key={index}
              selected={
                formData.arrivalId === city.sub_name ||
                (router.query && router.query.arrive === city.sub_name)
              }
            >
              {city.name}
            </option>
          ))}
        </Select>
      </Box>
      <Box>
        <SingleDatePicker
          date={formData.date}
          onDateChange={date => {
            setFormData({
              ...formData,
              date,
            });
          }}
          focused={focused}
          // eslint-disable-next-line no-shadow
          onFocusChange={({ focused }) => setFocused(focused)}
          numberOfMonths={1}
          id="single_date"
          small
          showDefaultInputIcon
          inputIconPosition="after"
        />
      </Box>
      {loading ? (
        <Spinner size="lg" color="teal" padding={5} ml={10} />
      ) : (
        <Button colorScheme="teal" size="md" onClick={handleSearchTrip}>
          TÌM VÉ XE
        </Button>
      )}
    </Flex>
  );
}

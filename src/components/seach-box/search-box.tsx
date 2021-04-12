import { useState } from 'react';
import { Select, Button, Box, Flex, Icon, Center } from '@chakra-ui/react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';
import { cities } from 'src/constants/city-district';
import { FaExchangeAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface FormData {
  date: moment.Moment | null;
  departureId: string;
  arrivalId: string;
}

export default function SearchBox() {
  const [focused, setFocused] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    date: moment.default(),
    departureId: '',
    arrivalId: '',
  });
  const router = useRouter();

  const handleSearchCoach = () => {
    const reqBody = {
      date: formData.date?.format('YYYY-MM-DD'),
      departureId: formData.departureId,
      arrivalId: formData.arrivalId,
    };
    console.log('reqBody', reqBody);
    router.push('/result-search');
  };
  return (
    <Flex
      justify={router.pathname === '/result-search' ? 'flex-start' : 'center'}
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
              selected={formData.departureId === city.sub_name}
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
              selected={formData.arrivalId === city.sub_name}
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
      <Button colorScheme="teal" size="md" onClick={handleSearchCoach}>
        TÌM VÉ XE
      </Button>
    </Flex>
  );
}

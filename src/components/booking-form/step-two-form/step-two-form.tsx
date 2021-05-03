/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-cycle */
/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
  Stack,
  Input,
  InputGroup,
  Textarea,
  FormControl,
  FormLabel,
  InputLeftElement,
  Switch,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { Field, useFormikContext } from 'formik';
import { BiPhone } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { MappingPostCodeCity } from 'src/constants/city-district';
import dynamic from 'next/dynamic';
import { IProps } from '../booking-form';
import { getCoordinates } from '../../../api/action';

const Map = dynamic(() => import('../../Map/Map'), { ssr: false });

export interface FormikProps {
  paymentMethod: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  note: string;
  transitType: string;
  hasTransit: boolean;
  address: string;
  transitNote: string;
  location: string[];
}

export default function StepTwoForm() {
  const [isTransit, setIsTransit] = useState(false);
  const [coordinates, setCoordinates] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { values, setValues } = useFormikContext<FormikProps>();
  const router = useRouter();
  const handleGetLocation = async () => {
    const { address } = values;
    const postCode = MappingPostCodeCity[`${router.query.departure}`];
    setLoading(true);
    const coordinatesRes = await getCoordinates(address, postCode);
    if (coordinatesRes) {
      console.log('coordinates', coordinatesRes);
      setCoordinates([coordinatesRes[1], coordinatesRes[0]]);
      setValues({
        ...values,
        location: [`${coordinatesRes[1]}`, `${coordinatesRes[0]}`],
      });
    }
    setLoading(false);
  };

  return (
    <Stack spacing={4} padding={10}>
      <Field name="fullName">
        {({ field }: IProps) => (
          <FormControl id="fullName" isRequired>
            <FormLabel>Họ tên</FormLabel>
            <Input placeholder="Họ và tên hành khách" {...field} />
          </FormControl>
        )}
      </Field>
      <Field name="phoneNumber">
        {({ field }: IProps) => (
          <FormControl id="phoneNumber" name="phoneNumber" isRequired>
            <FormLabel>Số điện thoại</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiPhone color="gray.300" />}
              />
              <Input type="tel" placeholder="Số điện thoại" {...field} />
            </InputGroup>
          </FormControl>
        )}
      </Field>
      <Field name="email">
        {({ field }: IProps) => (
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Địa chỉ Email" {...field} />
          </FormControl>
        )}
      </Field>

      <FormControl alignItems="center">
        <FormLabel mb="0">Bạn có muốn đi xe transit không?</FormLabel>
        <Switch
          colorScheme="teal"
          id="hasTransit"
          paddingTop={5}
          onChange={() => {
            setIsTransit(!isTransit);
            setValues({ ...values, hasTransit: !isTransit });
          }}
        />
      </FormControl>

      {isTransit && (
        <Stack spacing={4}>
          <Field name="address" mt={5}>
            {({ field }: IProps) => (
              <FormControl id="address" isRequired>
                <FormLabel>Địa chỉ đón</FormLabel>
                <Input placeholder="Địa chỉ" {...field} />
              </FormControl>
            )}
          </Field>
          {loading ? (
            <Spinner size="lg" color="teal" padding={5} ml={10} />
          ) : (
            <Button
              colorScheme="teal"
              size="sm"
              marginLeft={5}
              width={195}
              onClick={handleGetLocation}
            >
              Xác nhận ví trí trên bản đồ
            </Button>
          )}

          {coordinates && <Map coordinates={coordinates} />}

          <Field name="transitNote" mt={5}>
            {({ field }: IProps) => (
              <FormControl id="transitNote">
                <FormLabel>Ghi chú Transit</FormLabel>
                <Textarea defaultValue="" size="lg" {...field} />
              </FormControl>
            )}
          </Field>
        </Stack>
      )}

      <Field name="note">
        {({ field }: IProps) => (
          <FormControl id="note">
            <FormLabel>Ghi chú</FormLabel>
            <Textarea defaultValue="" size="lg" {...field} />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        )}
      </Field>
    </Stack>
  );
}

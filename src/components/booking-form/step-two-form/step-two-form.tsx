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
  Select,
  Box,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { BiPhone } from 'react-icons/bi';
import { IProps } from '../booking-form';

export default function StepTwoForm() {
  const [isTransit, setIsTransit] = useState(false);
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
      <Field name="hasTransit">
        {({ field }: IProps) => (
          <FormControl alignItems="center">
            <FormLabel mb="0">Bạn có muốn đi xe transit không?</FormLabel>
            <Switch
              {...field}
              colorScheme="teal"
              id="hasTransit"
              paddingTop={5}
              onChange={() => {
                setIsTransit(!isTransit);
              }}
            />
          </FormControl>
        )}
      </Field>
      {isTransit && (
        <Stack spacing={4}>
          <Field name="transitType">
            {({ field }: IProps) => (
              <FormControl id="transitType">
                <FormLabel>Hình thức transit</FormLabel>
                <Select placeholder="Lựa chọn loại transit" {...field}>
                  <option value="1">Chiều đi</option>
                  <option value="2">Chiều về</option>
                  <option value="3">Hai chiều</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Field name="address" mt={5}>
            {({ field }: IProps) => (
              <FormControl id="address" isRequired>
                <FormLabel>Địa chỉ đón</FormLabel>
                <Input placeholder="Địa chỉ" {...field} />
              </FormControl>
            )}
          </Field>
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

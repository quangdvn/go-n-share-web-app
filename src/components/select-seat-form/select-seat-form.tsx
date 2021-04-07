/* eslint-disable react/no-children-prop */
import {
  Box,
  Flex,
  Text,
  Stack,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
  VStack,
  FormControl,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { ImCheckboxChecked } from 'react-icons/im';

export default function SelectSeatForm() {
  return (
    <Box padding={10}>
      <Text align="center">Vui lòng chọn vị trí ngồi</Text>
      <Flex justify="space-between" paddingLeft={20} paddingRight={20}>
        <VStack spacing={4}>
          <Text fontWeight="bold">Chú thích</Text>
          <Flex alignItems="center">
            <Box w={4} h={4} borderColor="#E2E8F0" borderWidth={2} />
            <Text marginLeft={3}>Còn trống</Text>
          </Flex>
          <Flex alignItems="center">
            <Box w={4} h={4} background="#E2E8F0" />
            <Text marginLeft={3} marginRight={25}>
              Đã đặt
            </Text>
          </Flex>
          <Flex alignItems="center">
            <ImCheckboxChecked size={16} color="#38A169" />
            <Text marginLeft={3} marginRight={15}>
              Đã chọn
            </Text>
          </Flex>
        </VStack>
        <Stack spacing={10} direction="row">
          <Field name="seatNumber">
            {({ field }) => (
              <FormControl id="seatNumber" name="seatNumber">
                <CheckboxGroup colorScheme="green">
                  <SimpleGrid columns={2} spacing={2} marginTop={10}>
                    <Checkbox value="1" isDisabled {...field}>
                      Ghế 1
                    </Checkbox>
                    <Checkbox value="2" {...field}>
                      Ghế 2
                    </Checkbox>
                    <Checkbox value="3" {...field}>
                      Ghế 3
                    </Checkbox>
                    <Checkbox value="4" {...field}>
                      Ghế 4
                    </Checkbox>
                    <Checkbox value="5" {...field}>
                      Ghế 5
                    </Checkbox>
                    <Checkbox value="6" {...field}>
                      Ghế 6
                    </Checkbox>
                  </SimpleGrid>
                </CheckboxGroup>
              </FormControl>
            )}
          </Field>
        </Stack>
      </Flex>
    </Box>
  );
}

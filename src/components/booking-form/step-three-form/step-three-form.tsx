/* eslint-disable import/no-cycle */
/* eslint-disable react/no-children-prop */
import { FormControl, FormLabel, Box, Text, Flex } from '@chakra-ui/react';
import { Field } from 'formik';

export default function StepThreeForm() {
  return (
    <Box padding={10}>
      <FormControl>
        <FormLabel>Vui lòng chọn phương thức thanh toán</FormLabel>
        <Flex alignItems="center">
          <Field type="radio" value="cash" checked />
          <Text marginLeft={5}>Tiền mặt</Text>
        </Flex>
      </FormControl>
    </Box>
  );
}

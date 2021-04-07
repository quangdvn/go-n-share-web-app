/* eslint-disable react/no-children-prop */
import { FormControl, FormLabel, Box, Text, Flex } from '@chakra-ui/react';
import { Field } from 'formik';

export default function StepThreeForm() {
  return (
    <Box padding={10}>
      <FormControl name="paymentMethod">
        <FormLabel>Vui lòng chọn phương thức thanh toán</FormLabel>
        <Flex alignItems="center">
          <Field type="radio" name="paymentMethod" value="1" />
          <Text marginLeft={5}>Tiền mặt</Text>
        </Flex>
        <Flex alignItems="center">
          <Field type="radio" name="paymentMethod" value="2" />
          <Text marginLeft={5}>MoMo</Text>
        </Flex>
      </FormControl>
    </Box>
  );
}

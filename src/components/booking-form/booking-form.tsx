/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Progress, Divider, Flex, Button, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import StepOneForm from './step-one-form/step-one-form';
import StepTwoForm from './step-two-form/step-two-form';
import StepThreeForm from './step-three-form/step-three-form';

export default function BookingForm() {
  const [progressValue, setProgressValue] = useState(1);

  return (
    <Formik
      initialValues={{
        paymentMethod: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        note: '',
        transitType: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <Progress hasStripe value={(100 * progressValue) / 3} />
        {progressValue === 1 && <StepOneForm />}
        {progressValue === 2 && <StepTwoForm />}
        {progressValue === 3 && <StepThreeForm />}

        <Divider marginTop={5} />
        <Flex justify="space-between" padding={5}>
          <Button
            size="sm"
            onClick={() => {
              if (progressValue !== 1) {
                setProgressValue(progressValue - 1);
              }
            }}
          >
            Quay lại
          </Button>
          <Flex alignItems="center">
            Tổng cộng: <Text color="blue"> 200,000đ</Text>
            <Button
              colorScheme="teal"
              size="sm"
              marginLeft={5}
              type={progressValue === 3 ? 'submit' : 'button'}
              onClick={() => {
                if (progressValue !== 3) {
                  setProgressValue(progressValue + 1);
                }
              }}
            >
              {progressValue === 3 ? 'Đặt chỗ' : 'Tiếp'}
            </Button>
          </Flex>
        </Flex>
      </Form>
    </Formik>
  );
}

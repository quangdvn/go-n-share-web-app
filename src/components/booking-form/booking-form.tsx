/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-cycle */
/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
  Progress,
  Divider,
  Flex,
  Button,
  Box,
  Spinner,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import StepOneForm from './step-one-form/step-one-form';
import StepTwoForm, { FormikProps } from './step-two-form/step-two-form';
import StepThreeForm from './step-three-form/step-three-form';
import { bookingTrip } from '../../api/action';

export interface IProps {
  field: any;
}
interface BookingFormProps {
  departureTerminal: string;
  arriveTerminal: string;
  basePrice: number;
  tripId: number;
}

export default function BookingForm({
  departureTerminal,
  arriveTerminal,
  basePrice,
  tripId,
}: BookingFormProps) {
  const [progressValue, setProgressValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const initialValues: FormikProps = {
    paymentMethod: 'cash',
    fullName: '',
    phoneNumber: '',
    email: '',
    note: '',
    transitType: '',
    hasTransit: false,
    address: '',
    transitNote: '',
    location: [],
  };
  const router = useRouter();
  const handleBookingSubmit = async (values: FormikProps) => {
    const reqBody = {
      tripId,
      price: basePrice,
      bookingName: values.fullName,
      bookingPhone: values.phoneNumber,
      bookingMail: values.email,
      hasTransit: values.hasTransit,
      notes: values.note,
      paymentMethod: values.paymentMethod,
      transitDetail: {
        address: values.address,
        latitude: values.location[0],
        longitude: values.location[1],
        notes: values.transitNote,
      },
    };
    setLoading(true);
    const res = await bookingTrip(reqBody);
    setLoading(false);
    if (res) {
      router.push('/');
    }
  };
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          handleBookingSubmit(values);
        }}
      >
        <Form>
          <Progress
            hasStripe
            value={(100 * progressValue) / 3}
            colorScheme="teal"
          />
          {progressValue === 1 && (
            <StepOneForm
              departureTerminal={departureTerminal}
              arriveTerminal={arriveTerminal}
            />
          )}
          {progressValue === 2 && <StepTwoForm />}
          {(progressValue === 3 || progressValue === 4) && <StepThreeForm />}

          <Divider marginTop={5} />
          <Flex justify="space-between" padding={5}>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => {
                if (progressValue !== 1) {
                  setProgressValue(progressValue - 1);
                }
              }}
              variant="outline"
              leftIcon={<IoMdArrowRoundBack />}
            >
              Quay lại
            </Button>
            <Flex alignItems="center">
              {/* Tổng cộng:{' '}
              <Text color="#319795" fontWeight="bold" marginLeft={2}>
                {' '}
                200,000đ
              </Text> */}
              {loading ? (
                <Spinner size="lg" color="teal" padding={5} ml={10} />
              ) : (
                <Button
                  colorScheme="teal"
                  size="sm"
                  marginLeft={5}
                  type={progressValue === 4 ? 'submit' : 'button'}
                  onClick={() => {
                    setProgressValue(progressValue + 1);
                  }}
                >
                  {progressValue === 3 ? 'Đặt chỗ' : 'Tiếp'}
                </Button>
              )}
            </Flex>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
}

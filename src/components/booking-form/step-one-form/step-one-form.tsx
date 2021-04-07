/* eslint-disable react/no-children-prop */
import { Box, Flex, Center, Text, Radio, Divider } from '@chakra-ui/react';

export default function StepOneForm() {
  return (
    <Flex justify="space-around" padding={10}>
      <Box>
        <Text fontWeight="bold" fontSize={16}>
          Điểm đón
        </Text>
        <Radio colorScheme="green" value="2" isChecked>
          <Text>22:00 &#149; Bến xe Mỹ Đình</Text>
        </Radio>
      </Box>
      <Center height="150px" color="#171923">
        <Divider
          orientation="vertical"
          variant="solid"
          size="2px"
          colorScheme="blackAlpha"
        />
      </Center>
      <Box>
        <Text fontWeight="bold" fontSize={16}>
          Điểm trả
        </Text>
        <Radio colorScheme="green" value="2" isChecked>
          <Text>22:00 &#149; Bến xe Móng Cái</Text>
        </Radio>
      </Box>
    </Flex>
  );
}

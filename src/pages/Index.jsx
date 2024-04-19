// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={10}>Business Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30K" percentage="12.5%" status="increase" />
        <StatBox icon={FaShoppingCart} title="Sales" amount="260 units" percentage="5.4%" status="increase" />
        <StatBox icon={FaUsers} title="New Customers" amount="80" percentage="3.2%" status="decrease" />
        <StatBox icon={FaChartLine} title="Growth" amount="24%" percentage="8.1%" status="increase" />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage, status }) => (
  <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
    <Flex alignItems="center">
      <Box as={Icon} size="3rem" mr={2} />
      <Box>
        <StatLabel fontWeight="bold">{title}</StatLabel>
        <StatNumber>{amount}</StatNumber>
        <StatHelpText>
          <StatArrow type={status} />
          {percentage}
        </StatHelpText>
      </Box>
    </Flex>
  </Stat>
);

export default Index;

import {
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Text,
  Icon,
} from "@chakra-ui/react";

function CardFooter({ post, ...rest }) {
  return (
    <Box p={5} layerStyle="requestCard">
      <Text mb={4} fontWeight="bold" fontSize="18px">
        How Can You Help with this request?
      </Text>

      <InputGroup size="md">
        <Input
          placeholder="Type here..."
          borderRadius="50px"
          border="none"
          bg="input"
        />
        <InputRightElement>
          <Icon viewBox="0 0 18 15" opacity="0.5">
            <path
              d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4Z"
              fill="#5F7495"
            />
          </Icon>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
export default CardFooter;

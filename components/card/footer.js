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
          <Icon viewBox="0 0 24 24" opacity="0.5">
            <path
              fill="#fff"
              d="M 15.990234 1.9902344 A 1.0001 1.0001 0 0 0 15.292969 3.7070312 L 17.585938 6 L 17 6 C 10.936593 6 6 10.936593 6 17 A 1.0001 1.0001 0 1 0 8 17 C 8 12.017407 12.017407 8 17 8 L 17.585938 8 L 15.292969 10.292969 A 1.0001 1.0001 0 1 0 16.707031 11.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 20.707031 6.2929688 L 16.707031 2.2929688 A 1.0001 1.0001 0 0 0 15.990234 1.9902344 z M 2.984375 7.9863281 A 1.0001 1.0001 0 0 0 2 9 L 2 19 C 2 20.64497 3.3550302 22 5 22 L 19 22 C 20.64497 22 22 20.64497 22 19 L 22 18 A 1.0001 1.0001 0 1 0 20 18 L 20 19 C 20 19.56503 19.56503 20 19 20 L 5 20 C 4.4349698 20 4 19.56503 4 19 L 4 9 A 1.0001 1.0001 0 0 0 2.984375 7.9863281 z"
            />
          </Icon>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
export default CardFooter;

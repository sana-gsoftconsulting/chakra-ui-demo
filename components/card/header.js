import {
  Text,
  Heading,
  Icon,
  Button,
  Avatar,
  WrapItem,
  Stack,
  HStack,
} from "@chakra-ui/react";

function CardHeader({ post, ...rest }) {
  return (
    <HStack justify="space-between" align="center">
      <Stack direction={["column", "row"]}>
        <Button
          fontFamily="Poppins"
          fontSize="13px"
          fontWeight="600"
          lineHeight="19px"
          color="#FFFFFF"
          height="44px"
          fontStyle="normal"
          width="94px"
          _hover={{
            background: "customBtn",
            color: "#FFFFFF",
          }}
          bg="customBtn"
          borderRadius="100px"
          textTransform="capitalize"
        >
          Funding
        </Button>

        <HStack align="center">
          <WrapItem>
            <Avatar
              height="44px"
              width="44px"
              name={post.author.name}
              src={post.author.profilePictureUrl}
              ms={1}
            />
          </WrapItem>
          <Heading
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="600"
            fontStyle="normal"
            lineHeight="27px"
            color="#FFFFFF"
            ms={2}
            ps={1}
          >
            {post.author.name}
          </Heading>
        </HStack>

        <Text
          fontFamily="Poppins"
          fontSize="12px"
          fontWeight="normal"
          fontStyle="normal"
          lineHeight="18px"
          color="#FFFFFF"
          opacity="0.5"
          ps={1}
          display="flex"
          alignItems="center"
        >
          {post.time}
        </Text>
      </Stack>
      <Icon viewBox="0 0 200 200" opacity="0.5" fontSize="20px">
        <path
          fill="white"
          d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z"
        />
      </Icon>
    </HStack>
  );
}
export default CardHeader;

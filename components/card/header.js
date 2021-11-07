import {
  Box,
  Text,
  Heading,
  Icon,
  Button,
  Avatar,
  WrapItem,
  HStack,
} from "@chakra-ui/react";

function CardHeader({ post, ...rest }) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <HStack>
        <Button fontFamily="Poppins" 
        fontSize	="13px"
        fontWeight="600"
        lineHeight="19px"
       color="#FFFFFF"
       _hover={{
        background: "customBtn",
        color: "#FFFFFF",
      }}
        bg="customBtn" borderRadius="50px" textTransform="capitalize">
          Funding
        </Button>
        <WrapItem>
          <Avatar name={post.author.name} src={post.author.profilePictureUrl} />
        </WrapItem>
        <Heading fontSize="xl">{post.author.name}</Heading>
        <Text fontSize="xs" opacity="0.5">
          {post.time}
        </Text>
      </HStack>
      <Icon viewBox="0 0 200 200" opacity="0.5" fontSize="20px">
        <path
          fill="white"
          d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z"
        />
      </Icon>
    </Box>
  );
}
export default CardHeader;

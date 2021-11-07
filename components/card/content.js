import { Box, Text } from "@chakra-ui/react";

function CardContent({ post, ...rest }) {
  return (
    <Box>
      <Text mt={4} opacity="0.8" fontSize="18px">
        {post.content}
      </Text>
      <Text mt={4} opacity="0.8" fontSize="18px">
        {post.description}
      </Text>
    </Box>
  );
}
export default CardContent;

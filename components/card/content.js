import { Box, Text } from "@chakra-ui/react";

function CardContent({ post, ...rest }) {
  return (
    <Box>
      <Text
        mt={4}
        opacity="0.8"
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="normal"
        fontStyle="normal"
        lineHeight="140%"
        color="#FFFFFF"
      >
        {post.content}
      </Text>
      <Text
        mt={4}
        opacity="0.8"
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="normal"
        fontStyle="normal"
        lineHeight="140%"
        color="#FFFFFF"
      >
        {post.description}
      </Text>
    </Box>
  );
}
export default CardContent;

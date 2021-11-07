import { Box } from "@chakra-ui/react";
import CardHeader from "./header";
import CardContent from "./content";
import CardFooter from "./footer";

function Card({ post, ...rest }) {
  return (
    <Box width="640px" shadow="md" {...rest} layerStyle="card">
      <Box p={10}>
        <CardHeader post={post} />
        <CardContent post={post} />
      </Box>
      <CardFooter />
    </Box>
  );
}
export default Card;

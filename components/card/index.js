import { Box } from "@chakra-ui/react";
import CardHeader from "./header";
import CardContent from "./content";
import CardFooter from "./footer";

function Card({ post, ...rest }) {
  return (
    <Box width="640px" 
    width={[
      "100%", // 0-30em
      "100%", // 30em-48em
      "100%", // 30em-48em
      "640px", // 30em-48em
     
    ]}
    
    shadow="md" {...rest} layerStyle="card">
      <Box p={10}>
        <CardHeader post={post} />
        <CardContent post={post} />
      </Box>
      <CardFooter />
    </Box>
  );
}
export default Card;

import { Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"sm"} name="Aniket Bhosale" src="/profilepic.jpeg" />
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer
        </Text>
      </Flex>
      <Link to={"/auth"} as={RouterLink} fontSize={14} fontWeight={"medium"} color={"blue.400"} style={{textDecoration:"none"}} cursor={"pointer"}>Log Out</Link>
    </Flex>
  );
};

export default SuggestedHeader;

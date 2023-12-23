import {  Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"


const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>See All</Text>
        </Flex>

        <SuggestedUser name="Dan Abrahmov" followers={1892} avatar="https://shorturl.at/msQ69"/>
        <SuggestedUser name="Ryan Florence" followers={567} avatar="https://shorturl.at/msQ69"/>
        <SuggestedUser name="Christain Nwanba" followers={892} avatar="https://shorturl.at/msQ69"/>
        

        <Box fontSize={12} color={"gray.500"} mt={5}>© 2023 Built by{" "} Aniket</Box>


    </VStack>
  )
}

export default SuggestedUsers
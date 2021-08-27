import { HStack, Icon, Text} from "@chakra-ui/react";
import { BiFilterAlt } from 'react-icons/bi'

export function Filter() {
    return(
        <HStack>
            <Icon as={BiFilterAlt} fontSize="18" color="black"></Icon>
            <Text fontSize="2xl" color="black" >Filtros</Text>
        </HStack>
    );
}
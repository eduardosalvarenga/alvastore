import { Flex, Input, IconButton } from "@chakra-ui/react";
import { BiSearchAlt2 } from 'react-icons/bi'

export function Search( {search, setSearch } ) {
    return(
        <Flex 
            as="label" 
            flex="1" 
            py="4" 
            px="6" 
            ml="8" 
            maxWidth={700} 
            alignSelf="center" 
            color="gray.200" 
            position="relative" 
            bg="black" 
            borderRadius="2xl"
        >
            <Input 
                color="gray.50" 
                variant="unstyled" 
                placeholder="Digite aqui o item que você procura" 
                _placeholder={{ color: 'white'}}
                value={search}
                onChange={event => setSearch(event.target.value)}
            >
            </Input>

            <IconButton aria-label="search" as={BiSearchAlt2} size="sm" alignSelf="center" colorScheme="none" color="white"></IconButton>
        </Flex>
    );
}




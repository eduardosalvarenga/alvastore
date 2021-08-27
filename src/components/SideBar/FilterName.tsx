import { Checkbox, HStack, Text } from "@chakra-ui/react";

interface FilterNameProps {
    filterName: string;
}

export function FilterName({filterName} : FilterNameProps) {
    return(
        <HStack mt="3" >
            <Checkbox borderColor="black"></Checkbox>
            <Text color="black" fontSize="sm">{filterName}</Text>
        </HStack>
    );
}
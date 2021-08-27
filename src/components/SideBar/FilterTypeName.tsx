import { Text } from "@chakra-ui/react";

interface FilterTypeNameProps {
    name: string;
}

export function FilterTypeName({name} : FilterTypeNameProps) {
    return(
        <Text color="black" border="2px">{name}</Text>
    );
}
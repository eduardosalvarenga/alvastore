import { Th, Thead, Tr } from "@chakra-ui/react";

export function ShopppingCart() {
    return(
        <Thead>
            <Tr>
                <Th px="6" widht="8"></Th>
                <Th px="6" widht="8">PRODUTO</Th>
                <Th px="6" widht="8">QUANTIDADE</Th>
                <Th px="6" widht="8">SUBTOTAL</Th>
                <Th px="6" widht="8"></Th>
            </Tr>
        </Thead>
    );
}
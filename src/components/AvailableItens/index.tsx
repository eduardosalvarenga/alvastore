import { Box, Flex, Grid } from "@chakra-ui/react";
import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import { Itens } from "./Itens";

export function AvailableItens( {search} ) {
  const products = useContext(ProductsContext);

  const itensFiltered = products.filter(product => {
    return product.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Flex w="100%" my="2" maxWidth={1480} px="2">
      <Box flex="1" bg="gray.300" ml="150" mt={8}>
        <Grid templateColumns="repeat(3, 2fr)" gap={15}>
          {itensFiltered.map((product) => (
            <Itens
              key={product.id}
              product={product}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

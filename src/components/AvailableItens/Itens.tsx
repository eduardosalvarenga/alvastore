import {
  Box,
  GridItem,
  Image,
  Stack,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import { CartContext } from '../../providers/CartContext';
import { useContext } from 'react';

export function Itens({ product }) {
  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    addToCart(
      product.id,
      1
    )
    alert("Item adicionado ao carrinho com sucesso")
  }

  return (
    <Box ml="5" w="80%">
      <GridItem>
        <Image src={product.media.source} alt="Camiseta1" />
      </GridItem>
      <Stack p={2} spacing={2} align="center">
        <Text color="black" align="left">
          {product.name}
        </Text>
        <Text color="black">{product.price.formatted_with_symbol}</Text>
        <Button
          onClick={() => handleAddToCart()}
          color="black"
          size="sm"
          leftIcon={<Icon as={CgShoppingCart} />}
        >
          Adicionar ao carrinho
        </Button>
      </Stack>
    </Box>
  );
}

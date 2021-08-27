import {
  Box,
  Flex,
  Heading,
  Table,
  Text,
  Link,
} from "@chakra-ui/react";
import { ItensAdd } from "./ItensAdd";
import { ShopppingCart } from "./ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import CheckoutButton from "../Checkout/CheckoutButton.tsx";

export function ShoppingItens() {
  const { cart } = useContext(CartContext);
  const isEmpty = cart.line_items == undefined;

  const EmptyCart = () => <Text>Carrinho sem itens</Text>;

  const CartWithItems = () => (
    <>
      <Table colorScheme="black">
        <ShopppingCart />

        {cart.line_items.map((item) => (
          <ItensAdd key={item.id} item={item} />
        ))}
      </Table>
      <Text color="black" size="lg" ml="730" pt={4}>
        <b>Total: {cart.subtotal.formatted_with_symbol}</b>
      </Text>
    </>
  );

  return (
    <Flex w="100%" my="6" maxWidth={1000} mx="auto" px="6">
      <Box flex="1" borderRadius={8} bg="white" p="8">
        <Heading size="md" fontWeight="normal" color="black">
          CARRINHO DE COMPRAS
        </Heading>
        {isEmpty ? <EmptyCart /> : <CartWithItems />}
        <Link href="/checkout" color="black">
          <CheckoutButton />
        </Link>
      </Box>
    </Flex>
  );
}

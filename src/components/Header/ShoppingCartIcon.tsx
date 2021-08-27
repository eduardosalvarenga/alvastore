import { Flex, Icon, Text, HStack, Link } from "@chakra-ui/react";

import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

export function ShoppingCartIcon() {
  const cart = useContext(CartContext);

  return (
    <Flex align="center" pl={5}>
      <HStack>
        <Link href="/" color="black">
          <HStack>
            <Icon
              as={AiOutlineHome}
              fontSize="35"
              alignSelf="center"
              color="black"
            ></Icon>
            <Text fontSize="2xl" color="black">
              Home
            </Text>
          </HStack>
        </Link>
        <Link href="/confirm" color="black" pl={3}>
          <HStack>
            <Icon
              as={CgShoppingCart}
              fontSize="35"
              alignSelf="center"
              color="black"
            />
            <span>{cart.cart.total_items}</span>

            <Text fontSize="2xl" color="black">
              Carrinho de Compras
            </Text>
          </HStack>
        </Link>
      </HStack>
    </Flex>
  );
}

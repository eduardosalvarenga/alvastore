import {
  HStack,
  Icon,
  IconButton,
  Text,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BiMinusCircle, BiPlusCircle, BiTrash } from "react-icons/bi";
import { CartContext } from "../../providers/CartContext";

export function ItensAdd({ item }) {
  const { cart, addToCart, updateCartQuantity, removeFromCart } =
    useContext(CartContext);

  // Função de aumentar a quantidade do item no carrinho em +1 com base no id
  function handleUpdateCartQuantityPlus() {
    updateCartQuantity(item.id, item.quantity + 1);
  }

  // Função de diminuir a quantidade do item no carrinho em -1 com base no id do item
  function handleUpdateCartQuantityMinus() {
    updateCartQuantity(item.id, item.quantity - 1);
  }

  //Função de deletar um item do carrinho com base no id
  function handleDeleteCartItem() {
    removeFromCart(item.id);
  }

  return (
    <Tbody key={item.id}>
      <Tr>
        <Td color="black">
          <img src={item.media.source} width="60%" />
        </Td>
        <Td color="black">{item.name}</Td>
        <Td color="black">
          <HStack>
            <IconButton
              onClick={() => handleUpdateCartQuantityMinus()}
              bgColor="white"
              size="sm"
              aria-label="Minus"
              icon={<Icon as={BiMinusCircle} />}
            ></IconButton>
            <Text>{item.quantity}</Text>
            <IconButton
              onClick={() => handleUpdateCartQuantityPlus()}
              bgColor="white"
              size="sm"
              aria-label="Plus"
              icon={<Icon as={BiPlusCircle} />}
            ></IconButton>
          </HStack>
        </Td>
        <Td color="black">{item.line_total.formatted_with_symbol}</Td>
        <Td color="black">
          <IconButton
            bgColor="white"
            onClick={() => handleDeleteCartItem()}
            aria-label="Remove"
            icon={<Icon as={BiTrash} />}
          ></IconButton>
        </Td>
      </Tr>
    </Tbody>
  );
}

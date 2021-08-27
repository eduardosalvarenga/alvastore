import { Box, Flex, Heading } from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import Form from '../components/Checkout/Form';
import { Header } from "../components/Header";
import commerce from '../lib/commerce';
import { CartContext } from '../providers/CartContext';

export default function Checkout() {
  const { cart, order, handleCaptureCheckout, errorMessage } = useContext(CartContext);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const cart = await commerce.cart.retrieve();
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1000} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="white" p="6">
          <Heading size="md" fontWeight="normal" color="black">
            CHECKOUT
            { checkoutToken && <Form checkoutToken={checkoutToken} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

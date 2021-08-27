import { Box } from "@chakra-ui/react";

export default function CheckoutButton() {
    return (
        <Box
          as="button"
          borderRadius="3xl"
          bg="black"
          color="white"
          px={4}
          h={8}
          mt="4"
          ml="700"
        >
          FINALIZAR PEDIDO
        </Box>
    );
}
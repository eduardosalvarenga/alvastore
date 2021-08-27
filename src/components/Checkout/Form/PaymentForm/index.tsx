import { Text, FormControl } from "@chakra-ui/react";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@chakra-ui/react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const PaymentForm = ({
  checkoutToken,
  shippingData,
  onCaptureCheckout,
  changeStep,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingState,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
      changeStep(2);
    }
  };

  return (
    <>
      <Text pl={6}>Método de Pagamento</Text>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <>
              <FormControl onSubmit={() => handleSubmit(event, elements, stripe)} pt={4} pl={6}>
                <CardElement/>
                <Button
                  bg="green"
                  colorScheme="green"
                  color="white"
                  type="submit"
                  variant="solid"
                  mt="10"
                  size="md"
                  disabled={!stripe}
                  ml={730}
                  onClick={() => handleSubmit(event, elements, stripe)}
                >
                  Pagar {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </FormControl>
            </>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;

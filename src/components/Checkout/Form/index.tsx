import ShippingForm from "./ShippingForm/Index";
import { useState } from "react";
import PaymentForm from "./PaymentForm/index";
import { Text, Button, Link } from "@chakra-ui/react";

const Form = ({ checkoutToken, order, onCaptureCheckout, error }) => {
  const [step, setStep] = useState(0);
  const [shippingData, setShippingData] = useState({});

  // Enviar os dados preenchidos no formulário de Shipping e mudar a etapa do processo final
  const submit = (data) => {
    setShippingData(data);
    changeStep(1);
  };

  // Mudar a etapa de preenchimento
  const changeStep = (step) => {
    setStep(step);
  };

  let Confirmation = () =>
      <>
        <div><br />
          <Text>{order.customer != undefined ? "Obrigado pela compra, " + order.customer.firstname + " " + order.customer.lastname + ", um e-mail com as informações do pedido foi enviado para " + order.customer.email+"." : "Obrigado pela compra"}</Text>
          <Text>{order.customer != undefined ? "Número de referência: " + order.customer_reference : " "} </Text>
          <Link href="/"><Button bg="red" color="white" variant="solid" mt="10" size="md">Voltar</Button></Link>
        </div>
      </>

  if (error) {
    <>
      <Text>Erro: {error}</Text>
    </>;
  }

  return (
    <>
      {checkoutToken && step === 0 && (
        <ShippingForm checkoutToken={checkoutToken} submit={submit} />
      )}
      {step === 1 && shippingData && checkoutToken && (
        <>
          <ShippingForm checkoutToken={checkoutToken} submit={submit} />

          <PaymentForm
            checkoutToken={checkoutToken}
            shippingData={shippingData}
            onCaptureCheckout={onCaptureCheckout}
            changeStep={changeStep}
          />
        </>
      )}
      {step === 2 && <Confirmation />}
    </>
  );
};

export default Form;

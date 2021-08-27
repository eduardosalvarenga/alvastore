import {
  FormLabel,
  SimpleGrid,
  Flex,
  Button,
  Select,
  FormControl,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import commerce from "../../../../lib/commerce";
import { Input } from "../FormInput/index";

const ShippingForm = ({ checkoutToken, submit }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingStates, setShippingStates] = useState([]);
  const [shippingState, setShippingState] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const { register, handleSubmit } = useForm();

  //Funções para retornar Arrays e Mapear eles com base nos Objetos.
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const states = Object.entries(shippingStates).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  //Chamada API para adquirir os países disponíveis para envio
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  //Chamada API para adquirir os Estados disponíveis para envio com base no país selecionado
  const fetchStates = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingStates(subdivisions);
    setShippingState(Object.keys(subdivisions)[0]);
  };

  //Chamada API para adquirir o frete com base no país e região selecionado
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0]?.id);
  };

  //Chamada da função de países
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  //Chamada da função de Estados após os países terem sido carregados
  useEffect(() => {
    if (shippingCountry) fetchStates(shippingCountry);
  }, [shippingCountry]);

  //Chamada da função de Frete após os países e Estados terem sido carregados
  useEffect(() => {
    if (shippingState)
      fetchShippingOptions(checkoutToken.id, shippingCountry, shippingState);
  }, [shippingState]);

  return (
    <>
      <Flex
        as="form"
        width="100%"
        p="6"
        flexDir="column"
        onSubmit={handleSubmit((data) =>
          submit({ ...data, shippingCountry, shippingState, shippingOption })
        )}>
        <SimpleGrid columns={2}>
          <Input name="firstName" label="Nome" {...register("firstName")} />
          <Input name="lastName" label="Sobrenome" {...register("lastName")} />
          <Input name="address1" label="Endereço" {...register("address")} />
          <Input name="email" label="Email" {...register("email")} />
          <Input name="city" label="Cidade" {...register("city")} />
          <Input name="zip" label="ZIP" {...register("ZIP")} />
        </SimpleGrid>
        <SimpleGrid columns={3} ml={3}>
          <FormControl pr={4} width="100%">
            <FormLabel>País</FormLabel>
            <Select
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl pr={6} width="100%">
            <FormLabel>Estado</FormLabel>
            <Select
              value={shippingState}
              onChange={(e) => setShippingState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl width="95%">
            <FormLabel>Frete</FormLabel>
            <Select
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
            >
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </SimpleGrid>
        <br />
        <Button type="submit" mt="4" ml={2} width="98%" size="md">
          Checkout
        </Button>
      </Flex>
    </>
  );
};

export default ShippingForm;

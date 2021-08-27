import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
      <FormControl p={4}>
        {!!label && <FormLabel htmlFor={name}> {label} </FormLabel>}

        <ChakraInput required name={name} id={name} ref={ref} {...rest} />
      </FormControl>
  );
};

export const Input = forwardRef(InputBase)
import { InputHTMLAttributes, ComponentProps } from "react";

import { InputContainer } from "./styled";

type InputProps =  InputHTMLAttributes<HTMLInputElement> & ComponentProps<typeof InputContainer> 

export function Input(props: InputProps) {
  return (
    <InputContainer {...props}/>
  )
}
